import { useDispatch, useSelector } from "react-redux";
import { transformDropDownData } from "../../store/staticData";
import { searchActions } from "../../store/searchData";
import ImageSelect from "../imageSelect/ImageSelect";
import { useStoreData } from "../../helpers/customHooks";
import SearchInputTag from "../SeatchInputTag/SearchInputTag";

export default function SearchBar({...props}) {
  const [searchTags, staticData] = useStoreData();
  const dropDownData = transformDropDownData(searchTags?.map(tag => tag.name), staticData);
  const dispatcher = useDispatch();
  const selectedGame = searchTags.find(tag => tag.category == "game")
  const selectedCharacter = searchTags.find(tag => tag.category == "character")

  const onGameChanged = (tagValue, category) => {
    dispatcher(searchActions.removeTag({category:"character", name:"dummy"}));
    onDropdownChanged(tagValue, category);
  }

  const onDropdownChanged = (tagValue, category) => {
    const modifiedTag = {category, name:tagValue};
    // Dropdown was unselected
    if(modifiedTag.name.startsWith("--")) {
        dispatcher(searchActions.removeTag(modifiedTag));
    } else {
        dispatcher(searchActions.addTag(modifiedTag));
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: "auto",
          margin: "auto",
          width: "fit-content",
          paddingBottom: "2rem",
          paddingTop: "1rem",
        }}
      >
        <ImageSelect
          dropDownData={dropDownData.game}
          onItemSelected={onGameChanged}
          selectedItem={selectedGame}
          label="-- Select a Game --"
          category="game"
        />
        <ImageSelect
          dropDownData={dropDownData.character}
          onItemSelected={onDropdownChanged}
          selectedItem={selectedCharacter}
          label="-- Select a Character --"
          category="character"
        />
        <SearchInputTag />
      </div>
    </>
  );
}
