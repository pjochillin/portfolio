"use client"

import Profile from '../components/profile'
import Description from '../components/description'
import Works from '../components/works'
import RotcModal from '../components/rotc-modal'
import CelloModal from '../components/cello-modal'
import Footer from "../components/footer"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
  const [isRotcOpen, setRotcOpen] = useState(false);
  
  const openRotcModal = () => {
      setRotcOpen(true);
  };
  
  const closeRotcModal = () => {
      setRotcOpen(false);
  };

  const [isCelloOpen, setCelloOpen] = useState(false);
  
  const openCelloModal = () => {
      setCelloOpen(true);
  };
  
  const closeCelloModal = () => {
      setCelloOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Josh Ochalek's Portfolio</title>
        <meta 
          name="description"
          content="Hello! I'm Josh, a first-year student at Cornell University. Check out my portfolio!"
        />
      </Head>
      <div className='z-50 relative'>
        { isRotcOpen && <RotcModal closeRotcModal={closeRotcModal} /> ||
          isCelloOpen && <CelloModal closeCelloModal={closeCelloModal} /> }
      </div>
      <div className='z-0 relative'> 
        <Profile />
      </div>
      <div className='z-10 relative'>
        <Description />
      </div>
      <div className='z-0 relative'>
        <Works openRotcModal={openRotcModal} openCelloModal={openCelloModal} />
      </div>
      <div className='z-0 relative'>
        <Footer />
      </div>
    </div>
  )
}
