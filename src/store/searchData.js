import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { parseTechItemsData } from "../helpers/apiRequestHelper";
const initialState = {
  searchTags: [{ category:"game", name:"Guilty Gear Xrd"}, {category:"character", name:"Sol Badguy"}],
  techItems: []
};


export const searchTagsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addTag(state, action) {
      const newSearchTags = state.searchTags.filter(tag => tag.category != action.payload.category);
      newSearchTags.push(action.payload);
      state.searchTags =  newSearchTags;
    },
    removeTag(state, action) {
      // TODO: Implement removing Tags in reducer
      state.searchTags = state.searchTags.filter(tag => tag.category != action.payload.category);
    },
    clearTags(state) {
      state.searchTags = [];
    },
    addTechItem(state, action) {
      const parsedPayload = parseTechItemsData([action.payload]);
      if(!state.techItems || state.techItems.length == 0) {
        state.techItems = parsedPayload[0];
      } else {
        const newTechItemsList = _.cloneDeep(state.techItems);
        newTechItemsList.push(parsedPayload[0]);
        state.techItems = newTechItemsList;
      }
    },
    setTechItems(state, action) {
      state.techItems = action.payload;
    }
  },
});


export const searchActions = searchTagsSlice.actions;
