"use server";

import { db } from '@/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function getStaff() {
    const staff = await db.staff.findMany({
        orderBy: {createdAt: "desc"},
    });

    if(!staff){
        return null;
    }

    return staff;
}