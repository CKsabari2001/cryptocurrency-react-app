import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  value: string;
}
const initialState: initialState = {
  value: "",
};

export const chartSelectSlice = createSlice({
  name: "chartSelect",
  initialState,
  reducers: {
    setChartSelectValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setChartSelectValue } = chartSelectSlice.actions;
export default chartSelectSlice.reducer;
