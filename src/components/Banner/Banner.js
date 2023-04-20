import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
      <img
        src={process.env.PUBLIC_URL + '/assets/images/background.svg'}
        alt='Waves'
        className='banner__waves'
      />
    </div>
  )
}

export default Banner
