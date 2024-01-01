import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchData";
import { getTechItemsByTag } from "../../backend/techItemService";

export function loadDataFromServer() {
  const dispatcher = useDispatch();
  useEffect(() => {
    loadDataFromAWS().then( techItems => {
      console.log(techItems);
      dispatcher(searchActions.setTechItems(techItems));
    })
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

async function loadDataFromFile() {
  return fetch("../data.json")
      .then((rawFile) => {
        return rawFile.json();
      })
      .then((data) => {
        let techItems = parseData(data.techItems);
        return techItems;
      });
}

async function loadDataFromAWS() {
  return fetch("https://neutraltech.renhosoft.net/techitemtags?category=game")
      .then((rawFile) => {
        return rawFile.json();
      })
      .then((data) => {
        if(data.message == "Success") {
          console.log(data.data)
          let techItems = parseData(data.data["tech-items"]);
          return techItems;
        } else {
          // TODO: Add error handling for data loading
        }
      });
}

async function loadDataFromDynamo() {
  return getTechItemsByTag({category: "game"});
}