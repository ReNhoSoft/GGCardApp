import { searchTagsSlice } from "./searchData";
import { staticDataSlice } from "./staticData";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: { tags: searchTagsSlice.reducer, static: staticDataSlice.reducer },
});

export default store;

  