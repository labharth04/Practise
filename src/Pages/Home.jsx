import React from 'react'
import Body from '../components/Body'
import '../index.css'

export default function Home() {
  return (
    <>
           <div class="image-container">
                <img src="https://altius-phi.vercel.app/_next/image?url=%2Fimages%2Fconnecting_india.webp&w=3840&q=75" alt="Description of image"></img>
                <div class="overlay-text">Connecting India</div>
            </div>
      <Body/>
    </>
  ) 
}
