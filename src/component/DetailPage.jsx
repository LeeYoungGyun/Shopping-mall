import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
   background: ${ props => props.bg};
   color: black;
   padding: 10px;
`;

const DetailPage = (props) => {

   let [closeDiv, setCloseDiv] = useState(false);
   let [value, setValue] = useState('');

   useEffect(() => {
      if (isNaN(value) === true) {
         alert('숫자만 입력 가능합니다.');
         return;
      }
      setTimeout(() => {
         setCloseDiv(true);
      }, 2000);
   }, [value]);



   let {id} = useParams();
   let findItem = props.shoes.find((item) => item.id === Number(id));

   const inputValue = (e) => {
      setValue(e.target.value);
     
      console.log(value);
   };

   return (
      <div className="container">
         {closeDiv ?
         null :
            <div className="alert alert-warning">
               2초이내 구매시 할인
            </div>
         }
         <YellowBtn bg="blue">버튼</YellowBtn>
      <div className="row">
         <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
         </div>
         <div className="col-md-6">
            {/* <input type="number"></input> */}
            <input type="text" onChange={inputValue}></input>
            <h4 className="pt-5">{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}</p>
            <button className="btn btn-danger">주문하기</button> 
         </div>
      </div>
      </div>
   )
};

export default DetailPage;