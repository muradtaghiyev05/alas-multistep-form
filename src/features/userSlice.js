import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      phone: "",
      email: "",
      password: "",
      emailValid: false,
      phoneValid: false,
      passwordValid: false,
    },
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { info } = userSlice.actions;
export default userSlice.reducer;
