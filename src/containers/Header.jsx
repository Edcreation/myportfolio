import React from 'react'
import './css/header.css'
import { Intro } from '../components'
import { Aboutme } from '.'
function Header() {
  return (
    <div className="header">
    <Intro/>
    <Aboutme/>
    </div>
  )
}

export default Header