import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card  from './component/Card.jsx';
import DetailPage from './component/DetailPage';
import About from './component/About';
import Event from './component/Event';
import data from './data.js';
import Cart from './routes/Cart.jsx';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [loading, setLoading] = useState(false);
  let [shoes, setShoes]  = useState(data);
  let [count, setCount] = useState(0);

 const productInfo = () => {
    setLoading(true);
    axios.get('https://codingapple1.github.io/shop/data2.json').then((data) => {
       setShoes((prevShoes) => [...prevShoes, ...data.data]);
       setLoading(false); // 로딩 상태를 초기화
    }).catch((err) => {
      console.log('에러 발생:', err);
      setLoading(false); // 로딩 상태를 초기화
    })
 };

 const secondProductInfo = () => {
    setLoading(true);
    axios.get('https://codingapple1.github.io/shop/data3.json').then((data) => {
      setShoes((prevShoes) => [...prevShoes, ...data.data]);
      setLoading(false); // 로딩 상태를 초기화
  }).catch((err) => {
    console.log('에러 발생:', err);
    setLoading(false); // 로딩 상태를 초기화
  })
 };

 const moreProductInfo = () => {
  if (count === 0) {
    productInfo();
    setCount((prev) => {
      return prev + 1;
    });
  } else if (count === 1) {
    secondProductInfo();
    setCount((prev) => {
      return prev + 1;
    });
  } else if (count > 1) {
    alert('더이상 상품이 없습니다.');
  }
 };

  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>홈</Link>
            <Link to='/detail' style={{ marginLeft: '20px'}} >상세페이지</Link>
            <Nav.Link onClick={ ()=> {navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element= {
          <>
            <div className='main-bg'></div>
            <div className="container-fluid">
              <div className='row'>
                { shoes.map((item, index) =>{
                  return (<Card shoes={shoes[index]} i={index} key={index}></Card>)
                })} 
              </div>
            </div>
            {count < 2 ? <button onClick={moreProductInfo}>더보기</button> : null}
            {loading && (
            <div className="d-flex justify-content-center mt-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          </>
        }
        />
        <Route path="/detail/:id" element={ <DetailPage shoes={shoes} /> } />
        <Route path="/cart" element={ <Cart shoes={shoes} /> } />
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
