import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { parseTechItemsData } from "../helpers/apiRequestHelper";
const initialState = {
  searchTags: [{ category:"game", name:"Guilty Gear Xrd"}, {category:"character", name:"Answer"}],
  techItems: []
};


export const searchTagsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addTag(state, action) {
      const newSearchTags = _.cloneDeep(state.searchTags);
      newSearchTags.push(action.payload);
      state.searchTags =  newSearchTags;
    },
    removeTag(state, action) {
      // TODO: Implement removing Tags in reducer
    },
    clearTags(state) {
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
