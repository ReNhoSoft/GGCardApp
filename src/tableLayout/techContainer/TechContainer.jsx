import { useSelector } from "react-redux";
import { filterTags } from "../../utils";
import TechItem from "../TechItem";
import classes from "./TechContainer.module.css";

export default function TechContainer({ layout = "table" }) {
  const techItems = useSelector((state) => state.tags.techItems);
  const searchTags = useSelector((state) => state.tags.searchTags);

  const filteredItems = filterTags(techItems, searchTags);
  const layoutHeaders = ["game", "type","character", "vs", "difficulty", "custom"];
  const layoutValues = [...layoutHeaders];

  layoutHeaders.splice(2,0,"name");
  

  return (
    <>
      <div className={classes.mainContainer}>
        {filteredItems && filteredItems.length > 0 && (
          <table>
            <thead>
              <tr>
                {layoutHeaders.map((header, index) => {
                  return <th key={index}>{header}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => {
                return <TechItem key={item + index} techItem={item} layout={layoutValues}/>;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
