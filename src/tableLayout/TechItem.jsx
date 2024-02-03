import { useState } from "react";
import TechItemMedia from "./TechItemMedia";
import { deleteTechItem } from "../helpers/apiRequestHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchData";

export default function TechItem({techItem, layout}) {
  const [displayMedia, setDisplayMedia] = useState(false);
  const navigator = useNavigate();
  const dispatcher = useDispatch();

  const tagsDisplay = layout.map((category, index) => {
    return <td key={techItem.name+index}> {techItem.tags[category]?.map((tag, index) => {
      return <div key={index}>{tag}</div>
    })} </td>
  })

  tagsDisplay.splice(4, 0, <td>{techItem.damage}</td>);
  tagsDisplay.splice(2, 0, <td>{techItem.name}</td>);

  const onClickDelete = async (event) => {
    console.log("Sending item for deletion");
    const result = await deleteTechItem(techItem.id);
    dispatcher(searchActions.clearTags());
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
        {tagsDisplay}
      </tr>
      {displayMedia && (
          <TechItemMedia
            media={techItem.media}
            description={techItem.description}
            onClickDelete={onClickDelete}
          />
      )}
    </>
  );
}
