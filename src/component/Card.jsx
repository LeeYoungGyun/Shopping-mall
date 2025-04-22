import { useNavigate } from 'react-router-dom';


const Card = (props) => {
   const navigate = useNavigate();
   
   const goDetail = () => {
      navigate(`/detail/${props.shoes.id}`);
   };

   return (
      <div className='col-md-4' onClick={goDetail} style={{ cursor: 'pointer' }}>
         <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
         <h4>{props.shoes.title}</h4>
         <p>{props.shoes.content}</p>
         <p>{props.shoes.price}</p>
      </div>
   );
};

export default Card;