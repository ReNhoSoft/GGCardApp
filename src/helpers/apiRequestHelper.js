import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchData";
import { getTechItemsByTag } from "../../backend/routes/techItemTags/techItemTagService";

export function loadDataFromServer() {
  const dispatcher = useDispatch();
  useEffect(() => {
    loadDataFromAWS().then( techItems => {
      dispatcher(searchActions.setTechItems(techItems));
    })
  }, []);

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

async function loadDataFromAWS() {
  return fetch("https://neutraltech.renhosoft.net/techitemtags?category=game")
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