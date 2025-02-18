import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import backgroundImg from './assets/뽀로로.jpeg';

function App() {

  return (
    <div className='App'>
      <Navbar bg="primary" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={backgroundImg} alt="뽀로로" className="img-fluid" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">안녕</div>
          <div className="col-md-4">안녕</div>
        </div>
      </div> 
    </div>




  )
}

export default App
