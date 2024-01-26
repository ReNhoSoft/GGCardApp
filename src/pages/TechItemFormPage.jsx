import { useRef, useState } from "react";
import { useStoreData } from "../helpers/customHooks";
import { transformDropDownData } from "../store/staticData";
import ImageSelect from "../tableLayout/imageSelect/ImageSelect";

export default function TechItemFormPage () {
    const [searchTags, staticData] = useStoreData();
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedChar, setSelectedChar] = useState(null);

    const dropDownData = transformDropDownData([selectedGame?.name], staticData);
    const charRef = useRef()

    const onGameChanged = (name, category) => {
        setSelectedGame({name, category});
        setSelectedChar(null);
    }
    const onDropdownChanged = (name, category) => {
        setSelectedChar({name, category});
    }
    return (
      <>
        <div>
          <label>Game</label>
          <ImageSelect ref={charRef}
            dropDownData={dropDownData.game}
            onItemSelected={onGameChanged}
            label="-- Select a Game --"
            category="game"
          />
          <label>Character</label>
          <ImageSelect
            dropDownData={dropDownData.character}
            selectedItem={selectedChar}
            onItemSelected={onDropdownChanged}
            label="-- Select a Character --"
            category="character"
          />
          <label>Type</label>
          <label>Works against</label>
        </div>
      </>
    );
}