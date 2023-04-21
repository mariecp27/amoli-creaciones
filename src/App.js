import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.scss'
import WhatsApp from './components/WhatsApp/WhatsApp'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Description from './components/Description/Description'
import Who from './components/Who/Who'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <WhatsApp />
        <NavBar />
        <Banner />
        <Description />
        <Who />
        <FAQ />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
