import TechContainer from './tableLayout/techContainer/TechContainer';
import CreateFormModal from './tableLayout/createFormModal/CreateFormModal';
import { useLoadDataFromServer } from './helpers/apiRequestHelper.js';
import Header from './Header.jsx';
import { useRef } from 'react';
import './App.css'
import { useSelector } from 'react-redux';
import SearchBar from './tableLayout/searchBar/SearchBar.jsx';


function App() {
  const searchTags = useSelector(state => state.tags.searchTags);
  const isLoading = useLoadDataFromServer(searchTags);
  const formRef = useRef();

  function onClickAddItem(event) {
    formRef.current.showModal();
  }


  return (
    <>
     <Header onClickAdd={onClickAddItem}/>
     <SearchBar/>
     {isLoading && <img className="loaderIcon" src='/loader.gif'/>}
     {!isLoading && <TechContainer/> }
     <CreateFormModal ref={formRef}/>
    </>
  )
}

export default App
