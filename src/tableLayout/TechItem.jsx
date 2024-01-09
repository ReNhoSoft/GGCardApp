import { useState } from "react";
import TechItemMedia from "./TechItemMedia";
import classes from "./TechItem.module.css"
import TagDisplay from "./tagDisplay/TagDisplay";

export default function TechItem({techItem, layout}) {
  const [displayMedia, setDisplayMedia] = useState(false);
  
  const tagsDisplay = layout.map((category, index) => {
    return <td key={techItem.name+index}> {techItem.tags[category]?.map((tag, index) => {
      return <div key={index}>{tag}</div>
    })} </td>
  })

  tagsDisplay.splice(2, 0, <td>{techItem.name}</td>);
  
  return (
    <>
      <tr
        onClick={() =>
          setDisplayMedia((value) => {
            return !value;
          })
        }
      >
        {tagsDisplay}
      </tr>
      {displayMedia && (
        <>
          <TechItemMedia
            media={techItem.media}
            description={techItem.description}
          />
        </>
      )}
    </>
  );
}
