const filterTags = (cards, searchTags) => {
    let result= cards.filter( (card) => {
      const find = searchTags.reduce((acc1, searchTag) => 
          acc1 &&
          card.tags.reduce((acc2, tag) => 
            acc2 || tag.toLowerCase().includes(searchTag)
          , false)
      , true)
      return find;
    });
  
    return result;
  }

export {
    filterTags 
}