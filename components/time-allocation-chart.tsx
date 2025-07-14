"use client"

import * as React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface TimeAllocationData {
  name: string
  value: number
  color: string
}

const RADIAN = Math.PI / 180

export function TimeAllocationChart() {
  const [isClient, setIsClient] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState({ width: 300, height: 300 })

  React.useEffect(() => {
    setIsClient(true)
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setDimensions({
          width,
          height: Math.min(width, 400) // Keep it square but not too tall
        })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Raw values (don't need to add up to 100%)
  const rawData: TimeAllocationData[] = [
    { name: "Working", value: 29, color: "#06b6d4" }, // cyan-500
    { name: "Sleep", value: 33, color: "#a855f7" }, // purple-500
    { name: "Socializing", value: 15, color: "#3b82f6" }, // blue-500
    { name: "Relaxation", value: 10, color: "#10b981" }, // emerald-500
    { name: "Exercise", value: 7, color: "#ef4444" }, // red-500
    { name: "Travel/Buffer", value: 8, color: "#f59e0b" }, // amber-500
  ]

  const totalHours = 168 // Total hours in a week
  const totalPercentage = rawData.reduce((sum, item) => sum + item.value, 0)
  
  // Normalize data for pie chart (values add up to 100%)
  const data = rawData.map(item => ({
    ...item,
    originalValue: item.value, // Store original value for display
    value: (item.value / totalPercentage) * 100 // Normalized value for pie chart
  }))
  const centerText = {
    textAnchor: 'middle',
    fill: '#e2e8f0', // text-slate-200
    fontSize: '0.875rem', // text-sm
    fontWeight: 500,
  } as const

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
    payload,
  }: {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    index: number
    payload: TimeAllocationData & { originalValue: number }
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs font-medium pointer-events-none"
      >
         <tspan x={x} dy="-0.6em">{payload.name}</tspan>
      </text>
    )
  }

  if (!isClient) return null

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      <div className="w-full" style={{ height: dimensions.height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={2}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
              className="outline-none"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="#0f172a" // slate-900
                  strokeWidth={1.5}
                />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload as TimeAllocationData & { originalValue: number }
                  const hours = ((data.originalValue / 100) * totalHours).toFixed(1)
                  return (
                    <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg text-sm">
                      <p className="font-medium text-slate-200">{data.name}</p>
                      <p className="text-slate-400">
                        {data.originalValue}% • {hours} hours/week
                      </p>
                    </div>
                  )
                }
                return null
              }}
              wrapperStyle={{
                zIndex: 1000,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="w-full mt-4 grid grid-cols-1 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center p-1.5 rounded hover:bg-slate-800/50 transition-colors">
            <div 
              className="w-3 h-3 rounded-full mr-2 flex-shrink-0" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-slate-400 truncate">{item.name}</span>
            <div className="ml-auto font-medium text-slate-200 text-right">
              <div>{item.originalValue || item.value}%</div>
              <div className="text-xs text-slate-400">
                {((item.originalValue / 100) * totalHours).toFixed(1)} hrs / week
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
