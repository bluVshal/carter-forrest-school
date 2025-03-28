"use server";

import { db } from '@/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function getTeacher(teacherId) {
/*    const { userId, orgId }  = auth();

    if(!userId || !orgId ) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { clerkUserId: userId }
    });

    if(!user) {
        throw new Error("User not found");
    }
*/
    const teacher = await db.teachers.findUnique({
        where: {id: teacherId},
    });

    if(!teacher){
        return null;
    }

    return teacher;
}

export async function getTeachers() {
 /*   const { userId }  = auth();

    if(!userId ) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { clerkUserId: userId }
    });

    if(!user) {
        throw new Error("User not found");
    }*/

    const teacher = await db.teachers.findMany({
        orderBy: {createdAt: "desc"},
    });

    if(!teacher){
        return null;
    }

    return teacher;
}