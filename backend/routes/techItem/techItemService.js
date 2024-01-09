import ShortUniqueId from "short-unique-id";
import {
  putTechItem,
  putTechItemTag,
  queryTechItem,
  queryTechItemsTag,
  updateTechItemTag,
} from "../../repositories/dynamoDbHelper.js";

const uid = new ShortUniqueId({ length: 8 });

const getTechItem = async ({ id }) => {
  if (!id) {
    throw Error("No tech-item Id was provided");
  }
  console.log(`Retrieving item with id: ${id}`);

  const techItem = await queryTechItem(id);
  console.log("Item found: ", techItem);
  return techItem;
};

const createTechItem = async (params, { description, media, name, tags }) => {
  // Validate input
  console.log(description, media, name, tags);
  if (!(description && media && name && tags)) {
    throw Error("Missing required fields in parameters");
  }
  // Create new object with only the required properties
  const techItem = {
    id: uid.rnd(),
    description,
    media,
    name,
    tags,
  };

  await techItem.tags.forEach(async (tag) => {
    // For each tag, validate if the mapping exists in tech-item-tags
    console.log(`Validating tag exists: ${tag.category} ${tag.value}`);
    const newTag = { category: tag.category, name: tag.value };
    const mappingDetails = await queryTechItemsTag(newTag);
    if (mappingDetails) {
      // If it does, add a mapping to the new tech item
      console.log("Tag exists, updating mapping");
      if (!mappingDetails["tech-items"].has(techItem.id)) {
        mappingDetails["tech-items"].add(techItem.id);
        updateTechItemTag(mappingDetails);
      }
    } else {
      // else, create a new entry
      console.log(`Tag is new, creating entry`);
      newTag["tech-items"] = (new Set()).add(techItem.id);

      putTechItemTag(newTag);
    }
  });

  await putTechItem(techItem);

  return techItem;
};

export { getTechItem, createTechItem };
