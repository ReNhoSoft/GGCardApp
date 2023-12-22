import { useSelector } from "react-redux";
import { filterTags } from "../../store/utils";
import { useState } from "react";
import TechItem from "../TechItem";
import classes from "./TechContainer.module.css";
import SearchBar from "../searchBar/SearchBar";

export default function TechContainer({ layout = "table" }) {
  const techItems = useSelector((state) => state.tags.techItems);
  const searchTags = useSelector((state) => state.tags.searchTags);

  const filteredItems = filterTags(techItems, searchTags);

  return (
    <>
      <SearchBar/>
      <div className={classes.mainContainer}>
        {filteredItems && filteredItems.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Game</th>
                <th>Type</th>
                <th>Character</th>
                <th>VS</th>
                <th>Title</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => {
                return <TechItem key={item + index} techItem={item} />;
              })}
              {filteredItems.map((item, index) => {
                return <TechItem key={item + index} techItem={item} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
