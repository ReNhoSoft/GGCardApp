import { useSelector } from "react-redux";
import { useLoadDataFromServer } from "../helpers/apiRequestHelper";
import SearchBar from "../tableLayout/searchBar/SearchBar";
import TechContainer from "../tableLayout/techContainer/TechContainer";
import Header from "../Header";
import CreateFormModal from "../tableLayout/createFormModal/CreateFormModal";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const searchTags = useSelector((state) => state.tags.searchTags);
  const isLoading = useLoadDataFromServer(searchTags);
  const formRef = useRef();
  const navigator = useNavigate()

  const loaderCss = {
      maxWidth: '5rem',
      margin:'auto',
      display:'flex',
      marginTop:'5rem',
  }
  

  return (
    <>
      <Header />
      {isLoading && <img style={loaderCss} src="/loader.gif" />}
      {!isLoading && (
        <>
          
         
          <TechContainer />
          <CreateFormModal ref={formRef} />
        </>
      )}
    </>
  );
}
