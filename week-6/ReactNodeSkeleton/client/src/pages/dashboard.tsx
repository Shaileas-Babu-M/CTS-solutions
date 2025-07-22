import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { 
  Rocket, 
  GraduationCap, 
  Calculator, 
  FileText, 
  Play, 
  Eye, 
  Heart,
  Zap,
  Download,
  CheckCircle,
  Book,
  Terminal,
  Copy,
  Plus,
  Github,
  Clock
} from "lucide-react";

const projects = [
  {
    id: "myfirstreact",
    name: "myfirstreact",
    description: "Simple welcome page demonstrating basic React component structure and JSX rendering. Perfect introduction to React fundamentals.",
    icon: Rocket,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    level: "Beginner",
    levelColor: "text-green-600 bg-green-50",
    status: "running",
    statusColor: "bg-green-400",
    concepts: ["JSX", "Components", "Rendering"],
    conceptColor: "bg-blue-50 text-blue-700",
    tech: "React 18",
    time: "5 min",
    path: "/myfirstreact"
  },
  {
    id: "studentapp",
    name: "StudentApp", 
    description: "Multi-component application with Home, About, and Contact pages. Demonstrates component composition and modular architecture.",
    icon: GraduationCap,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    level: "Intermediate",
    levelColor: "text-blue-600 bg-blue-50",
    status: "stopped",
    statusColor: "bg-gray-400",
    concepts: ["Class Components", "Modular Structure", "Navigation"],
    conceptColor: "bg-purple-50 text-purple-700",
    tech: "3 Components",
    time: "10 min",
    path: "/student-app"
  },
  {
    id: "scorecalculator",
    name: "scorecalculatorapp",
    description: "Score calculator with props handling and CSS styling. Learn data flow, calculations, and component styling best practices.",
    icon: Calculator,
    iconBg: "bg-orange-100", 
    iconColor: "text-orange-600",
    level: "Intermediate",
    levelColor: "text-yellow-600 bg-yellow-50",
    status: "running",
    statusColor: "bg-green-400",
    concepts: ["Props", "CSS Modules", "Calculations", "Styling"],
    conceptColor: "bg-orange-50 text-orange-700",
    tech: "Functional",
    time: "15 min",
    path: "/score-calculator"
  },
  {
    id: "blogapp",
    name: "blogapp",
    description: "Dynamic blog post fetcher using external API with error handling. Implements lifecycle methods and async data operations.",
    icon: FileText,
    iconBg: "bg-red-100",
    iconColor: "text-red-600", 
    level: "Advanced",
    levelColor: "text-red-600 bg-red-50",
    status: "loading",
    statusColor: "bg-yellow-400",
    concepts: ["API Calls", "Lifecycle", "Error Handling", "Async"],
    conceptColor: "bg-red-50 text-red-700",
    tech: "Class + API",
    time: "20 min",
    path: "/blog-app"
  }
];

const learningPath = [
  { step: 1, name: "myfirstreact", subtitle: "Start here", color: "bg-green-500", bgColor: "bg-green-50", borderColor: "border-green-200", textColor: "text-green-800", subtitleColor: "text-green-600" },
  { step: 2, name: "StudentApp", subtitle: "Components", color: "bg-blue-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", textColor: "text-blue-800", subtitleColor: "text-blue-600" },
  { step: 3, name: "Calculator", subtitle: "Props & CSS", color: "bg-orange-500", bgColor: "bg-orange-50", borderColor: "border-orange-200", textColor: "text-orange-800", subtitleColor: "text-orange-600" },
  { step: 4, name: "BlogApp", subtitle: "APIs & State", color: "bg-red-500", bgColor: "bg-red-50", borderColor: "border-red-200", textColor: "text-red-800", subtitleColor: "text-red-600" }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Your React Learning Journey</h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Explore four comprehensive React applications designed to teach core concepts, from basic components to API integration and state management.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-blue-100">React Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-blue-100">Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-blue-100">Core Concepts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Beginner</div>
                <div className="text-sm text-blue-100">Level</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">React Learning Projects</h2>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">View:</span>
              <Button variant="default" size="sm">Grid</Button>
              <Button variant="ghost" size="sm">List</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${project.iconBg} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`${project.iconColor} w-5 h-5`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-neutral-800">{project.name}</h3>
                          <span className={`text-sm px-2 py-1 rounded-full ${project.levelColor}`}>{project.level}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-neutral-800">
                          <Heart className="w-4 h-4" />
                        </button>
                        <div className={`w-2 h-2 ${project.statusColor} rounded-full`} title={project.status}></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-neutral-800 mb-2">Key Concepts:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.concepts.map((concept) => (
                          <span key={concept} className={`${project.conceptColor} px-2 py-1 rounded text-xs`}>
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span><FileText className="w-3 h-3 inline mr-1" />{project.tech}</span>
                        <span><Clock className="w-3 h-3 inline mr-1" />{project.time}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Link href={project.path}>
                          <Button size="sm">
                            <Play className="w-3 h-3 mr-1" />
                            Run App
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center">
            <Terminal className="text-secondary mr-2 w-5 h-5" />
            Recommended Learning Path
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {learningPath.map((step) => (
              <div key={step.step} className={`flex items-center space-x-3 p-3 ${step.bgColor} rounded-lg border ${step.borderColor}`}>
                <div className={`w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                  {step.step}
                </div>
                <div>
                  <div className={`font-medium ${step.textColor}`}>{step.name}</div>
                  <div className={`text-xs ${step.subtitleColor}`}>{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions & Terminal Section */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center">
                <Zap className="text-yellow-500 mr-2 w-5 h-5" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Plus className="text-primary w-4 h-4" />
                    <span className="font-medium">Create New React App</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Download className="text-accent w-4 h-4" />
                    <span className="font-medium">Install All Dependencies</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 w-4 h-4" />
                    <span className="font-medium">Run All Tests</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Book className="text-secondary w-4 h-4" />
                    <span className="font-medium">View Documentation</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Terminal Commands */}
          <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-200 p-6 text-green-400 font-mono">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center font-sans">
              <Terminal className="text-green-400 mr-2 w-5 h-5" />
              Terminal Commands
            </h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400"># Create all React applications</div>
              <div>npx create-react-app myfirstreact</div>
              <div>npx create-react-app StudentApp</div>
              <div>npx create-react-app scorecalculatorapp</div>
              <div>npx create-react-app blogapp</div>
              <div className="mt-4 text-gray-400"># Run any application</div>
              <div>cd myfirstreact && npm start</div>
              <div className="mt-4 text-gray-400"># Install dependencies</div>
              <div>npm install</div>
            </div>
            <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 font-sans" size="sm">
              <Copy className="w-3 h-3 mr-1" />
              Copy Commands
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm text-gray-500">© 2024 React Learning Hub</span>
              <a href="#" className="text-sm text-gray-500 hover:text-neutral-800 transition-colors">Documentation</a>
              <a href="#" className="text-sm text-gray-500 hover:text-neutral-800 transition-colors">Support</a>
              <a href="#" className="text-sm text-gray-500 hover:text-neutral-800 transition-colors">GitHub</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Built with React 18</span>
              <div className="flex items-center space-x-2">
                <FileText className="text-blue-500 w-4 h-4" />
                <Github className="text-gray-600 w-4 h-4" />
                <Terminal className="text-red-500 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add missing imports
import { ChevronRight } from "lucide-react";
