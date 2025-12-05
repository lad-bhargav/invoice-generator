
import React from 'react'
import { ExternalLink } from "lucide-react";
import Link from 'next/link';

const HistoryCard = ({client_mail,price,client_name,index,id}) => {
  return (
    <div className='h-20 shadow-lg ml-5 w-100 rounded-lg p-2 bg-white flex gap-5'>
        <p className='font-bold'>#{index} <Link href={`history/${id}`}><ExternalLink className='mt-1 cursor-pointer text-violet-800' size={16}/></Link></p>
      <div className='w-[50%] h-auto flex justify-center items-start flex-col'>
        <p className='text-md font-medium'>To : {client_name}</p>
        <p className='text-md font-medium'>Email : {client_mail}</p>
      </div>
      <div className='w-[50%] h-auto flex border border-l p-1 justify-center items-center'>
        <p className='text-md font-semibold'>Total Amount ₹{price}</p>
      </div>
    </div>
  )
}

export default HistoryCard
