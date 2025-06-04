/*
  Warnings:

  - You are about to drop the column `industryId` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `models` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `vehicles` table. All the data in the column will be lost.
  - You are about to drop the column `modelId` on the `vehicles` table. All the data in the column will be lost.
  - Added the required column `industry_id` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand_id` to the `models` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_id` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_industryId_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_companyId_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "models" DROP CONSTRAINT "models_brandId_fkey";

-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_companyId_fkey";

-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_modelId_fkey";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "industryId",
ADD COLUMN     "industry_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "companyId",
ADD COLUMN     "company_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "employeeId",
ADD COLUMN     "employee_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "models" DROP COLUMN "brandId",
ADD COLUMN     "brand_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "companyId",
DROP COLUMN "modelId",
ADD COLUMN     "company_id" INTEGER NOT NULL,
ADD COLUMN     "model_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "industries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
