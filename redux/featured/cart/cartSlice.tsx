// import { RootState } from "@/redux/store";
// import { createSlice } from "@reduxjs/toolkit";

// export interface ICartItem {
//   productId: string;
//   productName: string;
//   productImage: string;
//   unitPrice: number;
//   quantity: number;
//   color?: string;
//   size?: string;
//   totalAmount: number;
// }

// interface ICartState {
//   items: ICartItem[];
//   totalItems: number;
//   totalAmount: number;
// }


// const initialState :ICartState = {
//     items: [],
//     totalItems : 0,
//     totalAmount :0
// }

// const cartSlice = createSlice({
//     name : "cart",
//     initialState,
//     reducers : {}
// })


// export const {} = cartSlice.actions;

// //selectors 
// const selectCartItems = (state : RootState) => state.cart.items;
// const selectTotalItems = (state : RootState) => state.cart.totalItems;
// const selectTotalAmount = (state : RootState) => state.cart.totalAmount;
// export default cartSlice.reducer;