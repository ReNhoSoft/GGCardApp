const twitterRegex = /(?:http)(?:s)?:\/\/(x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/([A-Za-z0-9]+)/;
const youtubeRegex = /(http)(s)?:\/\/(www.)?youtube\.com\/watch\?v\=([A-Za-z0-9]+)/

function isMediaLinkValid(link) {
  if(twitterRegex.test(link) || youtubeRegex.test(link)) {
    return true;
  }

  return false;
}

function parseMediaLink(link) {
  if(twitterRegex.test(link)) {
    const matches = twitterRegex.exec(link);
    return {
      source: matches[matches.length-1],
      type: "twitter"
    }
  }
  if(youtubeRegex.test(link)) {
    const matches = youtubeRegex.exec(link);
    return {
      source: matches[matches.length-1],
      type: "youtube"
    }
  }
  throw new Error("Invalid link");
}

function transformDropDownData(selectedItems = [], staticData) {
    const result = {};
    for(let i = 0; i< staticData.length; i++) {
      const entry = staticData[i];
      const values = [];
      if(entry.type == "fixed") {
        values.push(...entry.values.map(v => v.value));
      } else if(entry.type == "dynamic") {
        values.push(...entry.valueSets.filter(vs => !vs.dependsOn || selectedItems.includes(vs.dependsOn)).map(vs => vs.values.map(v => v.value)).flat(2));
      }
      result[entry.category] = values;
    }
    return result;
  }

  export { transformDropDownData, isMediaLinkValid, parseMediaLink }