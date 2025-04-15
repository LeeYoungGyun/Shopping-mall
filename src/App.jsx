import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainPage  from './component/MainPage';
import DetailPage from './component/DetailPage';
import About from './component/About';
import Event from './component/Event';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  let navigate = useNavigate();  

  return (
    <div className='App'>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>홈</Link>
            <Link to='/detail' style={{ marginLeft: '20px'}} >상세페이지</Link>
            <Nav.Link onClick={ ()=> {navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <MainPage />}/>
        <Route path="/detail" element={ <DetailPage /> } />
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <div>멤버 소개</div> } />
          <Route path="location" element={ <div>위치 정보</div> } />
        </Route>
        <Route path="/event" element={ <Event /> }>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>
        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
    </div>




  )
}

export default App
