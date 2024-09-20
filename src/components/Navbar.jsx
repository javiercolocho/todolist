import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MiNavbar() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Programador</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Creado por: <a href="#login">Javier Colocho</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MiNavbar;