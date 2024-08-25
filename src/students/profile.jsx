import React from 'react'
import Navbar from '../components/navbar'
import dp from '../assets/photo.jpg'
export default function Profile() {
  return (
    <div>
      <Navbar/>
        <img src={dp} alt='DP' className='w-80 h-80 rounded-full mx-auto mt-10'/>
    </div>
  )
}
