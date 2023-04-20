import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.scss'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Description from './components/Description/Description'
import Who from './components/Who/Who'
import FAQ from './components/FAQ/FAQ'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Description />
        <Who />
        <FAQ />
      </BrowserRouter>
    </div>
  )
}

export default App
