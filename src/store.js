import { configureStore,createSlice } from "@reduxjs/toolkit";
import user from './redux/user'



export default configureStore({
  reducer:{
    user:user.reducer
  }
})