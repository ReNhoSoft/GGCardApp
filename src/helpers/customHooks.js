import { useSelector } from "react-redux";
import { transformDropDownData } from "../store/staticData";


export function useStoreData() {
    const searchTags = useSelector(state => state.tags.searchTags);
    const staticData = useSelector((state) => state.static);

    return [ searchTags, staticData];
}