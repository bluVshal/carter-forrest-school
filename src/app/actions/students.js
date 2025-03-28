"use server";

import { db } from '@/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function getStudent(studentId) {
   /* const { userId, orgId }  = auth();

    if(!userId || !orgId ) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { clerkUserId: userId }
    });

    if(!user) {
        throw new Error("User not found");
    }*/

    const student = await db.students.findUnique({
        where: {id: studentId},
    });

    if(!student){
        return null;
    }

    return student;
}

export async function getStudents() {
    /*const { userId }  = auth();

    if(!userId ) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { clerkUserId: userId }
    });

    if(!user) {
        throw new Error("User not found");
    }
*/
    const student = await db.students.findMany({
        orderBy: {createdAt: "desc"},
    });

    if(!student){
        return null;
    }

    return student;
}