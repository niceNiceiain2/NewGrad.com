import { type User, type InsertUser, type Job, type InsertJob, type Application, type InsertApplication } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods (existing)
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Job methods
  getAllJobs(): Promise<Job[]>;
  getJob(id: string): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  deleteJob(id: string): Promise<boolean>;
  
  // Application methods
  getAllApplications(): Promise<Application[]>;
  getApplication(id: string): Promise<Application | undefined>;
  getApplicationsByJobId(jobId: string): Promise<Application[]>;
  createApplication(application: InsertApplication): Promise<Application>;
  updateApplicationStatus(id: string, status: string): Promise<Application | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private jobs: Map<string, Job>;
  private applications: Map<string, Application>;

  constructor() {
    this.users = new Map();
    this.jobs = new Map();
    this.applications = new Map();
    
    // Seed with sample jobs
    this.seedData();
  }

  private seedData() {
    const job1Id = randomUUID();
    const job1: Job = {
      id: job1Id,
      title: "Entry Level Java Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our team as an entry-level Java developer. You'll work on building scalable applications using Spring Boot and modern Java frameworks.",
      requirements: ["Java", "Spring Boot", "SQL", "Git"],
      salary: "$70,000 - $90,000",
      experienceLevel: "Entry Level"
    };

    const job2Id = randomUUID();
    const job2: Job = {
      id: job2Id,
      title: "Entry Level Android Developer",
      company: "Mobile Solutions Inc",
      location: "New York, NY",
      type: "Full-time",
      description: "Seeking passionate Android developer to build innovative mobile applications for millions of users.",
      requirements: ["Kotlin", "Android SDK", "Git", "RESTful APIs"],
      salary: "$75,000 - $95,000",
      experienceLevel: "Entry Level"
    };

    this.jobs.set(job1Id, job1);
    this.jobs.set(job2Id, job2);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Job methods
  async getAllJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values());
  }

  async getJob(id: string): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = randomUUID();
    const job: Job = { 
      id,
      title: insertJob.title,
      company: insertJob.company,
      location: insertJob.location,
      type: insertJob.type,
      description: insertJob.description,
      requirements: insertJob.requirements,
      salary: insertJob.salary ?? null,
      experienceLevel: insertJob.experienceLevel
    };
    this.jobs.set(id, job);
    return job;
  }

  async deleteJob(id: string): Promise<boolean> {
    return this.jobs.delete(id);
  }

  // Application methods
  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applications.values());
  }

  async getApplication(id: string): Promise<Application | undefined> {
    return this.applications.get(id);
  }

  async getApplicationsByJobId(jobId: string): Promise<Application[]> {
    return Array.from(this.applications.values()).filter(
      (app) => app.jobId === jobId
    );
  }

  async createApplication(insertApplication: InsertApplication): Promise<Application> {
    const id = randomUUID();
    const application: Application = { 
      id,
      jobId: insertApplication.jobId,
      fullName: insertApplication.fullName,
      email: insertApplication.email,
      phone: insertApplication.phone,
      resumeUrl: insertApplication.resumeUrl ?? null,
      coverLetter: insertApplication.coverLetter ?? null,
      status: "pending"
    };
    this.applications.set(id, application);
    return application;
  }

  async updateApplicationStatus(id: string, status: string): Promise<Application | undefined> {
    const application = this.applications.get(id);
    if (!application) {
      return undefined;
    }
    const updatedApplication = { ...application, status };
    this.applications.set(id, updatedApplication);
    return updatedApplication;
  }
}

export const storage = new MemStorage();
