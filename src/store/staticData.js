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
        dependsOn: "Guilty Gear Strive",
        values: [
          { value: "Anji Mito", icon: "/public/games/GGST/GGST_Anji_Mito_Icon.png" },
          { value: "Asuka R", icon: "/public/games/GGST/GGST_Asuka_R_Icon.png" },
          { value: "Axl Low", icon: "/public/games/GGST/GGST_Axl_Low_Icon.png" },
          { value: "Baiken", icon: "/public/games/GGST/GGST_Baiken_Icon.png" },
          { value: "Bedman", icon: "/public/games/GGST/GGST_Bedman_Icon.png" },
          { value: "Bridget", icon: "/public/games/GGST/GGST_Bridget_Icon.png" },
          { value: "Chipp Zanuff", icon: "/public/games/GGST/GGST_Chipp_Zanuff_Icon.png" },
          { value: "Elphelt Valentine", icon: "/public/games/GGST/GGST_Elphelt_Valentine_Icon.png" },
          { value: "Faust", icon: "/public/games/GGST/GGST_Faust_Icon.png" },
          { value: "Giovanna", icon: "/public/games/GGST/GGST_Giovanna_Icon.png" },
          { value: "Goldlewis Dickinson", icon: "/public/games/GGST/GGST_Goldlewis_Dickinson_Icon.png" },
          { value: "Happy Chaos", icon: "/public/games/GGST/GGST_Happy_Chaos_Icon.png" },
          { value: "I-No", icon: "/public/games/GGST/GGST_I-No_Icon.png" },
          { value: "Jack-O", icon: "/public/games/GGST/GGST_Jack-O_Icon.png" },
          { value: "Johnny", icon: "/public/games/GGST/GGST_Johnny_Icon.png" },
          { value: "Ky Kiske", icon: "/public/games/GGST/GGST_Ky_Kiske_Icon.png" },
          { value: "Leo Whitefang", icon: "/public/games/GGST/GGST_Leo_Whitefang_Icon.png" },
          { value: "May", icon: "/public/games/GGST/GGST_May_Icon.png" },
          { value: "Millia Rage", icon: "/public/games/GGST/GGST_Millia_Rage_Icon.png" },
          { value: "Nagoriyuki", icon: "/public/games/GGST/GGST_Nagoriyuki_Icon.png" },
          { value: "Potemkin", icon: "/public/games/GGST/GGST_Potemkin_Icon.png" },
          { value: "Ramlethal Valentine", icon: "/public/games/GGST/GGST_Ramlethal_Valentine_Icon.png" },
          { value: "Sin Kiske", icon: "/public/games/GGST/GGST_Sin_Kiske_Icon.png" },
          { value: "Sol Badguy", icon: "/public/games/GGST/GGST_Sol_Badguy_Icon.png" },
          { value: "Testament", icon: "/public/games/GGST/GGST_Testament_Icon.png" },
          { value: "Zato-1", icon: "/public/games/GGST/GGST_Zato-1_Icon.png" },
        ]
      },
      {
        dependsOn: "Granblue Fantasy Versus: Rising",
        values: [
          { value: "Anila", icon: "/public/games/GBVSR/GBVSR_Anila_Icon.png" },
          { value: "Anre", icon: "/public/games/GBVSR/GBVSR_Anre_Icon.png" },
          { value: "Avatar Belial", icon: "/public/games/GBVSR/GBVSR_Avatar_Belial_Icon.png" },
          { value: "Beelzebub", icon: "/public/games/GBVSR/GBVSR_Beelzebub_Icon.png" },
          { value: "Belial", icon: "/public/games/GBVSR/GBVSR_Belial_Icon.png" },
          { value: "Cagliostro", icon: "/public/games/GBVSR/GBVSR_Cagliostro_Icon.png" },
          { value: "Charlotta", icon: "/public/games/GBVSR/GBVSR_Charlotta_Icon.png" },
          { value: "Djeeta", icon: "/public/games/GBVSR/GBVSR_Djeeta_Icon.png" },
          { value: "Eustace", icon: "/public/games/GBVSR/GBVSR_Eustace_Icon.png" },
          { value: "Ferry", icon: "/public/games/GBVSR/GBVSR_Ferry_Icon.png" },
          { value: "Gran", icon: "/public/games/GBVSR/GBVSR_Gran_Icon.png" },
          { value: "Grimnir", icon: "/public/games/GBVSR/GBVSR_Grimnir_Icon.png" },
          { value: "Katalina", icon: "/public/games/GBVSR/GBVSR_Katalina_Icon.png" },
          { value: "Ladiva", icon: "/public/games/GBVSR/GBVSR_Ladiva_Icon.png" },
          { value: "Lancelot", icon: "/public/games/GBVSR/GBVSR_Lancelot_Icon.png" },
          { value: "Lowain", icon: "/public/games/GBVSR/GBVSR_Lowain_Icon.png" },
          { value: "Metera", icon: "/public/games/GBVSR/GBVSR_Metera_Icon.png" },
          { value: "Narmaya", icon: "/public/games/GBVSR/GBVSR_Narmaya_Icon.png" },
          { value: "Nier", icon: "/public/games/GBVSR/GBVSR_Nier_Icon.png" },
          { value: "Percival", icon: "/public/games/GBVSR/GBVSR_Percival_Icon.png" },
          { value: "Seox", icon: "/public/games/GBVSR/GBVSR_Seox_Icon.png" },
          { value: "Siegfried", icon: "/public/games/GBVSR/GBVSR_Siegfried_Icon.png" },
          { value: "Soriz", icon: "/public/games/GBVSR/GBVSR_Soriz_Icon.png" },
          { value: "Vaseraga", icon: "/public/games/GBVSR/GBVSR_Vaseraga_Icon.png" },
          { value: "Vira", icon: "/public/games/GBVSR/GBVSR_Vira_Icon.png" },
          { value: "Yuel", icon: "/public/games/GBVSR/GBVSR_Yuel_Icon.png" },
          { value: "Zeta", icon: "/public/games/GBVSR/GBVSR_Zeta_Icon.png" },
          { value: "Zooey", icon: "/public/games/GBVSR/GBVSR_Zooey_Icon.png" },
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
      {
        dependsOn: "Guilty Gear Accent Core +R",
        values: [
          { value: "A.B.A", icon: "/public/games/GGACR/GGACR_A.B.A_Icon.png" },
          { value: "Anji Mito", icon: "/public/games/GGACR/GGACR_Anji_Mito_Icon.png" },
          { value: "Axl Low", icon: "/public/games/GGACR/GGACR_Axl_Low_Icon.png" },
          { value: "Baiken", icon: "/public/games/GGACR/GGACR_Baiken_Icon.png" },
          { value: "Bridget", icon: "/public/games/GGACR/GGACR_Bridget_Icon.png" },
          { value: "Chipp Zanuff", icon: "/public/games/GGACR/GGACR_Chipp_Zanuff_Icon.png" },
          { value: "Dizzy", icon: "/public/games/GGACR/GGACR_Dizzy_Icon.png" },
          { value: "Eddie", icon: "/public/games/GGACR/GGACR_Eddie_Icon.png" },
          { value: "Faust", icon: "/public/games/GGACR/GGACR_Faust_Icon.png" },
          { value: "I-No", icon: "/public/games/GGACR/GGACR_I-No_Icon.png" },
          { value: "Jam Kuradoberi", icon: "/public/games/GGACR/GGACR_Jam_Kuradoberi_Icon.png" },
          { value: "Johnny", icon: "/public/games/GGACR/GGACR_Johnny_Icon.png" },
          { value: "Justice", icon: "/public/games/GGACR/GGACR_Justice_Icon.png" },
          { value: "Kliff_Undersn", icon: "/public/games/GGACR/GGACR_Kliff_Undersn_Icon.png" },
          { value: "Ky Kiske", icon: "/public/games/GGACR/GGACR_Ky_Kiske_Icon.png" },
          { value: "May", icon: "/public/games/GGACR/GGACR_May_Icon.png" },
          { value: "Millia Rage", icon: "/public/games/GGACR/GGACR_Millia_Rage_Icon.png" },
          { value: "Order-Sol", icon: "/public/games/GGACR/GGACR_Order-Sol_Icon.png" },
          { value: "Potemkin", icon: "/public/games/GGACR/GGACR_Potemkin_Icon.png" },
          { value: "Robo-Ky", icon: "/public/games/GGACR/GGACR_Robo-Ky_Icon.png" },
          { value: "Slayer", icon: "/public/games/GGACR/GGACR_Slayer_Icon.png" },
          { value: "Sol Badguy", icon: "/public/games/GGACR/GGACR_Sol_Badguy_Icon.png" },
          { value: "Testament", icon: "/public/games/GGACR/GGACR_Testament_Icon.png" },
          { value: "Venom", icon: "/public/games/GGACR/GGACR_Venom_Icon.png" },
          { value: "Zappa", icon: "/public/games/GGACR/GGACR_Zappa_Icon.png" },
        ]
      }
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
