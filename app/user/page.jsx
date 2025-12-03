'use client';
import { useCurrentUser } from '@/hook/userhook';
import React from 'react'

const page = () => {
    const {fullname,imageURL,email} = useCurrentUser();
  return (
    <div>
      {fullname}
      {email}
      {/* <img src={imageURL} alt='no image loaded'/> */}
    </div>
  )
}

export default page
