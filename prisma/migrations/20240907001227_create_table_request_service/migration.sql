-- CreateTable
CREATE TABLE "request_service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tell" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "terms_accepted" BOOLEAN NOT NULL
);
