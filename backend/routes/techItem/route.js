import { createTechItem, getTechItem, deleteTechItem } from "./techItemService.js";

const route = {
    get: getTechItem,
    post: createTechItem,
    delete: deleteTechItem
}

export default route