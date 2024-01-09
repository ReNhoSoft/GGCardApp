import { useRef, useImperativeHandle, forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./CreateFormModal.module.css"
import { sendTechItem } from "../../helpers/apiRequestHelper";


const CreateFormModal = forwardRef((props, ref) => {

    // Expose functions to parent elements
    useImperativeHandle(ref, () => {
      return {
        showModal() {
          dialogRef.current.showModal();
        }
      };
    }, []);

    
    const formRef = useRef();
    const dialogRef = useRef();
    const staticData = useSelector(state => state.static);

    const [gameSelected, setSelectedGame ] = useState (null);

    function transformDropDownData(selectedItems = []) {
      const result = {};
      for(let i = 0; i< staticData.length; i++) {
        const entry = staticData[i];
        const values = [];
        if(entry.type == "fixed") {
          values.push(...entry.values.map(v => v.value));
        } else if(entry.type == "dynamic") {
          values.push(...entry.valueSets.filter(vs => !vs.dependsOn || selectedItems.includes(vs.dependsOn)).map(vs => vs.values.map(v => v.value)).flat(2));
        }
        result[entry.category] = values;
      }
      return result;
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

    const onGameChanged = (event) => {
      const game = getFormProp("tiGame");
      setSelectedGame(game);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(getFormProp("tiDescription"));
        // Compile all the form details, create the object and send
        const name = getFormProp("tiName");
        const description = getFormProp("tiDescription");
        const mediaValue = getFormProp("tiMediaValue");
        const game = getFormProp("tiGame");
        const type = getFormProp("tiType");
        const difficulty = getFormProp("tiDifficulty");
        const character = getFormProp("tiCharacter");
        const vs = getFormProp("tiVs");
        const techItem = {
          name,
          description,
          media: {
            type: "youtube",
            source: mediaValue
          },
          tags: [
            createTag("game", game),
            createTag("character", character),
            createTag("type", type),
            createTag("difficulty", difficulty),
            createTag("vs", vs)
          ]
        }
        console.log(techItem);
        sendTechItem(techItem, "POST");
        formRef.current.reset();
    }
    
    const dropDownData = transformDropDownData(["Guilty Gear Xrd"]);
    console.log("Dropdown data",dropDownData);

    return (
      <dialog ref={dialogRef}>
        <form ref={formRef}>
          <div className={classes.FormContainer}>
            <div className={classes.Row}>
              <div className={classes.TagSelect}>
                <label>Game</label>
                <select title="game" name="tiGame">
                  {dropDownData.game.map((value, index) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className={classes.TagSelect}>
                <label>Type</label>
                <select title="type" name="tiType">
                  {dropDownData.type.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={classes.Row}>
              <div className={classes.TagSelect}>
                <label>Character</label>
                <select title="character" name="tiCharacter">
                  {dropDownData.character.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className={classes.TagSelect}>
                <label>Against</label>
                <select title="character" name="tiVs">
                  <option>Everyone</option>
                  {dropDownData.character.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <select title="difficulty" name="tiDifficulty">
                {dropDownData.difficulty.map((value) => (
                  <option key={value}>{value}</option>
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
              <button onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </dialog>
    );
});

export default CreateFormModal;