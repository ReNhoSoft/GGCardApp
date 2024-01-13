import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "game",
    type: "fixed",
    values: [
      {
        value: "Guilty Gear Xrd",
        icon: "/public/games/GGXRD-R2_Logo.png",
      },
      {
        value: "Granblue Fantasy Versus: Rising",
        icon: "/public/games/GBVSR_Logo.png",
      },
      {
        value: "Guilty Gear Accent Core +R",
        icon: "/public/games/GGACR_Logo.png",
      },
      {
        value: "Guilty Gear Strive",
        icon: "/public/games/GGST_Logo.png",
      },
    ],
  },
  {
    category: "type",
    type: "fixed",
    values: [
      { value: "bnbs" },
      { value: "optimal" },
      { value: "meter dump" },
      { value: "setup" },
      { value: "mixup" },
    ],
  },
  {
    category: "character",
    type: "dynamic",
    dependsOn: "game",
    valueSets: [
      {
        dependsOn: "Granblue Fantasy Versus: Rising",
        values: [
          { value: "Anila" },
          { value: "Anre" },
          { value: "Avatar Belial" },
          { value: "Beelzebub" },
          { value: "Belial" },
          { value: "Cagliostro" },
          { value: "Charlotta" },
          { value: "Djeeta" },
          { value: "Eustace" },
          { value: "Ferry" },
          { value: "Gran" },
          { value: "Grimnir" },
          { value: "Katalina" },
          { value: "Ladiva" },
          { value: "Lancelot" },
          { value: "Lowain" },
          { value: "Metera" },
          { value: "Narmaya" },
          { value: "Nier" },
          { value: "Percival" },
          { value: "Seox" },
          { value: "Siegfried" },
          { value: "Soriz" },
          { value: "Vaseraga" },
          { value: "Vira" },
          { value: "Yuel" },
          { value: "Zeta" },
          { value: "Zooey" },
        ],
      },
      {
        dependsOn: "Guilty Gear Xrd",
        values: [
          { value: "Answer", icon: "/public/games/Xrd/GGXRD-R2_Answer_Icon.png" },
          { value: "Axl Low", icon: "/public/games/Xrd/GGXRD-R2_Axl_Low_Icon.png" },
          { value: "Baiken",icon: "/public/games/Xrd/GGXRD-R2_Baiken_Icon.png" },
          { value: "Bedman", icon: "/public/games/Xrd/GGXRD-R2_Bedman_Icon.png" },
          { value: "Chipp Zanuff", icon: "/public/games/Xrd/GGXRD-R2_Chipp_Zanuff_Icon.png" },
          { value: "Dizzy", icon: "/public/games/Xrd/GGXRD-R2_Dizzy_Icon.png" },
          { value: "Elphelt Valentine", icon: "/public/games/Xrd/GGXRD-R2_Elphelt_Valentine_Icon.png" },
          { value: "Faust", icon: "/public/games/Xrd/GGXRD-R2_Faust_Icon.png" },
          { value: "I-No", icon: "/public/games/Xrd/GGXRD-R2_I-No_Icon.png" },
          { value: "Jack-O", icon: "/public/games/Xrd/GGXRD-R2_Jack-O_Icon.png" },
          { value: "Jam Kuradoberi", icon: "/public/games/Xrd/GGXRD-R2_Jam_Kuradoberi_Icon.png" },
          { value: "Johnny", icon: "/public/games/Xrd/GGXRD-R2_Johnny_Icon.png" },
          { value: "Kum Haehyun", icon: "/public/games/Xrd/GGXRD-R2_Kum_Haehyun_Icon.png" },
          { value: "Ky Kiske", icon: "/public/games/Xrd/GGXRD-R2_Ky_Kiske_Icon.png" },
          { value: "Leo Whitefang", icon: "/public/games/Xrd/GGXRD-R2_Leo_Whitefang_Icon.png" },
          { value: "May", icon: "/public/games/Xrd/GGXRD-R2_May_Icon.png" },
          { value: "Millia Rage",icon: "/public/games/Xrd/GGXRD-R2_Millia_Rage_Icon.png" },
          { value: "Potemkin", icon: "/public/games/Xrd/GGXRD-R2_Potemkin_Icon.png" },
          { value: "Ramlethal Valentine", icon: "/public/games/Xrd/GGXRD-R2_Ramlethal_Valentine_Icon.png" },
          { value: "Raven", icon: "/public/games/Xrd/GGXRD-R2_Raven_Icon.png" },
          { value: "Sin Kiske", icon: "/public/games/Xrd/GGXRD-R2_Sin_Kiske_Icon.png" },
          { value: "Slayer", icon: "/public/games/Xrd/GGXRD-R2_Slayer_Icon.png" },
          { value: "Sol Badguy", icon: "/public/games/Xrd/GGXRD-R2_Sol_Badguy_Icon.png" },
          { value: "Venom", icon: "/public/games/Xrd/GGXRD-R2_Venom_Icon.png" },
          { value: "Zato-1", icon: "/public/games/Xrd/GGXRD-R2_Zato-1_Icon.png" },
        ],
      },
    ],
  },
  {
    category: "difficulty",
    type: "fixed",
    values: [
      { value: "beginner" },
      { value: "novice" },
      { value: "intermediate" },
      { value: "advanced" },
    ],
  },
];


export function transformDropDownData(selectedItems = [], staticData) {
  const result = {};
  for (let i = 0; i < staticData.length; i++) {
    const entry = staticData[i];
    const values = [];
    if (entry.type == "fixed") {
      values.push(...entry.values);
    } else if (entry.type == "dynamic") {
      values.push(
        ...entry.valueSets
          .filter(
            (vs) => !vs.dependsOn || selectedItems.includes(vs.dependsOn)
          )
          .map((vs) => vs.values)
          .flat(2)
      );
    }
    result[entry.category] = values;
  }
  return result;
}

export const staticDataSlice = createSlice({
  name: "static",
  initialState,
  reducers: {},
});
