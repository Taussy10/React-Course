// Redux is pizza and Store is slice of pizza

import CartSlice from "./CartSlice";

// 1. Congig the store
import { configureStore } from "@reduxjs/toolkit";


//  2. just store slices in store{pizza} stored in reducer cause it's compulsory               
export const store = configureStore({
reducer: {
  cart: CartSlice
},

})


