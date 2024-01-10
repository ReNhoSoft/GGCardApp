import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "game",
    type:"fixed",
    values: [
      { value: "Guilty Gear Xrd" },
      { value: "Granblue Fantasy Versus: Rising" },
    ],
  },
  {
    category: "type",
    type:"fixed",
    values: [
      { value: "combo" }, 
    { value: "concept" }, 
    { value: "misc" },
    { value: "setup" },
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
          { value: "Anila"},
          { value: "Anre"},
          { value: "Avatar Belial"},
          { value: "Beelzebub"},
          { value: "Belial"},
          { value: "Cagliostro"},
          { value: "Charlotta"},
          { value: "Djeeta"},
          { value: "Eustace"},
          { value: "Ferry"},
          { value: "Gran"},
          { value: "Grimnir"},
          { value: "Katalina"},
          { value: "Ladiva"},
          { value: "Lancelot"},
          { value: "Lowain"},
          { value: "Metera"},
          { value: "Narmaya"},
          { value: "Nier"},
          { value: "Percival"},
          { value: "Seox"},
          { value: "Siegfried"},
          { value: "Soriz"},
          { value: "Vaseraga"},
          { value: "Vira"},
          { value: "Yuel"},
          { value: "Zeta"},
          { value: "Zooey"},
        ]
      },
      {
        dependsOn: "Guilty Gear Xrd",
        values: [
          { value: "Answer"},
          { value: "Axl Low"},
          { value: "Baiken" },
          { value: "Bedman"},
          { value: "Chipp Zanuff"},
          { value: "Dizzy"},
          { value: "Elphelt Valentine"},
          { value: "Faust"},
          { value: "I-No"},
          { value: "Jack-O"},
          { value: "Jam Kuradoberi"},
          { value: "Johnny"},
          { value: "Kum Haehyun"},
          { value: "Ky Kiske"},
          { value: "Leo Whitefang"},
          { value: "May"},
          { value: "Millia Rage"},
          { value: "Potemkin"},
          { value: "Ramlethal Valentine"},
          { value: "Raven"},
          { value: "Sin Kiske"},
          { value: "Slayer"},
          { value: "Sol Badguy"},
          { value: "Venom"},
          { value: "Zato-1"},
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
