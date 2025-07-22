import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import CalculateScore from "@/components/score/CalculateScore";
import { ArrowLeft } from "lucide-react";
import "@/styles/score-calculator.css";

export default function ScoreCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-8">
            <h1 className="text-2xl font-bold mb-2">scorecalculatorapp</h1>
            <p className="text-orange-100">Learn props handling, data flow, and CSS styling in React</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-medium text-orange-700 mb-2">Props Handling</h3>
                <p className="text-sm text-gray-600">Learn how to pass and receive data between components using props</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-medium text-blue-700 mb-2">Functional Components</h3>
                <p className="text-sm text-gray-600">Understand modern React functional component patterns</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-medium text-green-700 mb-2">CSS Styling</h3>
                <p className="text-sm text-gray-600">Apply custom CSS styles and component styling techniques</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-medium text-purple-700 mb-2">Calculations</h3>
                <p className="text-sm text-gray-600">Perform dynamic calculations and display results</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CalculateScore 
          Name="Jane Doe" 
          School="ABC School" 
          Total={450} 
          goal={5} 
        />

        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Code Example</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-400 mb-2">// CalculateScore.tsx</div>
              <div><span className="text-blue-300">interface</span> <span className="text-yellow-300">CalculateScoreProps</span> {'{'}</div>
              <div>&nbsp;&nbsp;<span className="text-white">Name</span>: <span className="text-green-300">string</span>;</div>
              <div>&nbsp;&nbsp;<span className="text-white">School</span>: <span className="text-green-300">string</span>;</div>
              <div>&nbsp;&nbsp;<span className="text-white">Total</span>: <span className="text-green-300">number</span>;</div>
              <div>&nbsp;&nbsp;<span className="text-white">goal</span>: <span className="text-green-300">number</span>;</div>
              <div>{'}'}</div>
              <br />
              <div><span className="text-blue-300">function</span> <span className="text-yellow-300">CalculateScore</span>(<span className="text-white">props</span>) {'{'}</div>
              <div>&nbsp;&nbsp;<span className="text-blue-300">const</span> <span className="text-white">average</span> = <span className="text-white">props.Total</span> / <span className="text-white">props.goal</span>;</div>
              <div>&nbsp;&nbsp;<span className="text-blue-300">return</span> (</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-300">div</span> <span className="text-yellow-300">className</span>=<span className="text-green-300">"scoreBox"</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-300">h2</span>&gt;Student Score Calculator&lt;/<span className="text-red-300">h2</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-300">p</span>&gt;Average: {'{average}'}&lt;/<span className="text-red-300">p</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-red-300">div</span>&gt;</div>
              <div>&nbsp;&nbsp;);</div>
              <div>{'}'}</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
