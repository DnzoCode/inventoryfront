import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "openSidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openOrCloseSidebar: (state) => {
      if (state.isOpen) state.isOpen = false;
      else state.isOpen = true;
    },
  },
});

export const { openOrCloseSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
