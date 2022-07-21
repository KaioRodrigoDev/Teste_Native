import {createSlice} from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    data: 'Usuario',
  },
  reducers: {
    setData(state, {payload}) {
      state.data = payload;
    },
  },
});

export const {setData} = layoutSlice.actions;
export default layoutSlice.reducer;
