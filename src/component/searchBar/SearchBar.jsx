import { useRef } from "react";
import {Input} from '@mui/base'
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/searchData";
import SearchTag from "./SearchTag";
import SearchTagList from "./SearchTagList";

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
      <div>
        <div className="mt-12 mb-12 ">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addSearchTag(event);
            }}
            ref={formRef}
          >
            <Input
              slotProps={{ input: { className: "CustomInput", autocomplete:"off"} }}
              placeholder="Search tags"
              name="tagInput"
            ></Input>
          </form>
          <SearchTagList tags={tags} onTagRemoved={removeSearchTag} onTagsCleared={clearSearchTags}/>
        </div>
      </div>
    );
}