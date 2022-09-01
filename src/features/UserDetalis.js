import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      names: "",
      price: 0,
      userData:null
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      console.log(action.payload
        );
    },
    sentItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {login, sentItem} = userSlice.actions
export default userSlice.reducer;
