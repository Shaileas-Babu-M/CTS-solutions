import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Home from "@/components/student/Home";
import About from "@/components/student/About";
import Contact from "@/components/student/Contact";
import { ArrowLeft } from "lucide-react";

export default function StudentApp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white mb-8">
            <h1 className="text-2xl font-bold mb-2">StudentApp</h1>
            <p className="text-purple-100">Multi-component application demonstrating modular architecture</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-medium text-purple-700 mb-2">Class Components</h3>
                <p className="text-sm text-gray-600">Learn how to create and use class-based React components</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-medium text-blue-700 mb-2">Component Composition</h3>
                <p className="text-sm text-gray-600">Understand how to combine multiple components</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-medium text-green-700 mb-2">Modular Structure</h3>
                <p className="text-sm text-gray-600">Organize code into separate, reusable files</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Home />
          <About />
          <Contact />
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Component Structure</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-400 mb-2">// Component file structure</div>
              <div>src/</div>
              <div>&nbsp;&nbsp;Components/</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;Home.js</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;About.js</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;Contact.js</div>
              <div>&nbsp;&nbsp;App.js</div>
              <br />
              <div className="text-gray-400">// Each component is a separate class</div>
              <div><span className="text-blue-300">class</span> <span className="text-yellow-300">Home</span> <span className="text-blue-300">extends</span> <span className="text-white">React.Component</span></div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
