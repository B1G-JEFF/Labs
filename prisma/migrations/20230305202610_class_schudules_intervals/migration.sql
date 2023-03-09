/*
  Warnings:

  - Added the required column `intervals` to the `ClassSchudules` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClassSchudules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schudules" TEXT NOT NULL,
    "intervals" TEXT NOT NULL
);
INSERT INTO "new_ClassSchudules" ("id", "schudules") SELECT "id", "schudules" FROM "ClassSchudules";
DROP TABLE "ClassSchudules";
ALTER TABLE "new_ClassSchudules" RENAME TO "ClassSchudules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
