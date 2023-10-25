-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "chargeId" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "departmentId" INTEGER;

-- CreateTable
CREATE TABLE "Charge" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,

    CONSTRAINT "Charge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaCharge" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,
    "areaChargeId" INTEGER NOT NULL,

    CONSTRAINT "AreaCharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AreaChargeToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AreaChargeToUsers_AB_unique" ON "_AreaChargeToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaChargeToUsers_B_index" ON "_AreaChargeToUsers"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_chargeId_fkey" FOREIGN KEY ("chargeId") REFERENCES "Charge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaChargeToUsers" ADD CONSTRAINT "_AreaChargeToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "AreaCharge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaChargeToUsers" ADD CONSTRAINT "_AreaChargeToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
