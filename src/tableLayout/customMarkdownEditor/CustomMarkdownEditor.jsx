import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";

const createInputCommand = (name, icon) => {
  const iconRoute = `input_icons/${icon}.png`;
  return {
    name: name,
    keyCommand: name,
    buttonProps: { "aria-label": `Insert ${name} input` },
    icon: <img src={iconRoute} />,
    execute: (state, api) => {
      let modifyText = `![](${iconRoute}) \n`;
      if (!state.selectedText) {
        modifyText = `![](${iconRoute}) `;
      }
      api.replaceSelection(modifyText);
    },
  };
};

const punch = createInputCommand("punch", "P");
const kick = createInputCommand("kick", "K");
const slash = createInputCommand("slash", "S");
const hslash = createInputCommand("heavy slash", "H");
const dust = createInputCommand("dust", "D");
const downleft = createInputCommand("down left", "1");
const down = createInputCommand("down", "2");
const downright = createInputCommand("down right", "3");
const left = createInputCommand("left", "4");
const neutral = createInputCommand("neutral", "5");
const right = createInputCommand("right", "6");
const upright = createInputCommand("upright", "9");
const up = createInputCommand("up", "8");
const upleft = createInputCommand("up", "7");

const extraCommands = [
    commands.group([neutral, downleft, down, downright, right, upright, up, upleft], {
        name:"Directions",
        groupName: "Directions",
        buttonProps: { "aria-label": "Insert direction input" },
        icon: <img src="input_icons/5.png"/>
    }),
    commands.divider,
    commands.group([punch, kick, slash, hslash, dust], {
      name: "Guilty Gear",
      groupName: "Guilty Gear",
      buttonProps: { "aria-label": "Insert Guilty Gear input" },
      icon: <label>Gear</label>
    }),
];

export default function CustomMarkdownEditor() {
  const [markdownValue, setMarkdownValue] = useState();

  return (
    <MDEditor
      height={200}
      value={markdownValue}
      extraCommands={extraCommands}
      onChange={setMarkdownValue}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
    ></MDEditor>
  );
}
