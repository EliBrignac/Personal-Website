"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { 
  Hexagon, 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  User, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Music, 
  BookOpen, 
  TreePine, 
  PawPrint, 
  Users2,
  Activity,
  BarChart3,
  Briefcase,
  Calendar,
  Code,
  Compass,
  Database,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  Info,
  LineChart,
  MessageCircle,
  MessageSquare,
  Mic,
  RefreshCw,
  School,
  Server,
  Settings,
  Star,
  Terminal,
  Twitter,
  Wrench,
  Dumbbell,
  ChefHat
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TimeAllocationChart } from "@/components/time-allocation-chart"

// Define the QuickLinkButton component
const QuickLinkButton = ({ 
  icon: Icon, 
  label, 
  href,
  onClick 
}: { 
  icon: any, 
  label: string, 
  href?: string,
  onClick?: () => void 
}) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      onClick={onClick}
      className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700/50 text-center min-h-[80px]"
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <Icon className="h-5 w-5 mb-1 text-cyan-400" />
      <span className="text-xs text-slate-300">{label}</span>
    </Component>
  )
}

export default function PersonalDashboard() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [profileCompletion, setProfileCompletion] = useState(85)
  const [frontendSkills, setFrontendSkills] = useState(90)
  const [backendSkills, setBackendSkills] = useState(75)
  const [toolsProficiency, setToolsProficiency] = useState(80)
  const [isLoading, setIsLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const spinTransition = {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  } as const

  useEffect(() => {
    setMounted(true)
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Image carousel effect
    const imageInterval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % 3)
        setIsTransitioning(false)
      }, 300)
    }, 5000)

    // Cleanup
    return () => {
      clearTimeout(timer)
      clearInterval(imageInterval)
    }
  }, [])

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 55) + 200}, ${Math.random() * 0.5 + 0.2})`
      }

      update(width: number, height: number) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > width) this.speedX *= -1
        if (this.y < 0 || this.y > height) this.speedY *= -1
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height)
        particles[i].draw(ctx)
      }
      
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Calculate workday progress (9 AM to 5 PM)
  const calculateWorkdayProgress = () => {
    const now = new Date()
    const start = new Date(now)
    start.setHours(9, 0, 0, 0)
    
    const end = new Date(now)
    end.setHours(17, 0, 0, 0)
    
    const total = end.getTime() - start.getTime()
    const current = now.getTime() - start.getTime()
    
    return Math.min(Math.max((current / total) * 100, 0), 100)
  }

  const getWorkdayStatus = (progress: number) => {
    if (progress < 25) return "Morning"
    if (progress < 50) return "Mid-morning"
    if (progress < 75) return "Afternoon"
    return "Evening"
  }

  const getCaffeineStatus = (): number => {
    const now = new Date()
    const hour = now.getHours()
    
    // Simulate caffeine level throughout the day
    if (hour < 7) return 20 // Early morning - low
    if (hour < 9) return 80 // Morning coffee
    if (hour < 12) return 60 // Mid-morning
    if (hour === 12) return 90 // Lunch coffee
    if (hour < 15) return 70 // Early afternoon
    if (hour < 17) return 40 // Mid-afternoon
    return 30 // Evening - winding down
  }

  const getEnergyStatus = () => {
    const now = new Date()
    const hour = now.getHours()
    
    // Simulate energy level throughout the day
    if (hour < 6) return 30 // Early morning - low
    if (hour < 9) return 70 // Waking up
    if (hour < 12) return 90 // Morning energy
    if (hour < 14) return 60 // Post-lunch dip
    if (hour < 17) return 85 // Afternoon energy
    if (hour < 21) return 70 // Evening
    return 40 // Night - winding down
  }

  const getStressLevel = () => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()
    
    // Higher stress during weekdays, especially in the afternoon
    const isWeekday = day > 0 && day < 6
    let stress = 30 // Base stress level
    
    if (isWeekday) {
      stress += 20
      if (hour >= 14 && hour <= 17) stress += 20 // Afternoon stress
      if (hour >= 8 && hour <= 17) stress += 15 // Work hours
    }
    
    return Math.min(Math.max(stress, 10), 90) // Keep between 10-90%
  }

  const profileImages = [
    "/profile1.jpg",
    "/profile2.jpg",
    "/profile3.jpg"
  ]

  const workExperience = [
    {
      id: "001",
      company: "Frederick National Laboratory",
      position: "Data Science Intern",
      duration: "May 2023 - Present",
      description: "Working on machine learning models for cancer research."
    },
    {
      id: "002",
      company: "University of Delaware",
      position: "Research Assistant",
      duration: "Jan 2022 - May 2023",
      description: "Conducted research in natural language processing."
    },
    {
      id: "003",
      company: "Tech Startup",
      position: "Software Developer Intern",
      duration: "Summer 2021",
      description: "Developed web applications using React and Node.js."
    }
  ]

  const stats = [
    { name: 'Happiness', level: 97.30, description: 'Excellent', color: 'bg-pink-500' },
    { name: 'Productivity', level: 88.50, description: 'High', color: 'bg-blue-500' },
    { name: 'Learning', level: 92.10, description: 'Great', color: 'bg-green-500' },
    { name: 'Energy', level: 76.80, description: 'Good', color: 'bg-yellow-500' }
  ]

  if (!mounted) {
    return null
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${theme} min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 relative overflow-hidden`}
    >
      {/* Background particle effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 border-4 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-4 border-r-purple-500 border-t-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
              <div className="absolute inset-6 border-4 border-b-blue-500 border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin-slower"></div>
              <div className="absolute inset-8 border-4 border-l-green-500 border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin"></div>
            </div>
            <div className="mt-4 text-cyan-500 font-mono text-sm tracking-wider">LOADING PERSONAL MATRIX</div>
          </div>
        </div>
      )}

      <div className="container mx-auto p-4 relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between py-4 border-b border-slate-700/50 mb-6">
          <div className="flex items-center space-x-2">
            <Hexagon className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Eli Brignac's Personal Dashboard
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1 bg-slate-800/50 rounded-full px-3 py-1.5 border border-slate-700/50 backdrop-blur-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects or posts..."
                className="bg-transparent border-none focus:outline-none text-sm w-40 placeholder:text-slate-500"
              />
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-100">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-cyan-500 rounded-full animate-pulse"></span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-slate-400 hover:text-slate-100"
              >
                {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Profile card */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
                  <div className="text-center">
                    <div className="relative mx-auto mb-6">
                      <div className="w-55 h-55 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl transition-all duration-300 hover:border-2 hover:border-cyan-400/70 hover:shadow-cyan-500/20">
                        <div className="relative w-full h-full" style={{ aspectRatio: '1/1' }}>
                          <div className="absolute inset-0 w-full h-full">
                            <img
                              src={profileImages[currentImageIndex]}
                              alt={`Profile ${currentImageIndex + 1}`}
                              className={`w-full h-full object-cover transition-opacity duration-500 ${
                                isTransitioning ? 'opacity-0' : 'opacity-100'
                              }`}
                            />
                            {/* Preload next image */}
                            <img
                              src={profileImages[(currentImageIndex + 1) % profileImages.length]}
                              alt=""
                              className="hidden"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                      Eli Brignac
                    </div>
                    <div className="text-sm text-slate-400 mb-1">M.S. Data Science</div>
                    <div className="text-sm text-slate-400 mb-1">B.S. Computer Science</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-lg text-slate-300 leading-relaxed mb-4">
                    <User className="mr-2 h-5 w-5 text-purple-500" />
                    <span>Summary:</span>
                  </div>

                  <div className="text-sm text-slate-300 leading-relaxed mb-4">
                    Recent Graduate from the University of Delaware who is passionate about contributing
                    to the worlds most interesting problems. Strong background in Data Science and Machine Learning.
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed mb-4">
                    Always eager to learn new technologies and collaborate with others :)
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-slate-800/50 text-cyan-400 border-cyan-500/30 text-xs">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-purple-400 border-purple-500/30 text-xs">
                      SQL
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-blue-400 border-blue-500/30 text-xs">
                      PyTorch
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-green-400 border-green-500/30 text-xs">
                      Pandas
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-amber-400 border-amber-500/30 text-xs">
                      NumPy
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-pink-400 border-pink-500/30 text-xs">
                      Scikit-Learn
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-cyan-400 border-cyan-500/30 text-xs">
                      Tableau
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-purple-400 border-purple-500/30 text-xs">
                      Git
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 text-center">
                      <div className="text-md font-bold text-cyan-400">14 Months</div>
                      <div className="text-xs text-slate-100">Internship Experience</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 text-center">
                      <div className="text-md font-bold text-purple-400">2.5 Years</div>
                      <div className="text-xs text-slate-100">Research Experience</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 text-center">
                      <div className="text-md font-bold text-green-400">3 Times</div>
                      <div className="text-xs text-slate-100">1st place in Competitions</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 text-center">
                      <div className="text-md font-bold text-amber-400">15+</div>
                      <div className="text-xs text-slate-100">Publication Citations</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick links */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-100 text-base">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <QuickLinkButton 
                    icon={Download} 
                    label="Download Resume" 
                    href="/Eli_Brignac_Resume.pdf" 
                  />
                  <QuickLinkButton 
                    icon={Github} 
                    label="GitHub Profile" 
                    href="https://github.com/EliBrignac" 
                  />
                  <QuickLinkButton 
                    icon={Linkedin} 
                    label="LinkedIn" 
                    href="https://www.linkedin.com/in/eli-brignac/" 
                  />
                  <div className="relative group w-full">
                    <QuickLinkButton 
                      icon={Mail} 
                      label="Copy Email" 
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText('eli.brignac03@gmail.com')
                          alert('Email copied to clipboard: eli.brignac03@gmail.com')
                        } catch (err) {
                          console.error('Failed to copy email: ', err)
                          alert('Failed to copy email. Please copy it manually: eli.brignac03@gmail.com')
                        }
                      }}
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-700 text-slate-100 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      eli.brignac03@gmail.com
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-t-slate-700 border-l-transparent border-r-transparent"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Middle column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Work Experience */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="border-b border-slate-700/50 pb-3">
                <CardTitle className="text-slate-100 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-blue-500" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-700/50">
                  {workExperience.map((exp) => (
                    <div key={exp.id} className="p-4 hover:bg-slate-800/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-slate-200">{exp.position}</h4>
                          <p className="text-sm text-blue-400">{exp.company}</p>
                        </div>
                        <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time allocation */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-100 text-base">Weekly Time Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={spinTransition}
                  style={{ originX: 'center', originY: 'center' }}
                >
                  <TimeAllocationChart />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Stats */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-100 text-base">Current Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{stat.name}</span>
                      <span className="font-mono">{stat.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${stat.color} rounded-full`}
                        style={{ width: `${stat.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-400">{stat.description}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-100 text-base">Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Frontend</span>
                    <span className="font-mono">{frontendSkills}%</span>
                  </div>
                  <Progress value={frontendSkills} className="h-2 bg-slate-800/50" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Backend</span>
                    <span className="font-mono">{backendSkills}%</span>
                  </div>
                  <Progress value={backendSkills} className="h-2 bg-slate-800/50" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Tools</span>
                    <span className="font-mono">{toolsProficiency}%</span>
                  </div>
                  <Progress value={toolsProficiency} className="h-2 bg-slate-800/50" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
