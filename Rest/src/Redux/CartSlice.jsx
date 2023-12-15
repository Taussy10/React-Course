// This file for writing reducers

// Reducers: function{method} that do some task such as adding , removing ....

import { createSlice } from "@reduxjs/toolkit";

//Create slice method takes an object and contains createSlice Name , IntialState, Reducers

const cartSlice = createSlice({
name: "Cart",
// intialState has empty array that will take values of reducers in form of object
initialState: {
  cart:[]
},

// made an object that will contain reducers
 //Reducers has two parameters state{sate of addToCart which can be anything{if i click on addToCart then increases}} , actions{action to do in cart{see intailState} here we are adding data to cart}
 
reducers:{   
 // why callBack function cause it work like a button{adding something{payload = data} to cart}
  // data = payload
  addToCart: (state, action) => {
// state.cart{state of cart{see intialState}.push{for adding something and we are adding payload = data by action method} }
  state.cart.push(action.payload) }, 
  

  // 
// We made the new varialbe(state.cart) that has filtered data we have to store new data like this otherwise data will  updated and didint' store anywehre so we can't acess it so we store in state of cart and you should know about filter method   
removeFromCart:(state,action)=>{
state.cart = state.cart.filter((item) => item.id !== action.payload.id)
}}}); 


export const {addToCart,removeFromCart} = cartSlice.actions; 
export default cartSlice.reducer;



































// Imagine we added something to cart now we need to remove that and how {if i click and it matches with the id that i click remove{filter}in this code data  } 
// jiss ki id match nhi kr rhi usko chhor ke sab dikhayega