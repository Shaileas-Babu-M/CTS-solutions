import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "@/pages/dashboard";
import MyFirstReact from "@/pages/myfirstreact";
import StudentApp from "@/pages/student-app";
import ScoreCalculator from "@/pages/score-calculator";
import BlogApp from "@/pages/blog-app";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/myfirstreact" component={MyFirstReact} />
      <Route path="/student-app" component={StudentApp} />
      <Route path="/score-calculator" component={ScoreCalculator} />
      <Route path="/blog-app" component={BlogApp} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
