import { useSelector } from "react-redux";
import { useLoadDataFromServer } from "../helpers/apiRequestHelper";
import SearchBar from "../tableLayout/searchBar/SearchBar";
import TechContainer from "../tableLayout/techContainer/TechContainer";

export default function MainPage() {
  const searchTags = useSelector((state) => state.tags.searchTags);
  const isLoading = useLoadDataFromServer(searchTags);

  return (
    <>
      <SearchBar />
      {isLoading && <img className="loaderIcon" src="/loader.gif" />}
      {!isLoading && <TechContainer />}
    </>
  );
}
