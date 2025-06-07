/*
  Warnings:

  - A unique constraint covering the columns `[inn]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `inn` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "inn" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "companies_inn_key" ON "companies"("inn");
