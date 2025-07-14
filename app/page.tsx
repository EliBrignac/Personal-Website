"use client"

import { useEffect, useState, useRef } from "react"
import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  Code,
  Compass,
  Download,
  Github,
  Globe,
  Hexagon,
  Home,
  Info,
  Linkedin,
  Mail,
  MessageSquare,
  Mic,
  Moon,
  RefreshCw,
  Star,
  Search,
  Settings,
  Sun,
  Terminal,
  Twitter,
  User,
  Zap,
  Database,
  LineChart,
  Heart,
  Music,
  TreePine,
  ChefHat,
  Server,
  Wrench,
  PawPrint,
  Dumbbell,
  HeartPulse,
  Handshake,
  MessageCircle,
  Users2,
  GraduationCap,
  School,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TimeAllocationChart } from "@/components/time-allocation-chart"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"


export default function PersonalDashboard() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [profileCompletion, setProfileCompletion] = useState(85)
  const [frontendSkills, setFrontendSkills] = useState(90)
  const [backendSkills, setBackendSkills] = useState(75)
  const [toolsProficiency, setToolsProficiency] = useState(80)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Profile images array with full paths
  const profileImages = [
    "/profile1.jpg",
    "/profile5.jpg",
    "/profile2.jpg",
    "/profile3.jpg",
    "/profile4.jpg",
    "/profile6.jpg"
  ];
  
  // Image rotation with fade effect
  useEffect(() => {
    const transitionTime = 500; // Time for fade in/out in milliseconds
    const displayTime = 7000; // Time to display each image (3 seconds)
    
    // Initial preload of all images
    profileImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Set up the interval for image rotation
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % profileImages.length);
        setIsTransitioning(false);
      }, transitionTime);
      
    }, displayTime);
    
    return () => clearInterval(interval);
  }, [profileImages.length]);



  const [workExperience] = useState([
    {
      id: "001",
      company: "Frederick National Laboratory",
      position: "Data Science Intern",
      period: "August 2024 - May 2025",
      duration: "8 months",
      status: "Completed",
      description:
        "Contributed to GGMD, a modular tool for de novo drug design, by writing over 12,000 lines of Python and PyTorch code to develop its core framework, visualization suite, and analysis tools.",
      technologies: ["Python", "PyTorch", "Pandas", "Slurm", "Git"],
      achievements: ["Improved model convergence speed by 20% with custom optimizer", 
        "Reduced user analysis time by an estimated 90% with visualization suite", 
        "Analyzed over 300GB of model output to define best practices for effective model usage.",
        "Presented abstract at ACM/IEE Supercomputing Conference 2024, Computational Approaches for Cancer Workshop."],
    },
    {
      id: "002",
      company: "University of Delaware",
      position: "AI Researcher (Graduate Student)",
      period: "May 2024 - May 2025",
      duration: "1 year",
      status: "Completed",
      description:
        "Investigating if the output of popular LLM’s accurately reflects the real world and/or are biased across groups based on implicit and explicit identifiers of gender, race, and age. Measuring Categorical word frequencies of document-sized LLM output, using binomial tests to calculate the significance of results ",
      technologies: ["Python", "Scipy", "LaTeX", "Binomial Tests",  "Git", "Numerous API's"],
      achievements: [
        "Built analysis pipeline for LLM output analysis", 
        "Automated data collection, analysis, and reporting",
        "Paper currenlty under peer review (submitted to Scientific Reports)"
      ],
    },
    {
      id: "003",
      company: "Electric Power Research Institute (EPRI)",
      position: "Data Science Intern",
      period: "June 2024 - August 2024",
      duration: "3 months",
      status: "Completed",
      description:
        "Worked on hydrogen workforce analytics, using clustering and data visualization techniques to inform policy recommendations.",
      technologies: ["Python", "PostgreSQL", "AWS", "Tableau", "LLMs"],
      achievements: [
        "Clustered 20+ documents worth of text into 26 unique categories using hierarchical clustering, K-means, and LLMs",
        "Built a PostgreSQL database on AWS to store and query hydrogen workforce report data",
        "Presented skill mappings and workforce recommendations to Delaware state senators"
      ],
    },
    {
      id: "004",
      company: "University of Delaware",
      position: "Machine Learning Research Assistant",
      period: "Dec. 2022 - May. 2024",
      duration: "1 year 6 months",
      status: "Completed",
      description:
        "Conducted research in healthcare-focused machine learning, working on Alzheimer’s-focused language models and privacy-preserving autism therapy datasets.",
      technologies: ["Python", "LangChain", "OpenCV", "PyTorch", "AWS", "Retrieval-Augmented Generation (RAG)"],
      achievements: [
        "Built a retrieval-augmented generation (RAG) pipeline using LangChain for Alzheimer’s text extraction, supported by a $100K AWS Health Equity Initiative grant",
        "Implemented 2D skeleton extraction and optical flow to analyze 1,315 video segments for autism therapy research",
        "Contributed to MMASD dataset published at ACM-ICMI’23 (14 citations, 421+ downloads)"
      ],
    },
    {
      id: "005",
      company: "Labware",
      position: "Data Science Intern",
      period: "June 2023 - Aug. 2023",
      duration: "3 months",
      status: "Completed",
      description:
        "Worked on applying large language models and classification techniques to improve internal developer support tools and workflows.",
      technologies: ["PyTorch", "LangChain", "Transformers", "BERT", "Fine-Tuning", "Retrieval-Augmented Generation (RAG)"],
      achievements: [
        "Fine-tuned a 1.5B-parameter LLM and built a retrieval-augmented generation (RAG) pipeline using LangChain for a company-specific debugging assistant",
        "Used internal documentation as the knowledge base to enhance support accuracy and relevance",
        "Fine-tuned a BERT model to classify support tickets, achieving 78% accuracy and 92% precision"
      ],
    }
    
    
  ])

  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Simulate changing data (e.g., project progress, skill updates)
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontendSkills(Math.floor(Math.random() * 10) + 85)
      setBackendSkills(Math.floor(Math.random() * 15) + 70)
      setToolsProficiency(Math.floor(Math.random() * 10) + 75)
      setProfileCompletion(Math.floor(Math.random() * 5) + 80)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 55) + 200}, ${Math.random() * 0.5 + 0.2})`;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      if (canvas) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        if (canvas) {
particle.update(canvas.width, canvas.height);
          particle.draw(ctx);
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Calculate workday progress (9 AM to 5 PM)
  const calculateWorkdayProgress = () => {
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    
    const workdayStart = 9; // 9 AM
    const workdayEnd = 17;  // 5 PM
    
    // If before workday
    if (currentHour < workdayStart) return 0;
    // If after workday
    if (currentHour >= workdayEnd) return 100;
    
    // Calculate percentage through workday
    const progress = ((currentHour - workdayStart) / (workdayEnd - workdayStart)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const getWorkdayStatus = (progress: number) => {
    if (progress === 0) return 'Workday hasn\'t started yet';
    if (progress >= 100) return 'Workday complete! 🎉';
    
    const hoursLeft = (((100 - progress) / 100) * 8).toFixed(2); // 8 hour workday
    return `${hoursLeft} hour${Number(hoursLeft) !== 1 ? 's' : ''} left in workday`;
  };

  const getCaffeineStatus = (): number => {
    const startHour = 7; // 9 AM
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;

    const elapsedHours = currentHour - startHour;

    if (elapsedHours < 0) {
      return 0; // No caffeine yet
    }

    // Calculate remaining caffeine using exponential decay (half-life model)
    const halfLife = 5.5; // in hours
    const remainingFraction = Math.pow(0.5, elapsedHours / halfLife);
    const percentageRemaining = Math.round(remainingFraction * 10000) / 100; // round to 2 decimal places

    if (percentageRemaining <= 1) {
      return 0; // Caffeine has worn off
    }

    return percentageRemaining;
  };
  
  const getEnergyStatus = () => {
    const caffeineLevel = getCaffeineStatus();
    const energyLevel = Math.min(100, Math.max(0, Math.round(caffeineLevel) + 20.31));
  
    if (energyLevel > 80) return "Excellent";
    if (energyLevel > 60) return "Strong";
    if (energyLevel > 40) return "Good";
    if (energyLevel > 20) return "Tired";
    return "Sleepy";
  };
  const getStressLevel = () => {
    const mean = 15;
    const stdDev = 0.75;
  
    // Box-Muller transform to generate normal distribution
    const u1 = Math.random();
    const u2 = Math.random();
    const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    
    const stressLevel = mean + stdDev * randStdNormal;
  
    // Clamp to a reasonable range (e.g. 0–30)
    return Math.max(0, Math.min(30, Math.round(stressLevel)));
  };
  

  // Status effects based on skill levels
  const statusEffects = [
    {
      name: 'Workday Progress',
      level: calculateWorkdayProgress().toFixed(2),
      description: getWorkdayStatus(calculateWorkdayProgress()),
      color: 'bg-blue-500'
    },
    {
      name: 'Caffination',
      level: getCaffeineStatus().toFixed(2).toString(),
      description: "Morning Cup at 9:00 AM",
      color: 'bg-cyan-500'
    },
    {
      name: 'Sleep Quality',
      level: 100.00,
      description: '8 Hours of Sleep',
      color: 'bg-purple-500'
    },
    {
      name: 'Stress Level',
      level: (getCaffeineStatus() / 6.5).toFixed(2),
      description: 'Low',
      color: 'bg-green-500'
    },
    {
      name: 'Energy Remaining',
      level: Math.min(100, Math.round(getCaffeineStatus()) + 20.31),
      description: getEnergyStatus(),
      color: 'bg-amber-500'
    },
    {
      name: 'Happiness',
      level: 97.30,
      description: 'Excellent',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-100">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className="text-slate-400 hover:text-slate-100"
                    >
                      {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle theme</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Profile Section */}
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <div className="grid gap-6">
              {/* Profile Section */}
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
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%'
                                }}
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
                        <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                        Eli Brignac
                      </div>
                      
                      <div className="text-sm text-slate-400 mb-1">M.S. Data Science</div>
                      <div className="text-sm text-slate-400 mb-1">B.S. Computer Science</div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 text-xs">
                        Looking for Work
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                  <div className="flex items-center text-lg text-slate-300 leading-relaxed mb-4">
                      <User className="mr-2 h-5 w-5 text-purple-500" />
                      <span>Summary:</span>
                    </div>

                    <div className="text-sm text-slate-300 leading-relaxed mb-4">
                      Recent Graduate from the University of Delaware who enjoys working on meaningful Data Science projects.
                      Has a strong background in Data Science and Machine Learning, and is passionate about contributing
                      to the worlds most interesting problems.
                    </div>
                    <div className="text-sm text-slate-400 leading-relaxed mb-4">
                      Always eager to learn new technologies and collaborate with others :)
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-slate-800/50 text-cyan-400 border-cyan-500/30 text-xs">
                        Python
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-slate-800/50 text-purple-400 border-purple-500/30 text-xs"
                      >
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
                        Tableau
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
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
                        <div className="text-xs text-slate-100">1st place in University Competitions</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 text-center">
                        <div className="text-md font-bold text-amber-400">15+</div>
                        <div className="text-xs text-slate-100">Publication Citations</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Age Counter */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1 font-mono">CURRENT AGE</div>
                      <div className="text-3xl font-mono text-cyan-400 mb-1">
                        {(() => {
                          const birthDate = new Date(2003, 0, 8); // January is 0 in JS
                          const now = new Date();
                          
                          let years = now.getFullYear() - birthDate.getFullYear();
                          let months = now.getMonth() - birthDate.getMonth();
                          let days = now.getDate() - birthDate.getDate();
                          
                          if (days < 0) {
                            months--;
                            // Get the last day of the previous month
                            const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                            days += lastMonth.getDate();
                          }
                          
                          if (months < 0) {
                            years--;
                            months += 12;
                          }
                          
                          return `${years} years`;
                        })()}
                      </div>
                      <div className="text-sm text-slate-400">
                        {(() => {
                          const birthDate = new Date(2003, 0, 8);
                          const now = new Date();
                          
                          let months = now.getMonth() - birthDate.getMonth();
                          let days = now.getDate() - birthDate.getDate();
                          
                          if (days < 0) {
                            months--;
                            const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                            days += lastMonth.getDate();
                          }
                          
                          if (months < 0) months += 12;
                          
                          return `${months} months, ${days} days`;
                        })()}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                        <div className="text-xs text-slate-500 mb-1">Birthday</div>
                        <div className="text-sm font-mono text-slate-200">Jan 8, 2003</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                        <div className="text-xs text-slate-500 mb-1">Zodiac</div>
                        <div className="text-sm font-mono text-slate-200">Capricorn ♑</div>
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
                            await navigator.clipboard.writeText('eli.brignac03@gmail.com');
                            alert('Email copied to clipboard: eli.brignac03@gmail.com');
                          } catch (err) {
                            console.error('Failed to copy email: ', err);
                            alert('Failed to copy email. Please copy it manually: eli.brignac03@gmail.com');
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

              {/* Free Time Activities */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-slate-700/50 pb-3">
                  <CardTitle className="text-slate-100 flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-pink-500" />
                    Free Time Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-1 hover:border-pink-500/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-pink-500/10">
                          <Music className="h-5 w-5 text-pink-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-200">Electric Guitar</h4>
                          <p className="text-xs text-slate-400">Playing my favorite songs</p>
                        </div>
                      </div>

                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-500/10">
                          <BookOpen className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-200">Reading</h4>
                          <p className="text-xs text-slate-400">Sci-fi and Business books</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10">
                          <TreePine className="h-5 w-5 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-200">Hiking</h4>
                          <p className="text-xs text-slate-400">Weekend adventures</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-amber-500/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-amber-500/10">
                          <PawPrint className="h-5 w-5 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-200">Dogs</h4>
                          <p className="text-xs text-slate-400">My family has 4 dogs</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-red-500/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-red-500/10">
                          <Users2 className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-200">Friends</h4>
                          <p className="text-xs text-slate-400">Hanging out & socializing</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>


              {/* Time allocation */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-slate-100 text-base">Weekly Time Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <TimeAllocationChart />
                </CardContent>
              </Card>



            </div>
          </div>

          {/* Main dashboard (moved to right side) */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <div className="grid gap-6">
              {/* Status Effects */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-slate-700/50 pb-3">
                  <CardTitle className="text-slate-100 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-amber-400" />
                    Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {statusEffects.map((effect, index) => (
                      <div key={index} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-slate-200">{effect.name}</h3>
                          </div>
                          <span className="text-sm font-mono text-slate-400">{effect.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${effect.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${effect.level}%` }}
                          />
                        </div>
                        <p className="mt-2 text-xs text-slate-400">{effect.description}</p>
                        {/* <div className="mt-2 flex items-center space-x-1">
                          {effect.level > 80 ? (
                            <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full">Excellent</span>
                          ) : effect.level > 50 ? (
                            <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full">Great</span>
                          ) : (
                            <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded-full">Good</span>
                          )}
                        </div> */}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills overview */}
              
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-slate-700/50 pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-100 flex items-center">
                      <Code className="mr-2 h-5 w- text-cyan-500" />
                      Overview
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-xs">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                        UPDATING
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-">

                  <div className="mt-8">
                    <div className="mt-8 space-y-8">
                      {/* Proficiency Chart */}
                      {/* <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                            <BarChart3 className="mr-2 h-5 w-5 text-cyan-500" />
                            Skill Proficiency
                          </h3>
                          <div className="flex items-center space-x-2 text-xs text-slate-400">
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-cyan-500 mr-1"></div>
                              Frontend
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
                              Backend
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
                              Tools
                            </div>
                          </div>
                        </div>
                        <div className="h-64 w-full relative bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                          <SkillProficiencyChart />
                          <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-md px-3 py-2 border border-slate-700/50">
                            <div className="text-xs text-slate-400">Overall Score</div>
                            <div className="text-lg font-mono text-cyan-400">82%</div>
                          </div>
                        </div>
                      </div> */}

                      {/* Projects Section */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                            <Briefcase className="mr-2 h-5 w-5 text-green-500" />
                            Recent Projects
                          </h3>
                          <Badge
                            variant="outline"
                            className="bg-slate-800/50 text-green-400 border-green-500/50 text-xs"
                          >
                            1 Active
                          </Badge>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                          <div className="grid grid-cols-12 text-xs text-slate-400 p-3 border-b border-slate-700/50 bg-slate-800/50">
                            <div className="col-span-1">ID</div>
                            <div className="col-span-4">Project Name</div>
                            <div className="col-span-2">Significance</div>
                            <div className="col-span-2">Progress</div>
                            <div className="col-span-2">Last Update</div>
                            <div className="col-span-1">Link</div>
                          </div>
                          <div className="divide-y divide-slate-700/30">
                          <ProjectRow
                              id="001"
                              name="LLM Bias Research"
                              status="Peer Review"
                              progress={90}
                              lastUpdate="Current"
                              link="N/A"
                            />
                            <ProjectRow
                              id="002"
                              name="Podcast Prediction"
                              status="Kaggle Competition"
                              progress={100}
                              lastUpdate="April 2025"
                              link="https://www.kaggle.com/competitions/playground-series-s5e4/overview"
                            />
                            <ProjectRow
                              id="003"
                              name="UD Faculty Network"
                              status="1st Place"
                              progress={100}
                              lastUpdate="Feb 2025"
                              link="https://github.com/EliBrignac/DSI_Faculty_Network"
                            />
                            <ProjectRow
                              id="004"
                              name="AI Study Companion"
                              status="1st Place"
                              progress={100}
                              lastUpdate=" Mar 2024"
                              link="https://github.com/EliBrignac/HoloFlash"
                            />
                            <ProjectRow
                              id="005"
                              name="Geographic Visualization"
                              status="1st Place"
                              progress={100}
                              lastUpdate="Jan 2024"
                              link="https://github.com/EliBrignac/Fatalities_Israel_Palestine_Conflict_Visualization"
                            />
                            <ProjectRow
                              id="006"
                              name="Concept Art Creator"
                              status="Personal Project"
                              progress={100}
                              lastUpdate="Sept  2023"
                              link="https://github.com/EliBrignac/Destiny_Weapon_Maker"
                            />
                            <ProjectRow
                              id="007"
                              name="MMASD"
                              status="Publication"
                              progress={100}
                              lastUpdate="Oct  2023"
                              link="https://dl.acm.org/doi/10.1145/3577190.3614117"
                            />
                            <ProjectRow
                              id="008"
                              name="Malignancy Classifier"
                              status="Personal Project"
                              progress={100}
                              lastUpdate="May 20, 2023"
                              link="https://github.com/EliBrignac/Malignancy_Classifier"
                            />
                            
                          </div>
                        </div>
                      </div>


                      {/* Work Experience Section */}
                      <div>
                        <div  className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                            <Briefcase className="mr-2 h-5 w-5 text-amber-500" />
                            Work Experience
                          </h3>
                          <div className="flex items-center space-x-1"> {/* reduce space between badges */}
                          <Badge
                            variant="outline"
                            className="bg-slate-800/50 text-amber-400 border-amber-500/50 text-xs"
                          >
                            3 Internships
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-slate-800/50 text-amber-400 border-amber-500/50 text-xs"
                          >
                            2.5 years Research
                          </Badge>
                        </div>
                      </div>

                        <div className="space-y-4">
                          {workExperience.map((experience) => (
                            <WorkExperienceRow
                              key={experience.id}
                              id={experience.id}
                              company={experience.company}
                              position={experience.position}
                              period={experience.period}
                              duration={experience.duration}
                              status={experience.status}
                              description={experience.description}
                              technologies={experience.technologies}
                              achievements={experience.achievements}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>




                            
                            {/* Leadership Experience */}
                <CardHeader className="pb-2">
                <div  className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                            <Star className="mr-2 h-5 w-5 text-purple-500" />
                            Leadership Experience
                            
                          </h3>
                          <Badge
                            variant="outline"
                            className="bg-slate-800/50 text-purple-400 border-purple-500/50 text-xs"
                          >
                            2 years
                          </Badge>
                          </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-slate-200">Vice President</h3>
                        <p className="text-sm text-cyan-400">Competitive Programming Club (University of Delaware)</p>
                        <p className="text-xs text-slate-500">2 years </p>
                      </div>
                      <span className="text-xs text-slate-500">#001</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-3">Mentored and guided undergraduate students in competitive programming. </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-slate-400">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li className="flex items-start">
                          <span className="inline-block w-1 h-1 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                          35+ students attended bi-weekly workshops where I taught advanced data structure and algorithm concepts.
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1 h-1 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                          Provided one-on-one assistance to students struggling with data structure and algorithm concepts.
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1 h-1 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                          Led monthly competitive programming competitions, $200 in prizes
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>


              </Card>
        
              



            </div>
          </div>
          
          {/* Sidebar - Moved to right side */}
          <div className="col-span-12 md:col-span-2 lg:col-span-2 md:col-start-11">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
              <CardContent className="p-4">

                {/* <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="text-xs text-slate-500 mb-2 font-mono">PROFILE STATUS</div>
                  <div className="space-y-3">
                    <MyStatusItem label="Python" value={profileCompletion} color="cyan" />
                    <MyStatusItem label="SQL" value={90} color="green" />
                    <MyStatusItem label="PyTorch" value={70} color="blue" />
                  </div>
                </div> */}
              </CardContent>
              <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                            <Terminal className="ml-2 mr-2 h-5 w-5 text-blue-500" />
                            Technologies
                          </h3>
                        </div>
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ml-4 mr-4">                          
                            <TechnologyItem name="Python" experience="5 yrs" proficiency={100} color="bg-gradient-to-r from-cyan-500 to-cyan-500" />
                            <TechnologyItem name="SQL" experience="2 yrs" proficiency={89} color="bg-purple-500" />
                            <TechnologyItem name="PyTorch" experience="1.5 yrs" proficiency={87} color="bg-pink-500"/>
                            <TechnologyItem name="Scikit-learn" experience="2 yr" proficiency={95} color="bg-rose-500"/>
                            <TechnologyItem name="Pandas" experience="2 yrs" proficiency={95} color="bg-green-500"/>
                            <TechnologyItem name="NumPy" experience="2 yrs" proficiency={90} color="bg-amber-500"/>
                            <TechnologyItem name="Git" experience="4 yr" proficiency={99} color="bg-blue-500"/>
                            <TechnologyItem name="Tableau" experience="1 yr" proficiency={78} color="bg-cyan-500"/>
                            <TechnologyItem name="C++" experience="1.5 yr" proficiency={69} color="bg-purple-500"/>
                            <TechnologyItem name="Java" experience="1 yr" proficiency={63} color="bg-amber-500"/>
                            <TechnologyItem name="Slurm" experience="0.5 yr" proficiency={47} color="bg-rose-500"/>
                            <TechnologyItem name="Matplotlib" experience="2 yr" proficiency={100} color="bg-green-500"/>
                            <TechnologyItem name="LangChain" experience="0.8 yr" proficiency={74} color="bg-cyan-500"/>
                        </div>
                      </div>
                      
                      {/* Course Work Section */}
                      <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                            <GraduationCap className="ml-2 mr-2 h-5 w-5 text-blue-500" />
                            Course Work
                          </h3>
                        </div>
                        
                        {/* GPA Section */}
                        <div className="flex flex-col space-y-2 mb-6 ml-4 mr-4">
                          <div className="flex justify-between items-center bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-slate-300">Graduate GPA</span>
                            </div>
                            <span className="text-sm font-semibold text-blue-400">3.5</span>
                          </div>
                          <div className="flex justify-between items-center bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-slate-300">Undergrad GPA</span>
                            </div>
                            <span className="text-sm font-semibold text-blue-400">3.8</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-3 ml-4 mr-4">
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Machine Learning</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Machine Learning 2</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A-</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Statistical Learning</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A-</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Optimization</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A-</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Data Mining</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Regression</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">B+</div>
                              </div>
                            </div>
                          </div>




                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Multivariate Statistics</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>



                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Data Mining</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A-</div>
                              </div>
                            </div>
                          </div>


                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Data Base Systems</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>

                  
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">AI</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>



                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Algorithms</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>


                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Data Structures</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>

                          
                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Parallel Computing</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>


                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Probability Theory</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>



                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Numerical Methods</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>



                          <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-slate-200">Multivariable Calculus</div>
                                <div className="text-xs text-slate-400 mt-1">University of Delaware</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-slate-300">A</div>
                              </div>
                            </div>
                          </div>



                        </div>
                      </div>
            </Card>

            
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for nav items
function NavItem({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start ${active ? "bg-slate-800/70 text-cyan-400" : "text-slate-400 hover:text-slate-100"}`}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  )
}

// Component for personal status items
function MyStatusItem({ label, value, color }: { label: string; value: number; color: string }) {
  const getGradient = (color: string) => {
    switch (color) {
      case "cyan":
        return "from-cyan-500 to-blue-500"
      case "green":
        return "from-green-500 to-emerald-500"
      case "blue":
        return "from-blue-500 to-indigo-500"
      case "purple":
        return "from-purple-500 to-pink-500"
      default:
        return "from-slate-500 to-slate-400"
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-xs text-slate-400">{value}%</div>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${getGradient(color)} rounded-full`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

// Component for skill metric cards
function SkillMetricCard({
  title,
  value,
  icon: Icon,
  trend,
  color,
  detail,
}: {
  title: string
  value: number
  icon: any
  trend: "up" | "down" | "stable"
  color: string
  detail: string
}) {
  const getColor = () => {
    switch (color) {
      case "cyan":
        return "from-cyan-500 to-blue-500 border-cyan-500/30"
      case "green":
        return "from-green-500 to-emerald-500 border-green-500/30"
      case "blue":
        return "from-blue-500 to-indigo-500 border-blue-500/30"
      case "purple":
        return "from-purple-500 to-pink-500 border-purple-500/30"
      default:
        return "from-cyan-500 to-blue-500 border-cyan-500/30"
    }
  }

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <BarChart3 className="h-4 w-4 text-amber-500" />
      case "down":
        return <BarChart3 className="h-4 w-4 rotate-180 text-green-500" />
      case "stable":
        return <LineChart className="h-4 w-4 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className={`bg-slate-800/50 rounded-lg border ${getColor()} p-4 relative overflow-hidden`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-slate-400">{title}</div>
        <Icon className={`h-5 w-5 text-${color}-500`} />
      </div>
      <div className="text-2xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent from-slate-100 to-slate-300">
        {value}%
      </div>
      <div className="text-xs text-slate-500">{detail}</div>
      <div className="absolute bottom-2 right-2 flex items-center">{getTrendIcon()}</div>
      <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-cyan-500 to-blue-500"></div>
    </div>
  )
}

// Enhanced Skill proficiency chart component with time progression and landmarks
function SkillProficiencyChart() {
  return (
    <div className="h-full w-full flex items-end justify-between px-4 pt-4 pb-8 relative">
      {/* Y-axis labels */}
      <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-4">
        <div className="text-xs text-slate-500">100%</div>
        <div className="text-xs text-slate-500">75%</div>
        <div className="text-xs text-slate-500">50%</div>
        <div className="text-xs text-slate-500">25%</div>
        <div className="text-xs text-slate-500">0%</div>
      </div>

      {/* X-axis grid lines */}
      <div className="absolute left-0 right-0 top-0 h-full flex flex-col justify-between py-4 px-10">
        <div className="border-b border-slate-700/30 w-full"></div>
        <div className="border-b border-slate-700/30 w-full"></div>
        <div className="border-b border-slate-700/30 w-full"></div>
        <div className="border-b border-slate-700/30 w-full"></div>
        <div className="border-b border-slate-700/30 w-full"></div>
      </div>

      {/* Internship landmarks */}
      <div className="absolute inset-0 px-10">
        {/* Summer 2023 - First internship */}
        <div className="absolute" style={{ left: "25%", top: "10px", bottom: "30px" }}>
          <div className="w-0.5 h-full bg-amber-500/50 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-slate-900"></div>
            <div className="absolute -top-8 -left-8 text-xs text-amber-400 whitespace-nowrap">Summer 2023</div>
            <div className="absolute -top-16 -left-12 text-xs text-slate-500 whitespace-nowrap">First Internship</div>
          </div>
        </div>

        {/* Summer 2024 - Second internship */}
        <div className="absolute" style={{ left: "60%", top: "10px", bottom: "30px" }}>
          <div className="w-0.5 h-full bg-green-500/50 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
            <div className="absolute -top-8 -left-8 text-xs text-green-400 whitespace-nowrap">Summer 2024</div>
            <div className="absolute -top-16 -left-12 text-xs text-slate-500 whitespace-nowrap">Frontend Focus</div>
          </div>
        </div>

        {/* Fall 2024-Spring 2025 - Current internship */}
        <div className="absolute" style={{ left: "85%", top: "10px", bottom: "30px" }}>
          <div className="w-0.5 h-full bg-cyan-500/50 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 text-xs text-cyan-400 whitespace-nowrap">Fall 2024</div>
            <div className="absolute -top-16 -left-12 text-xs text-slate-500 whitespace-nowrap">Current Role</div>
          </div>
        </div>
      </div>

      {/* Chart bars with progressive skill growth */}
      <div className="flex-1 h-full flex items-end justify-between px-2 z-10">
        {Array.from({ length: 12 }).map((_, i) => {
          // Simulate skill progression over time
          const timeProgress = i / 11 // 0 to 1

          // Frontend skills: Started low, grew significantly after internships
          let frontendHeight = 20 + timeProgress * 70
          if (i >= 3) frontendHeight += 10 // Summer 2023 boost
          if (i >= 7) frontendHeight += 15 // Summer 2024 boost
          if (i >= 10) frontendHeight += 10 // Current internship boost
          frontendHeight = Math.min(frontendHeight, 95)

          // Backend skills: Started later, grew after second internship
          let backendHeight = 10 + timeProgress * 50
          if (i >= 7) backendHeight += 20 // Summer 2024 boost
          if (i >= 10) backendHeight += 15 // Current internship boost
          backendHeight = Math.min(backendHeight, 85)

          // Tools: Steady growth with internship boosts
          let toolsHeight = 15 + timeProgress * 55
          if (i >= 3) toolsHeight += 8 // Summer 2023 boost
          if (i >= 7) toolsHeight += 12 // Summer 2024 boost
          if (i >= 10) toolsHeight += 10 // Current internship boost
          toolsHeight = Math.min(toolsHeight, 90)

          return (
            <div key={i} className="flex space-x-0.5">
              <div
                className="w-2 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-sm transition-all duration-300"
                style={{ height: `${frontendHeight}%` }}
              ></div>
              <div
                className="w-2 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm transition-all duration-300"
                style={{ height: `${backendHeight}%` }}
              ></div>
              <div
                className="w-2 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-300"
                style={{ height: `${toolsHeight}%` }}
              ></div>
            </div>
          )
        })}
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-10">
        <div className="text-xs text-slate-500">2023</div>
        <div className="text-xs text-slate-500">Q2</div>
        <div className="text-xs text-slate-500">Q3</div>
        <div className="text-xs text-slate-500">Q4</div>
        <div className="text-xs text-slate-500">2024</div>
        <div className="text-xs text-slate-500">Q2</div>
        <div className="text-xs text-slate-500">Q3</div>
        <div className="text-xs text-slate-500">Q4</div>
        <div className="text-xs text-slate-500">2025</div>
      </div>
    </div>
  )
}

// Work experience row component
function WorkExperienceRow({
  id,
  company,
  position,
  period,
  duration,
  status,
  description,
  technologies,
  achievements,
}: {
  id: string
  company: string
  position: string
  period: string
  duration: string
  status: string
  description: string
  technologies: string[]
  achievements: string[]
}) {
  const getStatusBadge = () => {
    let colorClass = ""
    switch (status) {
      case "Current":
        colorClass = "bg-green-500/10 text-green-400 border-green-500/30"
        break
      case "Completed":
        colorClass = "bg-blue-500/10 text-blue-400 border-blue-500/30"
        break
      default:
        colorClass = "bg-slate-500/10 text-slate-400 border-slate-500/30"
    }
    return (
      <Badge variant="outline" className={`text-xs ${colorClass}`}>
        {status}
      </Badge>
    )
  }

  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 hover:bg-slate-800/70 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-lg font-semibold text-slate-200 mb-1">{position}</div>
          <div className="text-sm text-cyan-400 mb-1">{company}</div>
          <div className="text-xs text-slate-500">
            {period} • {duration}
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          {getStatusBadge()}
          <div className="text-xs text-slate-500">#{id}</div>
        </div>
      </div>

      <div className="text-sm text-slate-300 mb-4 leading-relaxed">{description}</div>

      <div className="mb-4">
        <div className="text-xs text-slate-500 mb-2">Technologies Used:</div>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs text-slate-500 mb-2">Key Achievements:</div>
        <ul className="space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-xs text-slate-400 flex items-start">
              <div className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></div>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
type TechnologyItemProps = {
  name: string;
  experience: string;
  color?: string;
  proficiency?: number; // optional override
};

function TechnologyItem({
  name,
  experience,
  color,
  proficiency,
}: TechnologyItemProps) {
  const getCategoryColor = () => {
    const categoryLower = name.toLowerCase();
    if (categoryLower.includes('frontend')) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (categoryLower.includes('backend')) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (categoryLower.includes('database')) return 'bg-gradient-to-r from-purple-500 to-pink-500';
    if (categoryLower.includes('language')) return 'bg-gradient-to-r from-amber-500 to-orange-500';
    if (categoryLower.includes('styling') || categoryLower.includes('design')) return 'bg-gradient-to-r from-pink-500 to-rose-500';
    return 'bg-gradient-to-r from-slate-500 to-slate-400';
  };

  const progress =
    proficiency !== undefined
      ? proficiency
      : Number.parseInt(experience.split(" ")[0]) * 20;

  const colorClass = color ?? getCategoryColor();

  return (
    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50 hover:border-slate-600/70 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-slate-300 font-medium">{name}</div>
      </div>
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs text-slate-500">Experience:</div>
          <div className="text-xs text-slate-400">{experience}</div>
        </div>
        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${colorClass}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <div className="text-slate-500">Proficiency: {progress}%</div>
      </div>
    </div>
  );
}



// Activity item component
function ActivityItem({
  title,
  time,
  description,
  type,
}: {
  title: string
  time: string
  description: string
  type: "blog" | "project" | "github" | "learning"
}) {
  const getTypeStyles = () => {
    switch (type) {
      case "blog":
        return { icon: BookOpen, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" }
      case "project":
        return { icon: Briefcase, color: "text-green-500 bg-green-500/10 border-green-500/30" }
      case "github":
        return { icon: Github, color: "text-purple-500 bg-purple-500/10 border-purple-500/30" }
      case "learning":
        return { icon: Calendar, color: "text-amber-500 bg-amber-500/10 border-amber-500/30" }
      default:
        return { icon: Info, color: "text-slate-500 bg-slate-500/10 border-slate-500/30" }
    }
  }

  const { icon: Icon, color } = getTypeStyles()

  return (
    <div className="flex items-start space-x-3">
      <div className={`mt-0.5 p-1 rounded-full ${color.split(" ")[1]} ${color.split(" ")[2]}`}>
        <Icon className={`h-3 w-3 ${color.split(" ")[0]}`} />
      </div>
      <div>
        <div className="flex items-center">
          <div className="text-sm font-medium text-slate-200">{title}</div>
          <div className="ml-2 text-xs text-slate-500">{time}</div>
        </div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
    </div>
  )
}

// Notification item component
function NotificationItem({
  title,
  time,
  description,
  type,
}: {
  title: string
  time: string
  description: string
  type: "message" | "comment" | "github" | "linkedin"
}) {
  const getTypeStyles = () => {
    switch (type) {
      case "message":
        return { icon: Mail, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" }
      case "comment":
        return { icon: MessageSquare, color: "text-green-500 bg-green-500/10 border-green-500/30" }
      case "github":
        return { icon: Github, color: "text-purple-500 bg-purple-500/10 border-purple-500/30" }
      case "linkedin":
        return { icon: Linkedin, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30" }
      default:
        return { icon: Info, color: "text-slate-500 bg-slate-500/10 border-slate-500/30" }
    }
  }

  const { icon: Icon, color } = getTypeStyles()

  return (
    <div className="flex items-start space-x-3">
      <div className={`mt-0.5 p-1 rounded-full ${color.split(" ")[1]} ${color.split(" ")[2]}`}>
        <Icon className={`h-3 w-3 ${color.split(" ")[0]}`} />
      </div>
      <div>
        <div className="flex items-center">
          <div className="text-sm font-medium text-slate-200">{title}</div>
          <div className="ml-2 text-xs text-slate-500">{time}</div>
        </div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
    </div>
  )
}

// Social link item component
function SocialLinkItem({
  platform,
  handle,
  icon: Icon,
  link,
}: {
  platform: string
  handle: string
  icon: any
  link: string
}) {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-slate-800/50 transition-colors">
      <Icon className="h-5 w-5 text-cyan-500" />
      <div className="flex-1">
        <div className="text-sm font-medium text-slate-200">{platform}</div>
        <div className="text-xs text-slate-400">{handle}</div>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-6 text-xs px-2 text-slate-400 hover:text-slate-100"
        onClick={handleClick}
      >
        Visit
      </Button>
    </div>
  )
}

// Quick action button component
function QuickLinkButton({ 
  icon: Icon, 
  label, 
  href, 
  onClick 
}: { 
  icon: any; 
  label: string; 
  href?: string;
  onClick?: () => void;
}) {
  const button = (
    <Button
      variant="outline"
      className="h-auto py-3 px-3 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 flex flex-col items-center justify-center space-y-1 w-full"
      onClick={onClick}
      asChild={!!href}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full">
          <Icon className="h-5 w-5 text-cyan-500" />
          <span className="text-xs">{label}</span>
        </a>
      ) : (
        <>
          <Icon className="h-5 w-5 text-cyan-500" />
          <span className="text-xs">{label}</span>
        </>
      )}
    </Button>
  );

  return button;
}

function ProjectRow({
  id,
  name,
  status,
  progress,
  lastUpdate,
  link,
}: { id: string; name: string; status: string; progress: number; lastUpdate: string; link: string }) {
  return (
    <div className="grid grid-cols-12 items-center p-3 hover:bg-slate-800/30 transition-colors">
      <div className="col-span-1">{id}</div>
      <div className="col-span-4 font-medium text-slate-200">{name}</div>
      <div className="col-span-2">{status}</div>
      <div className="col-span-2">
        <div className="flex items-center space-x-2">
          <Progress value={progress} className="h-2 w-16" />
          <span className="text-slate-400 mr-2">{progress}%</span>
        </div>
      </div>
      <div className="col-span-2">{lastUpdate}</div>
      <div className="col-span-1">
        {link !== "N/A" ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-500 hover:underline transition-colors"
          >
            View
          </a>
        ) : (
          <span className="text-slate-400">N/A</span>
        )}
      </div>
    </div>
  )
}
