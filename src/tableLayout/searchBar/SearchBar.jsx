import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/searchData"
import SearchTagList from "../searchTagList/SearchTagList";
import classes from "./SearchBar.module.css";

export default function SearchBar() {
    const formRef = useRef();
    const tags = useSelector(state => state.tags.searchTags);
    const dispatcher = useDispatch();

    const addSearchTag = () => {
        dispatcher(searchActions.add(formRef.current.tagInput.value));
        formRef.current.tagInput.value = '';
    }

    const removeSearchTag = (event, tag) => {
      dispatcher(searchActions.remove(tag));
    }

    const clearSearchTags = () => {
      dispatcher(searchActions.clear());
    }

    return (
      <div >
        <div className={classes.searchBar}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addSearchTag(event);
            }}
            ref={formRef}
          >
            <input className={classes.searchInput}
              placeholder="Search tags"
              name="tagInput"
            ></input>
          </form>
          <SearchTagList tags={tags} onTagRemoved={removeSearchTag} onTagsCleared={clearSearchTags}/>
        </div>
      </div>
    );
}