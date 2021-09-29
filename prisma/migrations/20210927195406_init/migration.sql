/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Data";

-- CreateTable
CREATE TABLE "Values" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Values_pkey" PRIMARY KEY ("id")
);
