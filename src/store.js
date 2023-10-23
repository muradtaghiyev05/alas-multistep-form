import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./features/pageSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
});

export default store;
