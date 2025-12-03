'use client'
import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'next/navigation';
import { useReactToPrint } from "react-to-print";
import { Download } from "lucide-react";
import InvoicePDF from "@/components/InvoicePDF";
import { getSingleInvoice } from "@/Action/invoiceAction";

const Page = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const printRef = useRef(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      const data = await getSingleInvoice(Number(id));
      setInvoice(data);
    };
    fetchInvoice();
  }, [id]);

  // Updated hook usage: Use contentRef instead of content
  const handlePrint = useReactToPrint({
    contentRef: printRef,  // Directly pass the ref
    documentTitle: invoice ? `invoice_${invoice.id}` : "invoice",
         pageStyle: `
       @page {
         size: A1;  /* Changed from invalid '100vh' to 'A1' for a very large page (largest standard size). Alternatives: 'A2' for slightly smaller, or '24in 36in' for custom ultra-large. */
         margin: 20mm;  /* Kept your existing margin */
       }
       body {
         margin: 0;
         display: flex;
         justify-content: center;  /* Centers horizontally */
         align-items: center;       /* Centers vertically */
         min-height: 100vh;         /* Ensures full page height for centering */
         font-family: Arial, sans-serif;  /* Optional: Improves readability in PDF */
       }
     `,
  });

  if (!invoice) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center max-h-screen max-w-screen">
      {/* Invoice Component */}
      <InvoicePDF
        ref={printRef}   // <-- This remains unchanged
        key={invoice.id}
        id={invoice.id}
        user_mail={invoice.user_email}
        client_name={invoice.client_name}
        client_mail={invoice.client_mail}
        client_address={invoice.client_address}
        start_date={invoice.start_date}
        last_date={invoice.last_date}
        products={invoice.items}
        totalprice={invoice.items.reduce((sum, i) => sum + Number(i.qty) * Number(i.price), 0)}
      />

      {/* Print / Download Button */}
      <div className="mt-5">
        <button
          onClick={handlePrint}
          className="w-40 h-10 flex cursor-pointer items-center justify-center bg-[#313647] text-white rounded-lg"
        >
          <Download size={20} className="mr-2" /> Download PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
