import { useSelector } from "react-redux";
import { useLoadDataFromServer } from "../helpers/apiRequestHelper";
import SearchBar from "../tableLayout/searchBar/SearchBar";
import TechContainer from "../tableLayout/techContainer/TechContainer";
import Header from "../Header";
import CreateFormModal from "../tableLayout/createFormModal/CreateFormModal";
import { useRef } from "react";

export default function MainPage() {
  const searchTags = useSelector((state) => state.tags.searchTags);
  const isLoading = useLoadDataFromServer(searchTags);
  const formRef = useRef();

  const loaderCss = {
      maxWidth: '5rem',
      margin:'auto',
      display:'flex',
      marginTop:'5rem',
  }
  function onClickAddItem(event) {
    formRef.current.showModal();
  }

  return (
    <>
      <Header onClickAdd={onClickAddItem} />
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
