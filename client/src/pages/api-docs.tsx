import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Zap, Database, Send, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface EndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  requestBody?: any;
  responseExample?: any;
}

function MethodBadge({ method }: { method: string }) {
  const colors = {
    GET: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-500/20",
    POST: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 border-green-500/20",
    PUT: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-500/20",
    DELETE: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border-red-500/20"
  };
  
  return (
    <Badge className={`${colors[method as keyof typeof colors]} font-mono font-semibold border`}>
      {method}
    </Badge>
  );
}

function EndpointCard({ method, path, description, requestBody, responseExample }: EndpointProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="mb-6 overflow-hidden">
      <CardHeader className="bg-muted/30 pb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <MethodBadge method={method} />
          <code className="text-base font-mono font-semibold text-foreground flex-1 min-w-0">
            {path}
          </code>
        </div>
        <CardDescription className="text-base mt-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {requestBody && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Request Body</h4>
            <div className="relative">
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 z-10"
                onClick={() => handleCopy(JSON.stringify(requestBody, null, 2))}
                data-testid="button-copy-request"
              >
                {copied ? <CheckCircle2 className="h-4 w-4" /> : <Code className="h-4 w-4" />}
              </Button>
              <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm">
                <code className="font-mono">{JSON.stringify(requestBody, null, 2)}</code>
              </pre>
            </div>
          </div>
        )}
        {responseExample && (
          <div>
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Response Example</h4>
            <div className="relative">
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 z-10"
                onClick={() => handleCopy(JSON.stringify(responseExample, null, 2))}
                data-testid="button-copy-response"
              >
                {copied ? <CheckCircle2 className="h-4 w-4" /> : <Code className="h-4 w-4" />}
              </Button>
              <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm">
                <code className="font-mono">{JSON.stringify(responseExample, null, 2)}</code>
              </pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ApiDocs() {
  const baseUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 bg-primary rounded-md flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">NewGrad.com API</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            RESTful API for managing job listings and applications. Simple, fast, and reliable endpoints for your job board platform.
          </p>
          <div className="flex gap-4 mt-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">In-Memory Storage</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">JSON Responses</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Send className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">CORS Enabled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Base URL */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Base URL</CardTitle>
          </CardHeader>
          <CardContent>
            <code className="text-base font-mono bg-muted px-4 py-2 rounded-md inline-block" data-testid="text-base-url">
              {baseUrl}/api
            </code>
          </CardContent>
        </Card>
      </div>

      {/* Endpoints */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="jobs" data-testid="tab-jobs">Job Endpoints</TabsTrigger>
            <TabsTrigger value="applications" data-testid="tab-applications">Application Endpoints</TabsTrigger>
            <TabsTrigger value="upload" data-testid="tab-upload">File Upload</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-0">
            <h2 className="text-2xl font-semibold mb-6">Job Endpoints</h2>
            
            <EndpointCard
              method="GET"
              path="/api/jobs"
              description="Retrieve all job listings"
              responseExample={[
                {
                  id: "550e8400-e29b-41d4-a716-446655440000",
                  title: "Entry Level Java Developer",
                  company: "Tech Corp",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  description: "Join our team as an entry-level Java developer...",
                  requirements: ["Java", "Spring Boot", "SQL"],
                  salary: "$70,000 - $90,000",
                  experienceLevel: "Entry Level"
                }
              ]}
            />

            <EndpointCard
              method="GET"
              path="/api/jobs/:id"
              description="Retrieve a specific job by ID"
              responseExample={{
                id: "550e8400-e29b-41d4-a716-446655440000",
                title: "Entry Level Java Developer",
                company: "Tech Corp",
                location: "San Francisco, CA",
                type: "Full-time",
                description: "Join our team as an entry-level Java developer...",
                requirements: ["Java", "Spring Boot", "SQL"],
                salary: "$70,000 - $90,000",
                experienceLevel: "Entry Level"
              }}
            />

            <EndpointCard
              method="POST"
              path="/api/jobs"
              description="Create a new job listing"
              requestBody={{
                title: "Entry Level Android Developer",
                company: "Mobile Solutions Inc",
                location: "New York, NY",
                type: "Full-time",
                description: "Seeking passionate Android developer...",
                requirements: ["Kotlin", "Android SDK", "Git"],
                salary: "$75,000 - $95,000",
                experienceLevel: "Entry Level"
              }}
              responseExample={{
                id: "660e8400-e29b-41d4-a716-446655440001",
                title: "Entry Level Android Developer",
                company: "Mobile Solutions Inc",
                location: "New York, NY",
                type: "Full-time",
                description: "Seeking passionate Android developer...",
                requirements: ["Kotlin", "Android SDK", "Git"],
                salary: "$75,000 - $95,000",
                experienceLevel: "Entry Level"
              }}
            />

            <EndpointCard
              method="DELETE"
              path="/api/jobs/:id"
              description="Delete a job listing by ID"
              responseExample={{
                message: "Job deleted successfully"
              }}
            />
          </TabsContent>

          <TabsContent value="applications" className="space-y-0">
            <h2 className="text-2xl font-semibold mb-6">Application Endpoints</h2>

            <EndpointCard
              method="GET"
              path="/api/applications"
              description="Retrieve all job applications"
              responseExample={[
                {
                  id: "770e8400-e29b-41d4-a716-446655440002",
                  jobId: "550e8400-e29b-41d4-a716-446655440000",
                  fullName: "Jane Smith",
                  email: "jane.smith@email.com",
                  phone: "+1 (555) 123-4567",
                  resumeUrl: "https://example.com/resume.pdf",
                  coverLetter: "I am excited to apply for this position...",
                  status: "pending"
                }
              ]}
            />

            <EndpointCard
              method="GET"
              path="/api/applications/:id"
              description="Retrieve a specific application by ID"
              responseExample={{
                id: "770e8400-e29b-41d4-a716-446655440002",
                jobId: "550e8400-e29b-41d4-a716-446655440000",
                fullName: "Jane Smith",
                email: "jane.smith@email.com",
                phone: "+1 (555) 123-4567",
                resumeUrl: "https://example.com/resume.pdf",
                coverLetter: "I am excited to apply for this position...",
                status: "pending"
              }}
            />

            <EndpointCard
              method="GET"
              path="/api/jobs/:jobId/applications"
              description="Retrieve all applications for a specific job"
              responseExample={[
                {
                  id: "770e8400-e29b-41d4-a716-446655440002",
                  jobId: "550e8400-e29b-41d4-a716-446655440000",
                  fullName: "Jane Smith",
                  email: "jane.smith@email.com",
                  phone: "+1 (555) 123-4567",
                  resumeUrl: "https://example.com/resume.pdf",
                  coverLetter: "I am excited to apply for this position...",
                  status: "pending"
                }
              ]}
            />

            <EndpointCard
              method="POST"
              path="/api/applications"
              description="Submit a new job application"
              requestBody={{
                jobId: "550e8400-e29b-41d4-a716-446655440000",
                fullName: "John Doe",
                email: "john.doe@email.com",
                phone: "+1 (555) 987-6543",
                resumeUrl: "https://example.com/resume.pdf",
                coverLetter: "I am very interested in this opportunity..."
              }}
              responseExample={{
                id: "880e8400-e29b-41d4-a716-446655440003",
                jobId: "550e8400-e29b-41d4-a716-446655440000",
                fullName: "John Doe",
                email: "john.doe@email.com",
                phone: "+1 (555) 987-6543",
                resumeUrl: "https://example.com/resume.pdf",
                coverLetter: "I am very interested in this opportunity...",
                status: "pending"
              }}
            />

            <EndpointCard
              method="PUT"
              path="/api/applications/:id"
              description="Update an application status"
              requestBody={{
                status: "reviewing"
              }}
              responseExample={{
                id: "770e8400-e29b-41d4-a716-446655440002",
                jobId: "550e8400-e29b-41d4-a716-446655440000",
                fullName: "Jane Smith",
                email: "jane.smith@email.com",
                phone: "+1 (555) 123-4567",
                resumeUrl: "https://example.com/resume.pdf",
                coverLetter: "I am excited to apply for this position...",
                status: "reviewing"
              }}
            />
          </TabsContent>

          <TabsContent value="upload" className="space-y-0">
            <h2 className="text-2xl font-semibold mb-6">File Upload</h2>
            
            <Card className="mb-6 bg-blue-500/5 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Resume Upload Workflow
                </CardTitle>
                <CardDescription className="text-base">
                  First upload the resume file, then use the returned URL in your application submission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Upload resume using POST /api/upload/resume (multipart/form-data)</li>
                  <li>Receive the file URL in the response</li>
                  <li>Include the URL in the resumeUrl field when submitting application via POST /api/applications</li>
                </ol>
              </CardContent>
            </Card>

            <EndpointCard
              method="POST"
              path="/api/upload/resume"
              description="Upload a resume file (PDF, DOC, or DOCX). Maximum file size: 5MB. Use multipart/form-data with field name 'resume'."
              responseExample={{
                message: "Resume uploaded successfully",
                filename: "1699564892345-987654321-john-doe-resume.pdf",
                url: "/uploads/1699564892345-987654321-john-doe-resume.pdf",
                originalName: "john-doe-resume.pdf",
                size: 245678
              }}
            />

            <Card className="mb-6 overflow-hidden">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle className="text-base">cURL Example</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm">
                  <code className="font-mono">{`curl -X POST ${baseUrl}/api/upload/resume \\
  -F "resume=@/path/to/resume.pdf"`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="mb-6 overflow-hidden">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle className="text-base">JavaScript Example (Fetch)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm">
                  <code className="font-mono">{`const formData = new FormData();
formData.append('resume', fileInput.files[0]);

fetch('${baseUrl}/api/upload/resume', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  console.log('File uploaded:', data.url);
  // Use data.url as resumeUrl in application
});`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="mb-6 overflow-hidden border-amber-500/20 bg-amber-500/5">
              <CardHeader className="pb-4">
                <CardTitle className="text-base text-amber-600 dark:text-amber-400">File Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Allowed formats: PDF, DOC, DOCX</li>
                  <li>Maximum file size: 5 MB</li>
                  <li>Field name must be 'resume'</li>
                  <li>Content-Type: multipart/form-data</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted-foreground">
              NewGrad.com API - Built for new graduate recruitment
            </p>
            <Badge variant="secondary" className="font-mono">
              Version 1.0.0
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
