import { queryTechItemsTag, getTechItemTagsByCategory, getTechItems } from "../../repositories/dynamoDbHelper.js";

const getTechItemsByTag = async ({tags}) => {
    const tagArray = JSON.parse(tags);

    //Retrieve tech item IDs from tech-item-tags for each tag
    let arrayTechItemIds = [];
    for(let i=0; i<tagArray.length; i++) {
        const [category, name] = tagArray[i];
        console.log(`Retrieving items for category: ${category} and name: ${name}`)
        arrayTechItemIds.push(await getTechItemIdsByTag(category, name));
    }
    //Get the tech items based on the list of IDs
    console.log(arrayTechItemIds)
    const techItemIds = intersectArrays(arrayTechItemIds);
    if(techItemIds.length == 0) {
        console.log("No ids matched for given tags");
        return [];
    }
    
    console.log("Retrieving tech items for ids: ", techItemIds);
    return await getTechItems(techItemIds);
}


const getTechItemIdsByTag= async (category, name) => {
    let techItemIds = [];
    if(name) {
        const techItemTag = await queryTechItemsTag(category, name);
        if(!techItemTag || !techItemTag["tech-items"]) {
            return techItemIds;
        }
        techItemIds.push(...techItemTag["tech-items"]);
    } else {
        const techItemTags = await getTechItemTagsByCategory(category);
        if(!techItemTags || techItemTags.length <= 0) {
            return techItemIds;
        }
        techItemTags.forEach(item => techItemIds.push(...item["tech-items"]));
    }
    console.log("TechItems", techItemIds);
    return techItemIds;
}

const intersectArrays = (arrays) => {
  var intersection = arrays[0].filter((id) => {
    for (let i = 1; i < arrays.length; i++) {
      if (!arrays[i].includes(id)) return false;
    }
    return true;
  });

  return Array.from(intersection);
};

export { getTechItemsByTag }