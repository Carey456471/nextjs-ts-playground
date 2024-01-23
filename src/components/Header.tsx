"use client"

import React from 'react'
import Logo from '@/components/Logo'
import Menu from "@/components/Menu"

const Header = (props : any) => {
  return (
    <header className='bg-red-300'>This is my header {props.name}
    <Logo/> <Menu/></header>
  )
}

export default Header
