import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MenuBar from './MenuBar'
import Info from './Info'
import Courses from './Courses'
import Registration from './Registration'
import Contact from './Contact'

function App() {
  return (
  <>
  
    <MenuBar />

    <Info />

    <Courses />
  
    <Registration />

    <Contact />

  </>)
}

export default App
