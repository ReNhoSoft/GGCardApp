import TechContainer from './tableLayout/techContainer/TechContainer';
import './App.css'
import { loadDataFromServer } from './helpers/fetcher';


function App() {
  loadDataFromServer();

  return (
    <>
     <h1 style={{textAlign:"center"}}>Neutral Tech</h1>
     <h6 style={{textAlign:"center", marginTop:"-1.5rem"}}>a fighting game tech database</h6>
     <TechContainer/>
    </>
  )
}

export default App
