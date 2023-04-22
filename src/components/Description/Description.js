import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Description = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div className='description'>
      <div data-aos='fade-up'>
        <p className='description__body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue
          ligula et ante fermentum vehicula. Sed elementum, est id ullamcorper
          efficitur, turpis augue sodales lorem, et sollicitudin mauris augue ut
          erat. Pellentesque et elit ligula. Donec elementum rutrum enim id
          gravida. In quis consectetur sapien. Proin quis urna non odio mollis
          pharetra et a urna. In laoreet molestie consequat. Nunc quis aliquam
          libero. Nunc tempor lectus et vestibulum porta. Ut in elit rutrum,
          tristique risus vel, ultrices sem.
        </p>
        <Link className='a-button'>Nuestros productos</Link>
      </div>
    </div>
  )
}

export default Description
