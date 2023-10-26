/*
  Warnings:

  - The `state` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ProjectState" AS ENUM ('REALIZADO', 'FINALIZADO', 'MANTENIMIENTO');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "state",
ADD COLUMN     "state" "ProjectState";
