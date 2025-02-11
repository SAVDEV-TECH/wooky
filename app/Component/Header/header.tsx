"use client"
import React from 'react'
import Menuitems from './Menuitem'
const header = () => {
  return (
    <div>
       
    <div className='flex mt-10 w-[70%] mx-auto gap-10 border-grey border-b-[2px]' >
        <Menuitems    title="Privacy Policy" address="/"></Menuitems>
        <Menuitems title="Cookies" address="/Component/cookies"></Menuitems>
        <Menuitems title="Terms of service" address="/Component/terms"></Menuitems>
        <Menuitems title="Data storage" address="/Component/dataStorage"></Menuitems>
        <Menuitems title="License" address="/Component/Licence"></Menuitems>
      
    </div>
    </div>
  )
}

export default header
