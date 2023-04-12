import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
