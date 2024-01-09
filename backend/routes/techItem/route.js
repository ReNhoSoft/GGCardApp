import { createTechItem, getTechItem } from "./techItemService.js";

const route = {
    get: getTechItem,
    post: createTechItem
}

export default route