import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Read directly (not via env()) so `npm install` / `prisma generate`
    // still work before a .env file has been created.
    url: process.env.DATABASE_URL ?? "",
  },
});
