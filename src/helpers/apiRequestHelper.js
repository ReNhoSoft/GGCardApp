import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchData";
import { getToken, setToken } from "./authenticationHelper";

const apiBaseUrl = "https://neutraltech.renhosoft.net";

export function useLoadDataFromServer(searchTags) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatcher = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    loadDataFromAWS(searchTags).then((techItems) => {
      dispatcher(searchActions.setTechItems(techItems));
      setIsLoading(false);
    });
  }, [searchTags]);

  return isLoading;
}

export function parseTechItemsData(techItems) {
  if (!techItems || techItems.length == 0) {
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
      tags: tagMap,
    });
  });
  return result;
}

async function loadDataFromAWS(tags) {
  // TODO: Finish implementing query string mapping
  const tagArray = tags?.map((tag) => [tag.category, tag.name]);
  const queryString =
    tagArray && tagArray.length > 0
      ? "?tags=" + encodeURIComponent(JSON.stringify(tagArray))
      : "";
  return fetch(apiBaseUrl + "/techitemtags" + queryString)
    .then((rawFile) => {
      return rawFile.json();
    })
    .then((data) => {
      if (data.message == "Success") {
        let techItems = parseTechItemsData(data["tech-items"]);
        return techItems;
      } else {
        // TODO: Add error handling for data loading
      }
    });
}

export async function sendTechItem(techItem, method) {
  return fetch(apiBaseUrl + "/techitem", {
    headers: new Headers({
      "X-Authorization": getToken(),
      "Content-Type":"application/json",
    }),
    body: JSON.stringify(techItem),
    method: method,
  });
}

export async function loginUser(username, password) {
  return await fetch(apiBaseUrl + "/login", {
    body: JSON.stringify( {username, password}),
    method: "POST"
  }).then(async response => {
    const data = await response.json();
    if(response.status == 200) {
      setToken(data.accessToken, data.expiration);
    }
    return data;
  });
}
