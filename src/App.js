import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.scss'
import NavBar from './components/NavBar/NavBar'

import { Home } from './containers/Home'
import { Products } from './components/Products/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<NavBar />}>
            <Route
              index
              element={<Home />}
            />
            <Route
              path='/products'
              element={<Products />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
