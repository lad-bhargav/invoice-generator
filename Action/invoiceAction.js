'use server'
import { invoiceTable } from "@/db/Schema";
import { db } from "..";
import { eq } from "drizzle-orm";

export const insertInvoice = async (data) => {
  try {
    await db.insert(invoiceTable).values({
      ...data,
      items: JSON.stringify(data.items), // convert items array to JSONB
    });
    return true;
  } catch (err) {
    console.log("Error inserting invoice:", err);
    return false;
  }
}

export const getInvoicesByUserId = async (email) => {
  try {
    const res = await db.select().from(invoiceTable).where(eq(invoiceTable.user_email, email));
    return res.length > 0 ? res : [];
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const getSingleInvoice = async (id) => {
  try {
    const res = await db.select().from(invoiceTable).where(eq(invoiceTable.id,id));
    return res[0] ?? null;
  } catch (err) {
    console.log(err);
    return null;
  }
}
