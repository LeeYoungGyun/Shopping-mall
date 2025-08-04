import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { addCartItem } from '../store'

let YellowBtn = styled.button`
   background: ${ props => props.bg};
   color: black;
   padding: 10px;
`;

const DetailPage = (props) => {
   let [closeDiv, setCloseDiv] = useState(false);
   let [value, setValue] = useState('');
   let [tab, setTab] = useState(0);
   let [fade2, setFade2] = useState('');
   
   let dispatch = useDispatch();
   let {id} = useParams();
   let findItem = props.shoes.find((item) => item.id === Number(id));

   useEffect(() => {
      if (isNaN(value) === true) {
         alert('숫자만 입력 가능합니다.');
         return;
      }
      setTimeout(() => {
         setCloseDiv(true);
      }, 2000);
   }, [value]);

   useEffect(() => {
      const watched = JSON.parse(localStorage.getItem('watched')) || [];
      const newWatched = [...new Set([...watched, findItem.id])];
      localStorage.setItem('watched', JSON.stringify(newWatched));
   }, [findItem.id]);

   useEffect(() => {
      setTimeout(() => {
         setFade2('end');
      }, 100);
      return () => {
         setFade2('');
      }
   }, []);

   const inputValue = (e) => {
      setValue(e.target.value);
   };

   const goCart = () => {
      dispatch(addCartItem(findItem));
   };

   return (
      <div className={`container start ${fade2}`}>
         
         {closeDiv ?
         null :
            <div className="alert alert-warning">
               2초이내 구매시 할인
            </div>
         }
         <YellowBtn bg="blue">버튼</YellowBtn>
         <div className="row">
            <div className="col-md-6">
               <img src={`https://codingapple1.github.io/shop/shoes${findItem.id + 1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6">
               <input type="text" onChange={inputValue}></input>
               <h4 className="pt-5">{findItem.title}</h4>
               <p>{findItem.content}</p>
               <p>{findItem.price}</p>
               <button className="btn btn-danger" onClick={goCart}>주문하기</button>
            </div>
         </div>
         <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
               <Nav.Link onClick={() => { setTab(0) }}  eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
         </Nav>
         <Tabs tab={tab}></Tabs>
      </div>
   )
};

const Tabs = (props) => {
   let [fade, setFade] = useState('');

   useEffect(() => {
      setTimeout(() => {
         setFade('end'); 
      }, 100);
      return () => {
         setFade('');
      }
   }, [props.tab]);

   return (
      <div className={`start ${fade}`}>
         {props.tab === 0 && <div>내용0</div>}
         {props.tab === 1 && <div>내용1</div>}
         {props.tab === 2 && <div>내용2</div>}
      </div>
   );
};

export default DetailPage;