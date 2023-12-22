import { useState } from "react";
import TechItemMedia from "./TechItemMedia";
import classes from "./TechItem.module.css"
import TagDisplay from "./tagDisplay/TagDisplay";

export default function TechItem({techItem}) {
  const [displayMedia, setDisplayMedia] = useState(false);

  if(!techItem) {
    console.warn("No item was provided to TechItem component");
    return <></>;
  }
  console.log(techItem)
  return (
    <>
      <tr
        onClick={() =>
          setDisplayMedia((value) => {
            console.log(value);
            return !value;
          })
        }
      >
        <td>{techItem.game}</td>
        <td>{techItem.type}</td>
        <td>{techItem.character}</td>
        <td>{techItem.vs}</td>
        <td>{techItem.title}</td>
        <td className={classes.mediaRow}>
          <TagDisplay/>
        </td>
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
