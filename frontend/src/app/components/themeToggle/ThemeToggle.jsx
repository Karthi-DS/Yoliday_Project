"use client";

import React, { useContext, useEffect, useState } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/app/context/AuthContext';


const ThemeToggle = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  useEffect(()=>{
    localStorage.setItem("theme",theme)
  })
  const toggleTheme = () =>{
    setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
  }
  return (
    <div className={styles.container} style={theme==="dark"?{backgroundColor:"#0f172a"}:{backgroundColor:"whitesmoke"}} onClick={()=>toggleTheme()}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={theme==="dark"?styles.ball2:styles.ball1} ></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
      </div>
  )
}

export default ThemeToggle
