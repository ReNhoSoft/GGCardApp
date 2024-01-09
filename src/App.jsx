import TechContainer from './tableLayout/techContainer/TechContainer';
import './App.css'
import { loadDataFromServer } from './helpers/apiRequestHelper.js';
import CreateFormModal from './tableLayout/createFormModal/CreateFormModal';
import Header from './Header.jsx';
import { useRef } from 'react';


function App() {
  loadDataFromServer();
  const formRef = useRef();
  
  function onClickAddItem(event) {
    formRef.current.showModal();
  }

  return (
    <>
     <Header onClickAdd={onClickAddItem}/>
     <TechContainer/>
     <CreateFormModal ref={formRef}/>
    </>
  )
}

export default App
