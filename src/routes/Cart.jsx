import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from './../store/userSlice';
import { increasQuantity, decreaseQuantity, removeCartItem } from '../store';

const Cart = () => {
   const state = useSelector((state) => state);
   const dispatch = useDispatch();

   const increase = (item) => {
      dispatch(changeName());
      dispatch(increasQuantity(item));
   };

   const decrease = (item) => {
      dispatch(changeName());
      dispatch(decreaseQuantity(item));
   };

   const removeItem = (item) => {
      dispatch(removeCartItem(item));
   };

   const plusAge = () => {
      dispatch(increaseAge(100));
   };

   return (
      <div>
         <h6>{state.user.name}의 장바구니</h6>
         <h6>{state.user.age}</h6>
         <button onClick={plusAge}>버튼</button>
         <Table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                  <th>삭제하기</th>
               </tr>
            </thead>
            <tbody>
               {state.cart.map((item, i) => (
                  <tr key={i}>
                     <td>{item.id}</td>
                     <td>{item.title}</td>
                     <td>{item.count}</td>
                     <td>
                        <button onClick={() => increase(item)}>+</button>
                        <button onClick={() => decrease(item)}>-</button>
                     </td>
                     <td>
                        <button onClick={() => removeItem(item)}>삭제</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table> 
      </div>
   );
};

export default Cart;