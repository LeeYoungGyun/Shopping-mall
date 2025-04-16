import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
   background: ${ props => props.bg};
   color: black;
   padding: 10px;
`;

const DetailPage = (props) => {
   let {id} = useParams();
   console.log(id);
   let findItem = props.shoes.find((item) => item.id === Number(id));

   return (
      <div className="container">
         <YellowBtn bg="blue">버튼</YellowBtn>
      <div className="row">
         <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
         </div>
         <div className="col-md-6">
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