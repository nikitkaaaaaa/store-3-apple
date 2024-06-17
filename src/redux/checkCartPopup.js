import { createSlice } from "@reduxjs/toolkit";

export const checkCartPopup = createSlice({
  name: "checkCartPopup",
  initialState: {
    checkCartPopup: false,
  },
  reducers: {
    openCartPopup: (state) => {
      state.checkCartPopup = true;
    },
    closeCartPopup: (state) => {
      state.checkCartPopup = false;
    },
  },
});
export default checkCartPopup.reducer;
export const { openCartPopup, closeCartPopup } = checkCartPopup.actions;
