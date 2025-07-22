import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { ArrowLeft } from "lucide-react";

export default function MyFirstReact() {
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
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-8">
            <h1 className="text-2xl font-bold mb-2">myfirstreact</h1>
            <p className="text-green-100">Your first React application - demonstrating basic component structure</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-8 text-center">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">
              Welcome to the first session of React
            </h1>
            <p className="text-gray-600 mb-6">
              This is a simple React component that demonstrates the basics of JSX and component rendering.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">What you're learning:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-medium text-blue-600 mb-1">JSX Syntax</h4>
                  <p className="text-gray-600">HTML-like syntax in JavaScript</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-medium text-green-600 mb-1">Components</h4>
                  <p className="text-gray-600">Reusable UI building blocks</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-medium text-purple-600 mb-1">Rendering</h4>
                  <p className="text-gray-600">Displaying components in the DOM</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-left mb-6">
              <div className="text-gray-400 mb-2">// App.js</div>
              <div className="text-blue-300">import</div> <div className="text-white">React</div> <div className="text-blue-300">from</div> <div className="text-yellow-300">'react'</div>;
              <br /><br />
              <div className="text-blue-300">function</div> <div className="text-yellow-300">App</div>() {'{'}
              <br />
              &nbsp;&nbsp;<div className="text-blue-300">return</div> (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-300">div</div>&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-300">h1</div>&gt;Welcome to the first session of React&lt;/<div className="text-red-300">h1</div>&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<div className="text-red-300">div</div>&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              {'}'}
              <br /><br />
              <div className="text-blue-300">export default</div> <div className="text-white">App</div>;
            </div>

            <Link href="/">
              <Button>
                Continue Learning Journey
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
