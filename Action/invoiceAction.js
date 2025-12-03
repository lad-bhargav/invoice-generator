'use server';
import { invoiceTable } from "@/db/Schema";
import { db } from "..";
import {eq,or} from "drizzle-orm";

export const insertInvoice = async (data) => {
    try{
        const result = await db.insert(invoiceTable).values(data);
        return true;
    }catch(err){
        console.log("Error inserting invoice:", err);
        return false;
    }
}

export const getInvoicesByUserId = async(email) => {
    try{
        const res = await db.select().from(invoiceTable).where(eq(invoiceTable.user_email,email))
        if(res.length > 0)return res;
        return [];
    }catch(err){
        console.log(err);
    }
}

export const getSingleInvoice = async(id) => {
    try{
        const res = await db.select().from(invoiceTable).where(eq(invoiceTable.id,id));
        return res[0] ?? null;
    }catch(err){
        console.log(err);
        return null;
    }
}