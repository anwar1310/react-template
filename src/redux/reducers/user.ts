import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: "Anwar Shaikh",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserName } = userSlice.actions;

export default userSlice.reducer;
