"use client";

import { z } from 'zod';

const formSchema = z.object({
    teacherName: z.string().min(2, {
        message: "Teacher name must be at least 2 characters."
    })
});

export default formSchema;