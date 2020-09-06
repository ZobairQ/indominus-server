import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    fetchUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {fetchUser}  = userSlice.actions;
export default userSlice.reducer;
