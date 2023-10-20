/*
  Warnings:

  - Added the required column `token` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_type` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "failed_login_atempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "token" TEXT NOT NULL,
ADD COLUMN     "token_type" TEXT NOT NULL;
