-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "isStdPresntToday" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Teachers" ADD COLUMN     "isTchPresntToday" BOOLEAN NOT NULL DEFAULT true;
