import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchInputTag.module.css" 
import { searchActions } from "../../store/searchData";
import { useRef } from "react";

export default function SearchInputTag() {
  const dispatcher = useDispatch();
  const formRef = useRef();
  const allTags = useSelector(state => state.tags.searchTags);
  const otherTags = allTags.filter(tag => tag.category == "other");

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(allTags)
    dispatcher(searchActions.addTag({category: "other", name:formRef.current.elements["tagName"].value}))
    formRef.current.reset();
  }

  const onRemoveTag = (tag) => {
    dispatcher(searchActions.removeTag(tag));
  }

    return (
      <div style={{ display: "flex" }} onSubmit={onSubmitForm} >
        <form style={{ margin: "auto" }} ref={formRef}>
          <input
            name="tagName"
            className={classes.input}
            placeholder="custom tag"
          />
        </form>
        {otherTags.map((tag) => (
          <>
            <div className={classes.inputTag}>{tag.name}</div>
            <div className={classes.inputTagClose} onClick={() => onRemoveTag(tag)}>x</div>
          </>
        ))}
      </div>
    );
}