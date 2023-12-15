import './App.css'
import _ from 'lodash';
import CardContainer from './component/CardContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { searchActions } from './store/searchData';

function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    fetch("../data.json")
      .then((rawFile) => {
        return rawFile.json();
      })
      .then((data) => {
        dispatcher(searchActions.setCards(_.clone(data.cards)));
      });
  }, []);

  return (
    <main>
      <CardContainer/>
    </main>
  );
}

export default App
