import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    user : null,
  };

  const userSlice1 = createSlice({
    name: "user",
    initialState,
    reducers: {
      addUser(state, action) {
        state.user = action.payload;
      },
        removeUser(state) {
        state.user = null;
        },
    },
  });

    export const { 
        addUser,
        removeUser
     } = userSlice1.actions;
    export default userSlice1.reducer;