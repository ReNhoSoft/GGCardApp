import { getTechItemsByTag } from "./techItemService.js"

function get(params) {
    return getTechItemsByTag(params);
}

const techitemtags = {
    get
}

const ping ={
    get: () => {}
}

const resources = {
    techitemtags,
    ping
}

export default resources;