import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Posts() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['https://jsonplaceholder.typicode.com/posts'],
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog Posts</h1>
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Posts</h2>
        <p className="text-gray-600 mb-4">
          An error occurred while fetching blog posts: {error.message}
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-red-700">
            This demonstrates proper error handling in React applications when API calls fail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog Posts</h1>
        <p className="text-gray-600">
          Fetched dynamically from JSONPlaceholder API - demonstrating React lifecycle and async operations
        </p>
      </div>
      
      <div className="grid gap-4">
        {posts?.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-800 capitalize leading-tight">
                  {post.title}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-3 flex-shrink-0">
                  Post #{post.id}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{post.body}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">User {post.userId}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts && posts.length > 0 && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">✅ API Integration Successful</h3>
          <p className="text-sm text-green-700">
            Successfully loaded {posts.length} posts from the JSONPlaceholder API using React Query.
            This demonstrates modern data fetching patterns with proper loading and error states.
          </p>
        </div>
      )}
    </div>
  );
}
