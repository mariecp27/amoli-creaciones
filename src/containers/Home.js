import React from 'react'
import WhatsApp from '../components/WhatsApp/WhatsApp'
import Banner from '../components/Banner/Banner'
import Description from '../components/Description/Description'
import Who from '../components/Who/Who'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

export const Home = () => {
  return (
    <>
      <WhatsApp />
      <Banner />
      <Description />
      <Who />
      <FAQ />
      <Footer />
    </>
  )
}
