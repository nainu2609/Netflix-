import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
  },
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
    },
    removeUser: (state, action) => {
      // Reset to the initial state to clear user data
      return {
        data: null,
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
