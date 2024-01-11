import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchData";

export function useLoadDataFromServer(searchTags) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatcher = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    loadDataFromAWS(searchTags).then( techItems => {
      dispatcher(searchActions.setTechItems(techItems));
      setIsLoading(false);
    })
  }, [searchTags]);

  return isLoading;
}

export function parseTechItemsData(techItems) {

  if(!techItems || techItems.length == 0) {
    return null;
  }

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

async function loadDataFromAWS(tags) {
  // TODO: Finish implementing query string mapping
  const tagArray = tags?.map(tag => [tag.category, tag.name]);
  const queryString = tagArray && tagArray.length > 0 ? "?tags=" + encodeURIComponent(JSON.stringify(tagArray)) : "";
  return fetch("https://neutraltech.renhosoft.net/techitemtags" + queryString)
      .then((rawFile) => {
        return rawFile.json();
      })
      .then((data) => {
        if(data.message == "Success") {
          let techItems = parseTechItemsData(data.data["tech-items"]);
          return techItems;
        } else {
          // TODO: Add error handling for data loading
        }
      });
}

export async function sendTechItem(techItem, method) {
  return fetch("https://neutraltech.renhosoft.net/techitem", {
    body: JSON.stringify(techItem),
    method: method
  }).then( (data) => console.log(data));
}