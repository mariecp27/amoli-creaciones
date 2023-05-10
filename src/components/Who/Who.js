import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Who = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div
      className='who'
      id='who-are-we'>
      <div
        className='who__body'
        data-aos='fade-up'>
        <h3>¿Quiénes somos?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue
          ligula et ante fermentum vehicula. Sed elementum, est id ullamcorper
          efficitur, turpis augue sodales lorem, et sollicitudin mauris augue ut
          erat. Pellentesque et elit ligula. Donec elementum rutrum enim id
          gravida. In quis consectetur sapien. Proin quis urna non odio mollis
          pharetra et a urna. In laoreet molestie consequat. Nunc quis aliquam
          libero. Nunc tempor lectus et vestibulum porta. Ut in elit rutrum,
          tristique risus vel, ultrices sem.
        </p>
      </div>
    </div>
  )
}

export default Who
