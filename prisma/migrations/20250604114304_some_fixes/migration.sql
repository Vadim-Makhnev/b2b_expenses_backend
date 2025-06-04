/*
  Warnings:

  - You are about to drop the column `employeeId` on the `vehicles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employee_id]` on the table `vehicles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employee_id` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_employeeId_fkey";

-- DropIndex
DROP INDEX "vehicles_employeeId_key";

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "employeeId",
ADD COLUMN     "employee_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_employee_id_key" ON "vehicles"("employee_id");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
