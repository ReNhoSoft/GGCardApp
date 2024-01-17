import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "game",
    type: "fixed",
    values: [
      {
        value: "Guilty Gear Xrd",
        icon: "/games/GGXRD-R2_Logo.png",
      },
      {
        value: "Granblue Fantasy Versus: Rising",
        icon: "/games/GBVSR_Logo.png",
      },
      {
        value: "Guilty Gear Accent Core +R",
        icon: "/games/GGACR_Logo.png",
      },
      {
        value: "Guilty Gear Strive",
        icon: "/games/GGST_Logo.png",
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
          { value: "Anji Mito", icon: "/games/GGST/GGST_Anji_Mito_Icon.png" },
          { value: "Asuka R", icon: "/games/GGST/GGST_Asuka_R_Icon.png" },
          { value: "Axl Low", icon: "/games/GGST/GGST_Axl_Low_Icon.png" },
          { value: "Baiken", icon: "/games/GGST/GGST_Baiken_Icon.png" },
          { value: "Bedman", icon: "/games/GGST/GGST_Bedman_Icon.png" },
          { value: "Bridget", icon: "/games/GGST/GGST_Bridget_Icon.png" },
          { value: "Chipp Zanuff", icon: "/games/GGST/GGST_Chipp_Zanuff_Icon.png" },
          { value: "Elphelt Valentine", icon: "/games/GGST/GGST_Elphelt_Valentine_Icon.png" },
          { value: "Faust", icon: "/games/GGST/GGST_Faust_Icon.png" },
          { value: "Giovanna", icon: "/games/GGST/GGST_Giovanna_Icon.png" },
          { value: "Goldlewis Dickinson", icon: "/games/GGST/GGST_Goldlewis_Dickinson_Icon.png" },
          { value: "Happy Chaos", icon: "/games/GGST/GGST_Happy_Chaos_Icon.png" },
          { value: "I-No", icon: "/games/GGST/GGST_I-No_Icon.png" },
          { value: "Jack-O", icon: "/games/GGST/GGST_Jack-O_Icon.png" },
          { value: "Johnny", icon: "/games/GGST/GGST_Johnny_Icon.png" },
          { value: "Ky Kiske", icon: "/games/GGST/GGST_Ky_Kiske_Icon.png" },
          { value: "Leo Whitefang", icon: "/games/GGST/GGST_Leo_Whitefang_Icon.png" },
          { value: "May", icon: "/games/GGST/GGST_May_Icon.png" },
          { value: "Millia Rage", icon: "/games/GGST/GGST_Millia_Rage_Icon.png" },
          { value: "Nagoriyuki", icon: "/games/GGST/GGST_Nagoriyuki_Icon.png" },
          { value: "Potemkin", icon: "/games/GGST/GGST_Potemkin_Icon.png" },
          { value: "Ramlethal Valentine", icon: "/games/GGST/GGST_Ramlethal_Valentine_Icon.png" },
          { value: "Sin Kiske", icon: "/games/GGST/GGST_Sin_Kiske_Icon.png" },
          { value: "Sol Badguy", icon: "/games/GGST/GGST_Sol_Badguy_Icon.png" },
          { value: "Testament", icon: "/games/GGST/GGST_Testament_Icon.png" },
          { value: "Zato-1", icon: "/games/GGST/GGST_Zato-1_Icon.png" },
        ]
      },
      {
        dependsOn: "Granblue Fantasy Versus: Rising",
        values: [
          { value: "Anila", icon: "/games/GBVSR/GBVSR_Anila_Icon.png" },
          { value: "Anre", icon: "/games/GBVSR/GBVSR_Anre_Icon.png" },
          { value: "Avatar Belial", icon: "/games/GBVSR/GBVSR_Avatar_Belial_Icon.png" },
          { value: "Beelzebub", icon: "/games/GBVSR/GBVSR_Beelzebub_Icon.png" },
          { value: "Belial", icon: "/games/GBVSR/GBVSR_Belial_Icon.png" },
          { value: "Cagliostro", icon: "/games/GBVSR/GBVSR_Cagliostro_Icon.png" },
          { value: "Charlotta", icon: "/games/GBVSR/GBVSR_Charlotta_Icon.png" },
          { value: "Djeeta", icon: "/games/GBVSR/GBVSR_Djeeta_Icon.png" },
          { value: "Eustace", icon: "/games/GBVSR/GBVSR_Eustace_Icon.png" },
          { value: "Ferry", icon: "/games/GBVSR/GBVSR_Ferry_Icon.png" },
          { value: "Gran", icon: "/games/GBVSR/GBVSR_Gran_Icon.png" },
          { value: "Grimnir", icon: "/games/GBVSR/GBVSR_Grimnir_Icon.png" },
          { value: "Katalina", icon: "/games/GBVSR/GBVSR_Katalina_Icon.png" },
          { value: "Ladiva", icon: "/games/GBVSR/GBVSR_Ladiva_Icon.png" },
          { value: "Lancelot", icon: "/games/GBVSR/GBVSR_Lancelot_Icon.png" },
          { value: "Lowain", icon: "/games/GBVSR/GBVSR_Lowain_Icon.png" },
          { value: "Metera", icon: "/games/GBVSR/GBVSR_Metera_Icon.png" },
          { value: "Narmaya", icon: "/games/GBVSR/GBVSR_Narmaya_Icon.png" },
          { value: "Nier", icon: "/games/GBVSR/GBVSR_Nier_Icon.png" },
          { value: "Percival", icon: "/games/GBVSR/GBVSR_Percival_Icon.png" },
          { value: "Seox", icon: "/games/GBVSR/GBVSR_Seox_Icon.png" },
          { value: "Siegfried", icon: "/games/GBVSR/GBVSR_Siegfried_Icon.png" },
          { value: "Soriz", icon: "/games/GBVSR/GBVSR_Soriz_Icon.png" },
          { value: "Vaseraga", icon: "/games/GBVSR/GBVSR_Vaseraga_Icon.png" },
          { value: "Vira", icon: "/games/GBVSR/GBVSR_Vira_Icon.png" },
          { value: "Yuel", icon: "/games/GBVSR/GBVSR_Yuel_Icon.png" },
          { value: "Zeta", icon: "/games/GBVSR/GBVSR_Zeta_Icon.png" },
          { value: "Zooey", icon: "/games/GBVSR/GBVSR_Zooey_Icon.png" },
        ],
      },
      {
        dependsOn: "Guilty Gear Xrd",
        values: [
          { value: "Answer", icon: "/games/Xrd/GGXRD-R2_Answer_Icon.png", iconPosition:"50%35%" },
          { value: "Axl Low", icon: "/games/Xrd/GGXRD-R2_Axl_Low_Icon.png",  iconPosition:"50%12%" },
          { value: "Baiken",icon: "/games/Xrd/GGXRD-R2_Baiken_Icon.png" },
          { value: "Bedman", icon: "/games/Xrd/GGXRD-R2_Bedman_Icon.png" },
          { value: "Chipp Zanuff", icon: "/games/Xrd/GGXRD-R2_Chipp_Zanuff_Icon.png",  iconPosition:"50%40%" },
          { value: "Dizzy", icon: "/games/Xrd/GGXRD-R2_Dizzy_Icon.png" },
          { value: "Elphelt Valentine", icon: "/games/Xrd/GGXRD-R2_Elphelt_Valentine_Icon.png",  iconPosition:"50%42%" },
          { value: "Faust", icon: "/games/Xrd/GGXRD-R2_Faust_Icon.png",  iconPosition:"50%12%" },
          { value: "I-No", icon: "/games/Xrd/GGXRD-R2_I-No_Icon.png",  iconPosition:"50%30%" },
          { value: "Jack-O", icon: "/games/Xrd/GGXRD-R2_Jack-O_Icon.png",  iconPosition:"50%40%" },
          { value: "Jam Kuradoberi", icon: "/games/Xrd/GGXRD-R2_Jam_Kuradoberi_Icon.png",  iconPosition:"50%42%" },
          { value: "Johnny", icon: "/games/Xrd/GGXRD-R2_Johnny_Icon.png",  iconPosition:"50%40%" },
          { value: "Kum Haehyun", icon: "/games/Xrd/GGXRD-R2_Kum_Haehyun_Icon.png",  iconPosition:"50%48%" },
          { value: "Ky Kiske", icon: "/games/Xrd/GGXRD-R2_Ky_Kiske_Icon.png",  iconPosition:"50%30%" },
          { value: "Leo Whitefang", icon: "/games/Xrd/GGXRD-R2_Leo_Whitefang_Icon.png",  iconPosition:"50%40%" },
          { value: "May", icon: "/games/Xrd/GGXRD-R2_May_Icon.png",  iconPosition:"50%42%" },
          { value: "Millia Rage",icon: "/games/Xrd/GGXRD-R2_Millia_Rage_Icon.png",  iconPosition:"50%30%" },
          { value: "Potemkin", icon: "/games/Xrd/GGXRD-R2_Potemkin_Icon.png" },
          { value: "Ramlethal Valentine", icon: "/games/Xrd/GGXRD-R2_Ramlethal_Valentine_Icon.png" },
          { value: "Raven", icon: "/games/Xrd/GGXRD-R2_Raven_Icon.png",  iconPosition:"50%25%" },
          { value: "Sin Kiske", icon: "/games/Xrd/GGXRD-R2_Sin_Kiske_Icon.png",  iconPosition:"50%25%" },
          { value: "Slayer", icon: "/games/Xrd/GGXRD-R2_Slayer_Icon.png",  iconPosition:"50%22%" },
          { value: "Sol Badguy", icon: "/games/Xrd/GGXRD-R2_Sol_Badguy_Icon.png",  iconPosition:"50%35%" },
          { value: "Venom", icon: "/games/Xrd/GGXRD-R2_Venom_Icon.png",  iconPosition:"50%25%" },
          { value: "Zato-1", icon: "/games/Xrd/GGXRD-R2_Zato-1_Icon.png",  iconPosition:"50%25%" },
        ],
      },
      {
        dependsOn: "Guilty Gear Accent Core +R",
        values: [
          { value: "A.B.A", icon: "/games/GGACR/GGACR_A.B.A_Icon.png" },
          { value: "Anji Mito", icon: "/games/GGACR/GGACR_Anji_Mito_Icon.png" },
          { value: "Axl Low", icon: "/games/GGACR/GGACR_Axl_Low_Icon.png" },
          { value: "Baiken", icon: "/games/GGACR/GGACR_Baiken_Icon.png" },
          { value: "Bridget", icon: "/games/GGACR/GGACR_Bridget_Icon.png" },
          { value: "Chipp Zanuff", icon: "/games/GGACR/GGACR_Chipp_Zanuff_Icon.png" },
          { value: "Dizzy", icon: "/games/GGACR/GGACR_Dizzy_Icon.png" },
          { value: "Eddie", icon: "/games/GGACR/GGACR_Eddie_Icon.png" },
          { value: "Faust", icon: "/games/GGACR/GGACR_Faust_Icon.png" },
          { value: "I-No", icon: "/games/GGACR/GGACR_I-No_Icon.png" },
          { value: "Jam Kuradoberi", icon: "/games/GGACR/GGACR_Jam_Kuradoberi_Icon.png" },
          { value: "Johnny", icon: "/games/GGACR/GGACR_Johnny_Icon.png" },
          { value: "Justice", icon: "/games/GGACR/GGACR_Justice_Icon.png" },
          { value: "Kliff_Undersn", icon: "/games/GGACR/GGACR_Kliff_Undersn_Icon.png" },
          { value: "Ky Kiske", icon: "/games/GGACR/GGACR_Ky_Kiske_Icon.png" },
          { value: "May", icon: "/games/GGACR/GGACR_May_Icon.png" },
          { value: "Millia Rage", icon: "/games/GGACR/GGACR_Millia_Rage_Icon.png" },
          { value: "Order-Sol", icon: "/games/GGACR/GGACR_Order-Sol_Icon.png" },
          { value: "Potemkin", icon: "/games/GGACR/GGACR_Potemkin_Icon.png" },
          { value: "Robo-Ky", icon: "/games/GGACR/GGACR_Robo-Ky_Icon.png" },
          { value: "Slayer", icon: "/games/GGACR/GGACR_Slayer_Icon.png" },
          { value: "Sol Badguy", icon: "/games/GGACR/GGACR_Sol_Badguy_Icon.png" },
          { value: "Testament", icon: "/games/GGACR/GGACR_Testament_Icon.png" },
          { value: "Venom", icon: "/games/GGACR/GGACR_Venom_Icon.png" },
          { value: "Zappa", icon: "/games/GGACR/GGACR_Zappa_Icon.png" },
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
