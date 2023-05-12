'use client'
import styles from './page.module.css'
import NavBar from './components/NavBar'
import { Hero } from './components/Hero'
import { ProjectScope } from './components/ProjectScope'
import { CompanyProfile } from './components/CompanyProfile'
import { useState } from 'react'
import { SmallMenu } from './components/SmallMenu'

export default function Home() {

  const [ toggleMenu,setToggle ] = useState(false)

  const handleClose = ()=>{
    setToggle(false)
  }

  const handleShow = ()=>{
    setToggle(true)
  }

  return (
    <main className={styles.main}>
        <NavBar handleShow={handleShow} />
        <Hero />
        <ProjectScope />
        <CompanyProfile />
        { toggleMenu && <SmallMenu handleClose={handleClose} /> }
    </main>
  )
}
