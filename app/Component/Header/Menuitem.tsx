"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 interface props{
title:string,
address:string,
 }
 
function Menuitems({title,address}:props) {
  const pathname=usePathname()
  // const IsActive = pathname.startsWith(address)  
  const IsActive  = pathname === address ||
   (address !== '/' && pathname.startsWith(address));
 

  return (
    <div className=' '>
      <Link className={`${IsActive ? ("active"):''} text-[14px]`} href={address}>{title}</Link>
      
    </div>
  )
}

export default Menuitems 