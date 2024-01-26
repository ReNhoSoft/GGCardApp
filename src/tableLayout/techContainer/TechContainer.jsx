import { useSelector } from "react-redux";
import { filterTags } from "../../utils";
import TechItem from "../TechItem";
import classes from "./TechContainer.module.css";

export default function TechContainer({ layout = "table" }) {
  const techItems = useSelector((state) => state.tags.techItems);
  const searchTags = useSelector((state) => state.tags.searchTags);

  const filteredItems = filterTags(techItems, searchTags);
  const layoutHeaders = ["character", "type", "difficulty", "works on", "other"];
  const layoutValues = [...layoutHeaders];

  layoutHeaders.splice(2,0,"name");
  layoutHeaders.splice(5,0,"damage");
  

  return (
    <>
      <div className={classes.mainContainer}>
          <table style={{tableLayout:"fixed"}}>
            <thead>
              <tr>
                {layoutHeaders.map((header, index) => {
                  return <th key={index} >{header}</th>
                })}
              </tr>
            </thead>
            <tbody>
            {filteredItems && filteredItems.length > 0 && filteredItems.map((item, index) => {
                return <TechItem key={item + index} techItem={item} layout={layoutValues}/>;
              })}
            </tbody>
          </table>
      </div>
    </>
  );
}
