import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-h-screen max-w-screen flex flex-col'>
        <div className="head h-[80%] w-full">
            <div className='h-[40%] w-full flex justify-center items-end'><h1 className='text-7xl font-bold'>Create Professional</h1>
            </div>
            <div className='h[10%] w-full flex justify-center items-center'>
              <h1 className='text-7xl font-bold mt-2'>Invoice Instantly</h1>
            </div>
            <div className='h-[20%] w-full mt-7 flex justify-center items-center'>
              <Link href='/createinvoice'><Button className='cursor-pointer h-12 text-lg bg-green-700 hover:bg-green-800'>Generate Invoice Now</Button></Link>
            </div>
            <div className='h-[30%] w-full mt-5'>
              <Image src='/images/screen.png' width={400} height={400} alt='heroimage' className='mx-auto rounded-t-md'/>  
            </div>
        </div>
        <div className='bottom h-[20%] w-full bg-white'>

        </div>
    </div>
  )
}

export default page
