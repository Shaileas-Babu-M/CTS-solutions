import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Posts from "@/components/blog/Posts";
import { ArrowLeft, Globe, RefreshCw, Shield, Zap } from "lucide-react";

export default function BlogApp() {
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
          
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white mb-8">
            <h1 className="text-2xl font-bold mb-2">blogapp</h1>
            <p className="text-red-100">Advanced React concepts: API integration, lifecycle methods, and error handling</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-red-600 mr-2" />
                  <h3 className="font-medium text-red-700">API Integration</h3>
                </div>
                <p className="text-sm text-gray-600">Learn to fetch data from external APIs using modern React patterns</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <RefreshCw className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-blue-700">Lifecycle Methods</h3>
                </div>
                <p className="text-sm text-gray-600">Understand component lifecycle and when to perform side effects</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-medium text-green-700">Error Handling</h3>
                </div>
                <p className="text-sm text-gray-600">Implement robust error handling for network requests</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-medium text-purple-700">Async Operations</h3>
                </div>
                <p className="text-sm text-gray-600">Handle asynchronous data loading with proper loading states</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Technical Implementation</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-400 mb-2">// Modern React Query approach</div>
              <div><span className="text-blue-300">const</span> {'{ '}<span className="text-white">data: posts, isLoading, error</span> {'} '} = <span className="text-yellow-300">useQuery</span>({'{'}</div>
              <div>&nbsp;&nbsp;<span className="text-white">queryKey</span>: [<span className="text-green-300">'https://jsonplaceholder.typicode.com/posts'</span>],</div>
              <div>&nbsp;&nbsp;<span className="text-white">retry</span>: <span className="text-orange-300">1</span>,</div>
              <div>{'});'}</div>
              <br />
              <div className="text-gray-400">// Legacy class component approach</div>
              <div><span className="text-blue-300">componentDidMount</span>() {'{'}</div>
              <div>&nbsp;&nbsp;<span className="text-yellow-300">fetch</span>(<span className="text-green-300">'https://jsonplaceholder.typicode.com/posts'</span>)</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-300">then</span>(<span className="text-white">res</span> {'=> '}<span className="text-white">res</span>.<span className="text-yellow-300">json</span>())</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-300">then</span>(<span className="text-white">data</span> {'=> '}<span className="text-blue-300">this</span>.<span className="text-yellow-300">setState</span>({'{ posts: data }'}));</div>
              <div>{'}'}</div>
            </div>
          </CardContent>
        </Card>

        <Posts />
      </main>
    </div>
  );
}
