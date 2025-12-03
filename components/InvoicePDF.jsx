'use client'
import React, { forwardRef } from "react";

const InvoicePDF = forwardRef((
  { id, user_mail, client_name, client_mail, client_address, start_date, last_date, products, totalprice },
  ref
) => {
  return (
    <div ref={ref} className="h-full w-[65%] bg-white text-black p-5 shadow-lg rounded-xl">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Invoice #{id}</h1>
        <div className="text-sm">
          <p>Invoice Date: {start_date}</p>
          <p>Due Date: {last_date}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Bill From: {user_mail}</h2>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Bill To: {client_name}, {client_mail}</h2>
        <p>{client_address}</p>
      </div>

      <table className="w-full border mt-5 border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Product Name</th>
            <th className="border border-black p-2">Quantity</th>
            <th className="border border-black p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td className="border border-black p-2">{product.name}</td>
              <td className="border border-black p-2">{product.qty}</td>
              <td className="border border-black p-2">₹{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5">
        <p className="text-xl font-bold">Grand Total: ₹{totalprice}</p>
        <p>Thanks for your business!</p>
      </div>
    </div>
  );
});

export default InvoicePDF;
