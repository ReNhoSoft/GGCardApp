import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transformDropDownData } from "../../store/staticData";
import { searchActions } from "../../store/searchData";
export default function SearchBar() {
  const staticData = useSelector((state) => state.static);
  const searchTags = useSelector(state => state.tags.searchTags);
  const dispatcher = useDispatch();
  const dropDownData = transformDropDownData(searchTags?.map(tag => tag.name), staticData);

  const onGameChanged = (event) => {
    dispatcher(searchActions.removeTag({category:"character"}));
    onDropdownChanged(event);
  }

  const onDropdownChanged = (event) => {
    const modifiedTag = {category: event.target.name, name: event.target.value }
    // Dropdown was unselected
    if(modifiedTag.name.startsWith("--")) {
        console.log("Remove tag", modifiedTag);
        dispatcher(searchActions.removeTag(modifiedTag));
    } else {
        console.log("Add tag", modifiedTag);
        dispatcher(searchActions.addTag(modifiedTag));
    }
  };

  return (
    <>
      <div style={{display:"flex", flex: "auto", margin: "auto", width:"fit-content", paddingBottom:"2rem", paddingTop:"1rem" }}>
        <select title="game" name="game" onChange={onGameChanged}>
          {dropDownData.game
            .toSpliced(0, 0, "--Select a Game--")
            .map((value, index) => (
              <option key={value}>{value}</option>
            ))}
        </select>
        <select title="character" name="character" onChange={onDropdownChanged}>
          {dropDownData.character
            .toSpliced(0, 0, "--Select a Character--")
            .map((value, index) => (
              <option key={value}>{value}</option>
            ))}
        </select>
        <select title="type" name="type" onChange={onDropdownChanged}>
          {dropDownData.type
            .toSpliced(0, 0, "--Select a Type--")
            .map((value, index) => (
              <option key={value}>{value}</option>
            ))}
        </select>
      </div>
    </>
  );
}
