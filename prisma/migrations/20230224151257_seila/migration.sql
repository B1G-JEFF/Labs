/*
  Warnings:

  - You are about to alter the column `date` on the `Reserve` table. The data in that column could be lost. The data in that column will be cast from `Int` to `DateTime`.
  - You are about to alter the column `entryTime` on the `Reserve` table. The data in that column could be lost. The data in that column will be cast from `Int` to `DateTime`.
  - You are about to alter the column `exitTime` on the `Reserve` table. The data in that column could be lost. The data in that column will be cast from `Int` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reserve" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "entryTime" DATETIME NOT NULL,
    "exitTime" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "labId" TEXT NOT NULL,
    CONSTRAINT "Reserve_labId_fkey" FOREIGN KEY ("labId") REFERENCES "Labs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserve_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserve" ("date", "entryTime", "exitTime", "id", "labId", "userId") SELECT "date", "entryTime", "exitTime", "id", "labId", "userId" FROM "Reserve";
DROP TABLE "Reserve";
ALTER TABLE "new_Reserve" RENAME TO "Reserve";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
