import z from "zod";

export const searchFormSchema = z.object({
  teacherName: z
    .string()
    .min(1, "Project name is required"),
  address: z
    .string()
    .min(2, "Address is required and must be at least 2 characters"),
});

/*export const sprintSchema = z.object({
  name: z.string().min(1, "Sprint name is required"),
  startDate: z.date(),
  endDate: z.date(),
});


export const issueSchema = z.object({
  title: z.string().min(1, "Title is required"),
  assigneeId: z.string().cuid("Please select assignee"),
  description: z.string().optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"])
});*/