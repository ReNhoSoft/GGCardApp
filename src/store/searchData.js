import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { parseTechItemsData } from "../helpers/apiRequestHelper";
const initialState = {
  searchTags: [],
  techItems: []
};

const clearTag = (tag) => {
  return tag.toLowerCase().trim();
}


export const searchTagsSlice = createSlice({
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
    addTechItem(state, action) {
      const parsedPayload = parseTechItemsData([action.payload]);
      const newTechItemsList = _.cloneDeep(state.techItems);
      newTechItemsList.push(parsedPayload[0]);
      state.techItems = newTechItemsList;
    },
    setTechItems(state, action) {
      state.techItems = action.payload;
    }
  },
});


export const searchActions = searchTagsSlice.actions;
