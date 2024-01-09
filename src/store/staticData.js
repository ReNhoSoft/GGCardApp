import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "game",
    type:"fixed",
    values: [
      { value: "Guilty Gear Xrd" },
      { value: "Granblue Fantasy Versus Rising" },
    ],
  },
  {
    category: "type",
    type:"fixed",
    values: [
      { value: "combo" }, 
    { value: "concept" }, 
    { value: "misc" }
  ],
  },
  {
    category: "character",
    type:"dynamic",
    dependsOn: "game",
    valueSets: [ 
      {
        dependsOn: "Granblue Fantasy Versus: Rising",
        values: [
          { value: "Charlotta"},
          { value: "Lancelot"},
        ]
      },
      {
        dependsOn: "Guilty Gear Xrd",
        values: [
          { value: "Kuradoberi Jam"},
          { value: "Sol Badguy" },
        ]
      },
    ],
  },
  {
    category: "difficulty",
    type:"fixed",
    values: [
      { value: "beginner" },
      { value: "novice" },
      { value: "intermediate" },
      { value: "advanced" },
    ],
  },
];


export const staticDataSlice = createSlice({
  name: "static",
  initialState,
  reducers: {},
});
