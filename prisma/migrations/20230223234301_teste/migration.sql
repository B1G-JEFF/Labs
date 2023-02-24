/*
  Warnings:

  - Added the required column `date` to the `Reserve` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reserve" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" INTEGER NOT NULL,
    "entryTime" INTEGER NOT NULL,
    "exitTime" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "labId" TEXT NOT NULL,
    CONSTRAINT "Reserve_labId_fkey" FOREIGN KEY ("labId") REFERENCES "Labs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserve_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserve" ("entryTime", "exitTime", "id", "labId", "userId") SELECT "entryTime", "exitTime", "id", "labId", "userId" FROM "Reserve";
DROP TABLE "Reserve";
ALTER TABLE "new_Reserve" RENAME TO "Reserve";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
