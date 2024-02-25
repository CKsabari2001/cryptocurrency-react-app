import { createSlice } from "@reduxjs/toolkit";

interface sidebarSlice {
  value: boolean;
}
const initialState: sidebarSlice = {
  value: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    // toggleSidebar: (state) => {
    //   state.value = !state.value;
    // },
  },
});

// export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
