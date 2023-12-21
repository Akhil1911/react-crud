import { createSlice } from "@reduxjs/toolkit";
import { getAllLists } from "./thunk";
export const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    lists: [],
  },
  reducers: {
    clearHomeTodo: (state) => {
      state.lists = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLists.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllLists.fulfilled, (state, action) => {
        state.loading = false;
        state.lists = action.payload
      })
      .addCase(getAllLists.rejected, (state) => { state.loading = true; })
  },
});

export const {clearHomeTodo} = TodoSlice.actions
export default TodoSlice.reducer