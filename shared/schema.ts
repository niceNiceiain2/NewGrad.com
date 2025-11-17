import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Job listings table
export const jobs = pgTable("jobs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  type: text("type").notNull(), // "Full-time", "Part-time", "Contract", "Internship"
  description: text("description").notNull(),
  requirements: text("requirements").array().notNull(),
  salary: text("salary"),
  experienceLevel: text("experience_level").notNull(), // "Entry Level", "Mid Level", "Senior"
});

export const insertJobSchema = createInsertSchema(jobs).omit({
  id: true,
});

export type InsertJob = z.infer<typeof insertJobSchema>;
export type Job = typeof jobs.$inferSelect;

// Job applications table
export const applications = pgTable("applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  jobId: varchar("job_id").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  resumeUrl: text("resume_url"),
  coverLetter: text("cover_letter"),
  status: text("status").notNull().default("pending"), // "pending", "reviewing", "accepted", "rejected"
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  status: true,
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;

// Keep existing user schema for potential future auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
