/*
  Warnings:

  - You are about to drop the column `isStdPresntToday` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `isTchPresntToday` on the `Teachers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "isStdPresntToday";

-- AlterTable
ALTER TABLE "Teachers" DROP COLUMN "isTchPresntToday";
