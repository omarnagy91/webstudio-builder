-- CreateEnum
CREATE TYPE "BuildStatus" AS ENUM ('created', 'started', 'done', 'failed');

-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "stateUpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "BuildStatus" NOT NULL DEFAULT 'created';
