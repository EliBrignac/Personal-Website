"use client"

import { useState, useEffect, useRef } from "react"

interface DataPoint {
  x: number;
  y: number;
  label: string;
}

interface SkillData {
  name: string;
  color: string;
  data: DataPoint[];
}

const SKILLS: SkillData[] = [
  {
    name: 'Python',
    color: 'rgb(59, 130, 246)',
    data: [
      { x: 0, y: 30, label: '2020' },
      { x: 25, y: 55, label: '2022' },
      { x: 50, y: 75, label: '2023' },
      { x: 75, y: 90, label: '2024' },
      { x: 100, y: 95, label: 'Now' },
    ],
  },
  {
    name: 'Machine Learning',
    color: 'rgb(139, 92, 246)',
    data: [
      { x: 0, y: 20, label: '2020' },
      { x: 25, y: 35, label: '2022' },
      { x: 50, y: 60, label: '2023' },
      { x: 75, y: 80, label: '2024' },
      { x: 100, y: 88, label: 'Now' },
    ],
  },
  {
    name: 'Data Analysis',
    color: 'rgb(16, 185, 129)',
    data: [
      { x: 0, y: 25, label: '2020' },
      { x: 25, y: 50, label: '2022' },
      { x: 50, y: 70, label: '2023' },
      { x: 75, y: 85, label: '2024' },
      { x: 100, y: 92, label: 'Now' },
    ],
  },
  {
    name: 'Communication',
    color: 'rgb(245, 158, 11)',
    data: [
      { x: 0, y: 60, label: '2020' },
      { x: 25, y: 70, label: '2022' },
      { x: 50, y: 80, label: '2023' },
      { x: 75, y: 90, label: '2024' },
      { x: 100, y: 95, label: 'Now' },
    ],
  },
]

export function SkillProficiencyChart() {
  const [activePoint, setActivePoint] = useState<DataPoint | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 })

  useEffect(() => {
    const updateDimensions = () => {
      if (chartRef.current) {
        setDimensions({
          width: chartRef.current.offsetWidth,
          height: 300, // Fixed height for the chart
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getSVGPoint = (point: DataPoint) => {
    const padding = 40
    const width = dimensions.width - padding * 2
    const height = dimensions.height - padding * 2 - 20
    
    return {
      x: padding + (point.x / 100) * width,
      y: padding + ((100 - point.y) / 100) * height,
    }
  }

  const getPath = (points: DataPoint[]): string => {
    if (points.length === 0) return ''
    
    const svgPoints = points.map(p => getSVGPoint(p))
    let path = `M ${svgPoints[0].x},${svgPoints[0].y}`
    
    for (let i = 1; i < svgPoints.length; i++) {
      const prev = svgPoints[i - 1]
      const curr = svgPoints[i]
      const midX = (prev.x + curr.x) / 2
      path += ` Q ${prev.x},${prev.y} ${midX},${prev.y}`
      path += ` T ${curr.x},${curr.y}`
    }
    
    return path
  }

  const handlePointHover = (point: DataPoint) => {
    setActivePoint(point)
  }

  return (
    <div className="h-[400px] w-full" ref={chartRef}>
      <svg width="100%" height="100%" className="overflow-visible">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <g key={`grid-${y}`}>
            <line
              x1="0"
              y1={`${((100 - y) / 100) * 100}%`}
              x2="100%"
              y2={`${((100 - y) / 100) * 100}%`}
              stroke="rgba(71, 85, 105, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 2"
            />
            <text
              x="5"
              y={`${((100 - y) / 100) * 100}%`}
              className="text-xs fill-slate-500"
              dy="0.5em"
            >
              {y}%
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {SKILLS[0].data.map((point, i) => (
          <text
            key={`x-label-${i}`}
            x={`${point.x}%`}
            y="95%"
            className="text-xs fill-slate-400"
            textAnchor="middle"
          >
            {point.label}
          </text>
        ))}

        {/* Skill lines */}
        {SKILLS.map((skill) => {
          const path = getPath(skill.data)
          const isHovered = hoveredSkill === null || hoveredSkill === skill.name
          
          return (
            <g 
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="cursor-pointer transition-opacity"
              style={{ opacity: isHovered ? 1 : 0.5 }}
            >
              <path
                d={path}
                fill="none"
                stroke={skill.color}
                strokeWidth={isHovered ? 3 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Data points */}
              {skill.data.map((point, i) => {
                const { x, y } = getSVGPoint(point)
                const isActive = activePoint?.label === point.label
                
                return (
                  <g key={`${skill.name}-point-${i}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered || isActive ? 6 : 4}
                      fill={isHovered ? skill.color : 'white'}
                      stroke={skill.color}
                      strokeWidth={isHovered ? 2 : 1}
                      onMouseEnter={() => handlePointHover(point)}
                      onMouseLeave={() => setActivePoint(null)}
                      className="transition-all duration-200"
                    />
                  </g>
                )
              })}
            </g>
          )
        })}

        {/* Active point indicator */}
        {activePoint && (
          <g>
            <line
              x1={`${activePoint.x}%`}
              y1="0"
              x2={`${activePoint.x}%`}
              y2="100%"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
            <text
              x={`${activePoint.x}%`}
              y="5%"
              className="text-xs fill-cyan-400 font-medium"
              textAnchor="middle"
            >
              {activePoint.label}
            </text>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-4">
        {SKILLS.map((skill) => (
          <div 
            key={`legend-${skill.name}`}
            className="flex items-center space-x-2 cursor-pointer"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ 
                backgroundColor: skill.color,
                opacity: hoveredSkill === null || hoveredSkill === skill.name ? 1 : 0.5 
              }}
            />
            <span 
              className="text-sm text-slate-400"
              style={{ opacity: hoveredSkill === null || hoveredSkill === skill.name ? 1 : 0.5 }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}