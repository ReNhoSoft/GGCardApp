import { useRef, useImperativeHandle, forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CreateFormModal.module.css"
import { sendTechItem } from "../../helpers/apiRequestHelper";
import { isMediaLinkValid, parseMediaLink } from "./CreateFormModal.util";
import { searchActions } from "../../store/searchData";
import { transformDropDownData } from "../../store/staticData";

const CreateFormModal = forwardRef((props, ref) => {

    // Expose functions to parent elements
    useImperativeHandle(ref, () => {
      return {
        showModal() {
          dialogRef.current.showModal();
        },
        hideModal() {
          dialogRef.current.close();
        }
      };
    }, []);

    
    // Declare hooks to be used elsewhere
    const formRef = useRef();
    const dialogRef = useRef();
    const dispatcher = useDispatch();
    const staticData = useSelector(state => state.static);
    const [dropDownData, setDropDownData] = useState(transformDropDownData(["Guilty Gear Xrd"], staticData));
    const [customTagsCount, setCustomTagsCount] = useState(0);

    // Util functions
    const getFormProp = (propValue) => {
        return formRef?.current?.elements[propValue]?.value;
    } 

    const createTag = (category, value) => {
      return {
        category,
        value
      }
    }

    const onGameChanged = (event) => {
      const game = getFormProp("tiGame");
      setDropDownData(transformDropDownData([game], staticData));
    }

    const onCancel = (event) => {
      setCustomTagsCount(0);
      dialogRef.current.close();
    }

    const onAddCustomTag = (event) => {
      setCustomTagsCount(count => { count= count+1;  return count;})
      event.preventDefault();
    }

    const onRemoveCustomTag = (event) => {
      setCustomTagsCount(count => { count= count-1; return count;});
      event.preventDefault();
    }
    
    const onSubmit = async (event) => {
        event.preventDefault();
        // Compile all the form details, create the object and send
        const name = getFormProp("tiName");
        const description = getFormProp("tiDescription");
        const mediaValue = getFormProp("tiMediaValue");
        const game = getFormProp("tiGame");
        const type = getFormProp("tiType");
        const difficulty = getFormProp("tiDifficulty");
        const character = getFormProp("tiCharacter");
        const vs = getFormProp("tiVs");
        const damage = getFormProp("tiDamage");
        const techItem = {
          name,
          description,
          damage,
          tags: [
            createTag("game", game),
            createTag("character", character),
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
        dialogRef.current.close();
    }
    

    return (
      <dialog ref={dialogRef}>
        <form ref={formRef}>
          <div className={classes.FormContainer}>
            <div className={classes.Row}>
              <div className={classes.TagSelect}>
                <label>Game</label>
                <select title="game" name="tiGame" onChange={onGameChanged}>
                  {dropDownData.game.map((value, index) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </div>
              <div className={classes.TagSelect}>
                <label>Type</label>
                <select title="type" name="tiType">
                  {dropDownData.type.map((value) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={classes.Row}>
              <div className={classes.TagSelect}>
                <label>Character</label>
                <select title="character" name="tiCharacter">
                  {dropDownData.character.map((value) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </div>
              <div className={classes.TagSelect}>
                <label>Works On</label>
                <select title="character" name="tiVs">
                  <option>Everyone</option>
                  {dropDownData.character.map((value) => (
                    <option key={value.value}>{value.value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label>Difficulty </label>
              <select title="difficulty" name="tiDifficulty">
                {dropDownData.difficulty.map((value) => (
                  <option key={value.value}>{value.value}</option>
                ))}
              </select>
            </div>
            <div>
              <div>
                <input
                  name="tiName"
                  required={true}
                  placeholder="Title"
                ></input>
              </div>
              <div>
                <textarea
                  name="tiDescription"
                  required={true}
                  placeholder="Description"
                ></textarea>
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
              <div >
                {customTagsCount > 0 && new Array(customTagsCount).fill(0).map((tag, index) => (
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
                  {customTagsCount > 0 && <button onClick={onRemoveCustomTag}>Remove tag</button> }
                </div>
              </div>
              <hr/>
              <button onClick={onSubmit}>Submit</button>
              <button onClick={onCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </dialog>
    );
});

export default CreateFormModal;