import { configureStore, createSlice} from '@reduxjs/toolkit';
import user from './store/userSlice.js';

let cart = createSlice({
   name: 'cart',
   initialState:  [
         {id: 0, name : 'White and Black', count : 2},
         {id: 1, name : 'Grey Yordan', count : 3}
      ],
   reducers: {
      increasQuantity(state, action) {
         const id = action.payload.id;
         const stateId = state.find((item) => item.id === id);
         if(stateId) {
            stateId.count += 1;
         }
         console.log('store state===', state);
         console.log('store action===', action);
         
      }
   }
})

export let { increasQuantity } = cart.actions

export default configureStore({
   reducer: {
      user : user.reducer,
      cart : cart.reducer
   }
})