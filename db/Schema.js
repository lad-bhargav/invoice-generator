// app/db/Schema.js
import { integer, pgTable, varchar, date, jsonb } from "drizzle-orm/pg-core";
import { neon } from "@neondatabase/serverless";

// Server-side Neon connection
export const sql = neon(process.env.DATABASE_URL);

// Invoice table
export const invoiceTable = pgTable("invoices", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  client_name: varchar("client_name").notNull(),
  user_email: varchar("user_email").notNull(),
  client_mail: varchar("client_mail").notNull(),
  client_address: varchar("client_address").notNull(),
  start_date: date("start_date").notNull(),
  last_date: date("last_date").notNull(),
  items: jsonb("items").notNull(),
});
