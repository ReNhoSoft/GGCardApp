import { useState } from "react";
import TechItemMedia from "./TechItemMedia";
import classes from "./TechItem.module.css"
import TagDisplay from "./tagDisplay/TagDisplay";

export default function TechItem({techItem, layout}) {
  const [displayMedia, setDisplayMedia] = useState(false);
  console.log(techItem)
  if(!techItem) {
    console.warn("No item was provided to TechItem component");
    return <></>;
  }
  return (
    <>
      <tr
        onClick={() =>
          setDisplayMedia((value) => {
            return !value;
          })
        }
      >
        {layout.map((category, index) => {
          return <td key={techItem.name+index}> {techItem.tags[category]?.map((tag, index) => {
            return <div key={index}>{tag}</div>
          })} </td>
        })}
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
