import { useSelector } from "react-redux";
import { filterTags } from "../../utils";
import TechItem from "../TechItem";
import classes from "./TechContainer.module.css";
import SearchBar from "../searchBar/SearchBar";

export default function TechContainer({ layout = "table" }) {
  const techItems = useSelector((state) => state.tags.techItems);
  const searchTags = useSelector((state) => state.tags.searchTags);

  const filteredItems = filterTags(techItems, searchTags);
  const layoutHeaders = ["game", "type", "character", "vs", "title", "difficulty", "custom"];

  return (
    <>
      <SearchBar/>
      <div className={classes.mainContainer}>
        {filteredItems && filteredItems.length > 0 && (
          <table>
            <thead>
              <tr>
                {layoutHeaders.map((header) => {
                  return <th>{header}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => {
                return <TechItem key={item + index} techItem={item} layout={layoutHeaders}/>;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
