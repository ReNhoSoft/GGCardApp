import { queryTechItemsTag, getTechItemTagsByCategory, getTechItems } from "./dynamoDbHelper.js";

const getTechItemsByTag = async ({category, name}) => {
    if(!category) {
        throw Error("No tag category provided")
    }
    console.log(`Retrieving items for category: ${category} and name:${name}`)
    //Retrieve tech item IDs from tech-item-tags
    let techItemIds = [];
    if(name) {
        const techItemTag = await queryTechItemsTag(category, name);
        techItemIds.push(...techItemTag["tech-items"]);
    } else {
        const techItemTags = await getTechItemTagsByCategory(category);
        techItemTags.forEach(item => techItemIds.push(...item["tech-items"]));
    }

    //Get the tech items based on the list of IDs
    console.log(techItemIds)
    return await getTechItems(techItemIds);
}

const parseTechItem = (item) => {
    return {
        ...item,
        "tech-items": [...item["tech-items"]]
    }
}

export { getTechItemsByTag }