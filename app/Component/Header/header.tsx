"use client"
import React from 'react'
import Menuitems from './Menuitem'
import { IoIosMenu } from 'react-icons/io'
import { useState } from 'react'

const header = () => {
  const [show,setshow]=useState(false)
             
  const handle=()=>{
    setshow(!show)
  }
  return (
    <div>
       <div onClick={handle} className=" md:hidden ml-10 mt-14 cursor-pointer ">
          <IoIosMenu size={25} />
          </div>
    <div className={`${show? 'flex' :' hidden'}  flex-col w-[400px] md:flex md:flex-row mt-10 md:w-[70%] mx-auto gap-10 border-grey border-b-[2px]`} >
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
