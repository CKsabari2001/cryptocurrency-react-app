import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  value: string;
}
const initialState: initialState = {
  value: "",
};

export const newsSelectSlice = createSlice({
  name: "newsSelect",
  initialState,
  reducers: {
    setNewsSelectValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNewsSelectValue } = newsSelectSlice.actions;
export default newsSelectSlice.reducer;
