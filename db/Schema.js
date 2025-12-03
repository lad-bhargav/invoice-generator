import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { date } from "drizzle-orm/pg-core";
import { jsonb } from "drizzle-orm/pg-core";

export const invoiceTable = pgTable("invoices", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  client_name: varchar("client_name").notNull(),
  user_email:varchar("user_email").notNull(),
  client_mail : varchar("client_mail").notNull(),
  client_address: varchar("client_address").notNull(),
  start_date:date("start_date").notNull(),
  last_date:date("last_date").notNull(),
  items:jsonb("items").notNull(),
});





  // userId: integer().notNull().
  // references(()=>usersTable.id,{onDelete:"cascade"}),