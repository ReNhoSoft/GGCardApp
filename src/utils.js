const filterTags = (techItems, searchTags) => {
  if (!searchTags || searchTags.length < 1) {
    return techItems;
  }
  let result = techItems.filter((techItem) => {
    const find = searchTags.reduce((acc1, searchTag) => {
      return acc1 &&
        Object.values(techItem.tags).reduce((acc2, tagCollection) => {
          return acc2 || tagCollection.reduce((acc3, tag) => acc3 || tag.toLowerCase().includes(searchTag), false);
        }, false);
    }, true);
    return find;
  });
  return result;
};

export { filterTags };
