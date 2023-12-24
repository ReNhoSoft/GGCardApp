import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "./store/searchData";

export function loadDataFromServer() {
  const dispatcher = useDispatch();
  useEffect(() => {
    fetch("../data.json")
      .then((rawFile) => {
        return rawFile.json();
      })
      .then((data) => {
        let techItems = parseData(data.techItems);
        dispatcher(searchActions.setTechItems(techItems));
      });
  }, []);
}

function parseData(techItems) {

  let result = [];
  techItems.forEach((techItem, index) => {

    let tagMap = new Object();
    techItem.tags?.forEach((tag) => {
      if (tagMap[tag.category] != undefined) {
        tagMap[tag.category].push(tag.value);
      } else {
        tagMap[tag.category] = [tag.value];
      }
    });
    result.push({ 
        ...techItem,
        tags: tagMap
        
    });
  });
  return result;
}
