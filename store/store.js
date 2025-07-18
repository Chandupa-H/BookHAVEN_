import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
