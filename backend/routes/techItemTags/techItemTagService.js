import { queryTechItemsTag, getTechItemTagsByCategory, getTechItems } from "../../repositories/dynamoDbHelper.js";

const getTechItemsByTag = async ({category, name}) => {
    if(!category) {
        throw Error("No tag category provided")
    }
    console.log(`Retrieving items for category: ${category} and name:${name}`)
    //Retrieve tech item IDs from tech-item-tags
    let techItemIds = [];
    if(name) {
        const techItemTag = await queryTechItemsTag(category, name);
        if(!techItemTag || !techItemTag["tech-items"]) {
            return null;
        }
        techItemIds.push(...techItemTag["tech-items"]);
    } else {
        const techItemTags = await getTechItemTagsByCategory(category);
        if(!techItemTags || techItemTags.length <= 0) {
            return null;
        }
        techItemTags.forEach(item => techItemIds.push(...item["tech-items"]));
    }

    //Get the tech items based on the list of IDs
    console.log(techItemIds)
    return await getTechItems(techItemIds);
}

export { getTechItemsByTag }