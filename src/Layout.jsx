import React from 'react'
import HeadFoot from './components/HeadFoot'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div>
      <HeadFoot/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
