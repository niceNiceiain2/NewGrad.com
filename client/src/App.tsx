import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ApiDocs from "@/pages/api-docs";
import LessDemo from "@/pages/less-demo";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div>
      <nav style={{ 
        padding: '1rem', 
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        gap: '1.5rem',
        backgroundColor: 'white'
      }}>
        <Link 
          href="/" 
          data-testid="link-api-docs"
          style={{ 
            textDecoration: 'none', 
            color: '#3b82f6', 
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          API Documentation
        </Link>
        <Link 
          href="/less-demo" 
          data-testid="link-less-demo"
          style={{ 
            textDecoration: 'none', 
            color: '#3b82f6', 
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Less Demo
        </Link>
      </nav>
      <Switch>
        <Route path="/" component={ApiDocs} />
        <Route path="/less-demo" component={LessDemo} />
        <Route component={NotFound} />
      </Switch>
    </div>
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
