import { configureStore, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const initialState = {
  searchTags: [],
  techItems: []
};

const clearTag = (tag) => {
  return tag.toLowerCase().trim();
}


const searchTagsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    add(state, action) {
      let cleanTag = clearTag(action.payload);
      if(state.searchTags.indexOf(cleanTag.toLowerCase()) < 0) {
        state.searchTags.push(cleanTag.toLowerCase());
      }
    },
    remove(state, action) {
      let cleanTag = clearTag(action.payload);
      state.searchTags = [
        ...state.searchTags.slice(0, state.searchTags.indexOf(cleanTag)),
        ...state.searchTags.slice(state.searchTags.indexOf(cleanTag)+1, state.searchTags.length),
      ];
    },
    clear(state) {
      state.searchTags = [];
    },
    setTechItems(state, action) {
      state.techItems = action.payload;
    }
  },
});

const store = configureStore({
  reducer: { tags: searchTagsSlice.reducer },
});

export const searchActions = searchTagsSlice.actions;

export default store;