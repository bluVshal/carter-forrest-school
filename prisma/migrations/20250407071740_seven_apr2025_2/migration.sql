/*
  Warnings:

  - Added the required column `role` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLEANING', 'USHER', 'SECRETARY', 'ASSISTANTRECTOR', 'RECTOR', 'ASSISTANTMANAGER', 'MANAGER', 'MESSENGER', 'DOCTOR', 'NURSE');

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "role" "Role" NOT NULL;
