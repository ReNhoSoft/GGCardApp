import { useRef, useState } from "react";
import { useStoreData } from "../helpers/customHooks";
import { transformDropDownData } from "../store/staticData";
import ImageSelect from "../tableLayout/imageSelect/ImageSelect";
import Header from "../Header";
import CustomMarkdownEditor from "../tableLayout/customMarkdownEditor/CustomMarkdownEditor";
import { isMediaLinkValid, parseMediaLink } from "../tableLayout/createFormModal/CreateFormModal.util";
import { sendTechItem } from "../helpers/apiRequestHelper";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchData";

export default function TechItemFormPage () {
    const [searchTags, staticData] = useStoreData();
    const dispatcher = useDispatch();
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedChar, setSelectedChar] = useState(null);
    const [markdownValue, setMarkdownValue] = useState("");
    const dropDownData = transformDropDownData([selectedGame?.name], staticData);
    const charRef = useRef()
    const [customTagsCount, setCustomTagsCount] = useState(0);
    const formRef = useRef();

    const onGameChanged = (name, category) => {
        setSelectedGame({name, category});
        setSelectedChar(null);
    }
    const onDropdownChanged = (name, category) => {
        setSelectedChar({name, category});
    }

    const onAddCustomTag = (event) => {
      setCustomTagsCount(count => { count= count+1;  return count;})
      event.preventDefault();
    }

    const onRemoveCustomTag = (event) => {
      setCustomTagsCount(count => { count= count-1; return count;});
      event.preventDefault();
    }

    const getFormProp = (propValue) => {
      return formRef?.current?.elements[propValue]?.value;
    } 

    const createTag = (category, value) => {
      return {
        category,
        value
      }
    }

    const onSubmit = async (event) => {
      event.preventDefault();
      
      // Compile all the form details, create the object and send
      const name = getFormProp("tiName");
      const description = markdownValue;
      const mediaValue = getFormProp("tiMediaValue");
      const game = {category:selectedGame.category, value: selectedGame.name};
      const type = getFormProp("tiType");
      const difficulty = getFormProp("tiDifficulty");
      const character = {category:selectedChar.category, value: selectedChar.name};
      const vs = getFormProp("tiVs");
      const damage = getFormProp("tiDamage");
      const techItem = {
        name,
        description,
        damage,
        tags: [
          game,
          character,
          createTag("type", type),
          createTag("difficulty", difficulty),
          createTag("works on", vs)
        ]
      }

      createTag("works on", vs)
      for(let i = 0; i < customTagsCount; i++) {
        techItem.tags.push(createTag("other", getFormProp("tiCustomTag" + i)))
      }

      // TODO: Display validation errors
      if(!isMediaLinkValid(mediaValue)) {
        
        console.log("Invalid Media Link")
        return;
      }
      techItem["media"] = parseMediaLink(mediaValue);
      await sendTechItem(techItem, "POST");
      dispatcher(searchActions.addTechItem(techItem));
      
      formRef.current.reset();
    }

    const onCancel = () => {

    }

    return (
      <>
        <Header showSearchBar={false} />
        <form ref={formRef}
          style={{ width: "var(--width-sm)", margin: "auto", display: "block" }}
        >
          <div style={{ display: "flex", marginBottom:"10px" }}>
            <div style={{ width: "50%" }}>
              <LabelFormElement>Game</LabelFormElement>
              <ContentFormElement>
                <ImageSelect
                  ref={charRef}
                  dropDownData={dropDownData.game}
                  onItemSelected={onGameChanged}
                  label="-- Select a Game --"
                  category="game"
                />
              </ContentFormElement>
            </div>
            <div style={{ width: "50%" }}>
              <LabelFormElement>Character</LabelFormElement>
              <ContentFormElement>
                <ImageSelect
                  dropDownData={dropDownData.character}
                  selectedItem={selectedChar}
                  onItemSelected={onDropdownChanged}
                  label="- Select a Character -"
                  category="character"
                />
              </ContentFormElement>
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div style={{ width: "30%" }}>
              <LabelFormElement>Type</LabelFormElement>
              <ContentFormElement>
                <select title="type" name="tiType">
                  {dropDownData.type.map((value) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </ContentFormElement>
            </div>
            <div style={{ width: "30%" }}>
              <LabelFormElement>Works On</LabelFormElement>
              <ContentFormElement>
                <select title="character" name="tiVs">
                  <option>Everyone</option>
                  {dropDownData.character.map((value) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </ContentFormElement>
            </div>
            <div style={{ width: "30%" }}>
              <LabelFormElement>Difficulty </LabelFormElement>
              <ContentFormElement>
                <select title="difficulty" name="tiDifficulty">
                  {dropDownData.difficulty.map((value) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </ContentFormElement>
            </div>
          </div>
          <div>
            <div>
              <input name="tiName" required={true} placeholder="Title"></input>
            </div>
            <div>
              <CustomMarkdownEditor setValue={setMarkdownValue} />
            </div>
            <div>
              <input
                name="tiMediaValue"
                required={true}
                placeholder="Media Link"
              ></input>
            </div>
            <div>
              <input
                name="tiDamage"
                required={true}
                placeholder="Damage"
              ></input>
            </div>
            <hr></hr>
            <div>
              {customTagsCount > 0 &&
                new Array(customTagsCount).fill(0).map((tag, index) => (
                  <div style={{ display: "flex" }}>
                    <input
                      name={`tiCustomTag${index}`}
                      required={true}
                      placeholder="Custom tag"
                    ></input>
                  </div>
                ))}
              <div>
                <button onClick={onAddCustomTag}>Add tag</button>
                {customTagsCount > 0 && (
                  <button onClick={onRemoveCustomTag}>Remove tag</button>
                )}
              </div>
            </div>
            <hr />
            <button onClick={onSubmit}>Submit</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </>
    );
}

const LabelFormElement = ({children}) => {
  return (
    <div style={{width:"30%", display:"inline-flex"}}>
      <label style={{marginLeft:"auto", marginRight:"10px"}}>{children}</label>
    </div>
  )
}

const ContentFormElement = ({children}) => {
  return (
    <div style={{width:"50%", display:"inline-flex"}}>
      <div style={{marginRight:"auto", marginLeft:"5px"}}>{children}</div>
    </div>
  )
}