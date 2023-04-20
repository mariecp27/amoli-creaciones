import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ANavBar = () => {
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className='mb-3 navbar'
          id="home">
          <Container fluid>
            <Link to="#home">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/full-logo.png'}
                alt='Logo'
                className='navbar__logo'
              />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='start'>
              <Offcanvas.Header
                closeButton
                closeVariant='white'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ¡Bienvenido!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#home'>Inicio</Nav.Link>
                  <Nav.Link href='#'>Productos</Nav.Link>
                  <Nav.Link href='#who-are-we'>¿Quiénes somos?</Nav.Link>
                  <Nav.Link href='#faq'>Preguntas frecuentes</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default ANavBar
