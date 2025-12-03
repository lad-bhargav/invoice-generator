'use client'
import React, { useEffect, useState } from 'react'
import { getInvoicesByUserId } from '@/Action/invoiceAction';
import { useCurrentUser } from '@/hook/userhook';
import HistoryCard from '@/components/HistoryCard';

const Page = () => {
  const { email } = useCurrentUser();
  const [userInvoices, setUserInvoices] = useState([]);

  useEffect(() => {
    if (email) {
      getAllUserInvoices();
    }
  }, [email]);

  const getAllUserInvoices = async () => {
    const invoices = await getInvoicesByUserId(email);
    setUserInvoices(Array.isArray(invoices) ? invoices : []);
  };

  return (
    <div className='max-h-screen max-w-screen flex '>
      {Array.isArray(userInvoices) && userInvoices.length > 0 ? (
        userInvoices.map((invoice,idx) => (

          <HistoryCard
            key={invoice.id}
            client_mail={invoice.client_mail}
            price={invoice.items.reduce((sum, i) => sum + Number(i.qty) * Number(i.price), 0)}
            client_name={invoice.client_name}
            index={idx + 1}
            id={invoice.id}
          />
        ))
      ) : (
        <div>Empty History</div>
      )}
    </div>
  );
};

export default Page;
