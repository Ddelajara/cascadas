import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button, Stack } from 'react-bootstrap';


export const MenuNav = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary rounded-4 navbar-con-imagen-de-fondo" bg="dark" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home" >
                <img
                    src="/image/LogoAzul.jpeg" width="130"
                    className="d-inline-block align-top rounded-circle"
                    alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className="color_H1">Home</Nav.Link>
                    <Nav.Link href="/ListaProductos" className="color_H1">Casa Patronal</Nav.Link>
                    <Nav.Link href="/Acerca" className="text-black">Cabaña</Nav.Link>
                    <Nav.Link href="/Acerca" className="text-black">Mapa</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
    )
}
