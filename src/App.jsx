import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from './store/searchData';
import TechContainer from './tableLayout/techContainer/TechContainer';
import _ from 'lodash'
import './App.css'


function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    fetch("../data.json")
      .then((rawFile) => {
        return rawFile.json();
      })
      .then((data) => {
        dispatcher(searchActions.setTechItems(_.clone(data.techItems)));
      });
  }, []);

  return (
    <>
     <h1 style={{textAlign:"center"}}>Neutral Tech</h1>
     <h6 style={{textAlign:"center", marginTop:"-1.5rem"}}>a fighting game tech database</h6>
     <TechContainer/>
    </>
  )
}

export default App
