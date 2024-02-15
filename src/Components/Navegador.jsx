import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import mascara from '../assets/img/mascara.png'


function Navegador() {
  return (
    
    <Navbar expand="lg" className="estiloNav">
      <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={mascara}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to='/' className='estiloLink'>Inicio</Link>
            <Link to='/contact' className='estiloLink' >Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;