/*
  Warnings:

  - You are about to drop the column `areaChargeId` on the `AreaCharge` table. All the data in the column will be lost.
  - You are about to drop the `_AreaChargeToUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AreaChargeToUsers" DROP CONSTRAINT "_AreaChargeToUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_AreaChargeToUsers" DROP CONSTRAINT "_AreaChargeToUsers_B_fkey";

-- AlterTable
ALTER TABLE "AreaCharge" DROP COLUMN "areaChargeId",
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "_AreaChargeToUsers";

-- AddForeignKey
ALTER TABLE "AreaCharge" ADD CONSTRAINT "AreaCharge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
