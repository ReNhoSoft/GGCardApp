const twitterRegex = /(?:http)(?:s)?:\/\/(x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/([A-Za-z0-9]+)/;
const youtubeRegex = /(http)(s)?:\/\/(www.)?youtube\.com\/watch\?v\=([A-Za-z0-9]+)/
const streamableRegex = /(http)(s)?:\/\/(www.)?streamable\.com\/([A-Za-z0-9]+)/

function isMediaLinkValid(link) {
  if(twitterRegex.test(link) || youtubeRegex.test(link) || streamableRegex.test(link)) {
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
  if(streamableRegex.test(link)) {
    const matches = streamableRegex.exec(link);
    return {
      source: matches[matches.length-1],
      type: "streamable"
    }
  }
  throw new Error("Invalid link");
}

  export { isMediaLinkValid, parseMediaLink }