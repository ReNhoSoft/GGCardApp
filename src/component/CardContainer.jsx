import {useState, useEffect} from 'react'
import Masonry from '@mui/lab/Masonry';
import Card from './card/Card';
import _ from 'lodash';
import SearchBar from './searchBar/SearchBar';
import { useSelector } from 'react-redux';
import { filterTags } from '../store/utils';

export default function CardContainer() {
  const cards = useSelector(state => state.tags.cards);
  const searchTags = useSelector(state => state.tags.searchTags);

  const filteredCards = filterTags(cards, searchTags);

  return (
    <>
      <SearchBar />
      <div className="cardContainer">
        {filteredCards && filteredCards.length > 0 && (
          <Masonry columns={filteredCards.length < 3 ? filteredCards.length : 3} spacing={3}>
            {filteredCards.map((card, index) => {
              return (
                <Card card={card} key={card.header + index} order={index} />
              );
            })}
          </Masonry>
        )}
      </div>
    </>
  );
}