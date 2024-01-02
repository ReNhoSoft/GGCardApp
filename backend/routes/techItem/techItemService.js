import ShortUniqueId from "short-unique-id";
import { putTechItem, putTechItemTag, queryTechItem, queryTechItemsTag, updateTechItemTag } from "../../repositories/dynamoDbHelper.js";
import { getTechItemsByTag } from "../techItemTags/techItemTagService.js";

const uid = new ShortUniqueId({ length: 10 });

const getTechItem = async ({ id }) => {
  if (!id) {
    throw Error("No tech-item Id was provided");
  }
  console.log(`Retrieving item with id: ${id}`);

  const techItem = await queryTechItem(id);
  console.log("Item found: ",techItem);
  return techItem;
};

const createTechItem = async ({description, media, name, tags}) => {
  // Validate input
  if(!(description && media && name && tags)) {
    throw Error("Missing required fields in parameters");
  }
  // Create new object with only the required properties
  const techItem = { 
    id:uid.rnd(),
    description,
    media,
    name,
    tags
  }

  await techItem.tags.forEach(async tag => {
  // For each tag, validate if the mapping exists in tech-item-tags
    const mappingDetails = await queryTechItemsTag({ category:tag.category, name: tag.value});
    if(mappingDetails) {
      // If it does, add a mapping to the new tech item
      if(!mappingDetails["tech-items"].has(techItem.id)) {
        mappingDetails["tech-items"].add(techItem.id);
        updateTechItemTag(mappingDetails);
      }
    } else {
      // else, create a new entry
      putTechItemTag({ category: tag.category, name: tag.value });
    }
  });
  
  putTechItem(techItem);
}

export { getTechItem, createTechItem };