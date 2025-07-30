import { configureStore, createSlice} from '@reduxjs/toolkit';
import user from './store/userSlice.js';

let cart = createSlice({
   name: 'cart',
   initialState:  [
         {id: 99, title : 'White and Black', count : 2},
         {id: 100, title : 'Grey Yordan', count : 3}
      ],
   reducers: {
      increasQuantity(state, action) {
         const id = action.payload.id;
         const stateId = state.find((item) => item.id === id);
         if(stateId) {
            stateId.count += 1;
         }
      },
      decreaseQuantity(state, action) {
         const id = action.payload.id;
         const stateId = state.find((item) => item.id === id);
         if(stateId && stateId.count > 0) {
            stateId.count -= 1;
         }
      },
      addCartItem(state, action) {
         if (action.payload) {
            // 이미 존재하는 상품인지 확인
            const existingItem = state.find(item => item.id === action.payload.id);
            
            if (existingItem) {
               // 이미 있다면 count +1
               existingItem.count += 1;
            } else {
               // 없다면 새로 추가 (count 기본값 1)
               const newItem = {
                  ...action.payload,
                  count: action.payload.count || 1
               };
               state.push(newItem);
            }
         }
      },
      removeCartItem(state, action) {
         const id = action.payload.id;
         const index = state.findIndex(item => item.id === id);
         if (index !== -1) {
            state.splice(index, 1);
         }
      }
   }
})

export let { increasQuantity, decreaseQuantity, addCartItem, removeCartItem } = cart.actions

export default configureStore({
   reducer: {
      user : user.reducer,
      cart : cart.reducer
   }
})