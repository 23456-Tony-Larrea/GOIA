-- CreateTable
CREATE TABLE "AsignatureProjects" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishDate" TIMESTAMP(3) NOT NULL,
    "projectId" INTEGER,
    "userId" INTEGER,
    "areaChargeId" INTEGER NOT NULL,

    CONSTRAINT "AsignatureProjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AsignatureProjects" ADD CONSTRAINT "AsignatureProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignatureProjects" ADD CONSTRAINT "AsignatureProjects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignatureProjects" ADD CONSTRAINT "AsignatureProjects_areaChargeId_fkey" FOREIGN KEY ("areaChargeId") REFERENCES "AreaCharge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
