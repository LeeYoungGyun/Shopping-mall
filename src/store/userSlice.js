import { createSlice} from '@reduxjs/toolkit';

let user = createSlice({
   name: 'user',
   initialState: { name : 'kim', age : 20 },
   reducers: {
      // 함수 작성
      changeName(state){
         state.name = 'park'
      },
      // 나이 +1 함수
      increaseAge(state, action){
         console.log('state===', state)
         state.age += action.payload
      }
   }
})

export let { changeName, increaseAge } = user.actions

export default user