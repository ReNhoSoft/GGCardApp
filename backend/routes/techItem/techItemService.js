import ShortUniqueId from "short-unique-id";
import {
  putTechItem,
  putTechItemTag,
  queryTechItem,
  queryTechItemsTag,
  updateTechItemTag,
  deleteTechItem as deleteTechItemDB
} from "../../repositories/dynamoDbHelper.js";
import { validateAuthToken } from "../../repositories/cognitoHelper.js";

const uid = new ShortUniqueId({ length: 8 });
const twitterRegex = /(?:http)(?:s)?:\/\/(x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/([A-Za-z0-9]+)/;
const youtubeRegex = /(http)(s)?:\/\/(www.)?youtube\.com\/watch\?v\=([A-Za-z0-9]+)/

const getTechItem = async ({ params }) => {
  const id = { params };
  if (!id) {
    throw Error("No tech-item Id was provided");
  }
  console.log(`Retrieving item with id: ${id}`);

  const techItem = await queryTechItem(id);
  console.log("Item found: ", techItem);
  return techItem;
};

const createTechItem = async ({params, body, token}) => {
  const tokenValidation = await validateAuthToken(token);
  if(!(tokenValidation.message == "Authenticated")) {
    console.info(tokenValidation);
    throw new Error(tokenValidation.err);
  }

  const { description, media, name, tags, damage } = body;
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
    damage
  };

  for(let i=0; i<techItem.tags.length; i++) {
    const tag = techItem.tags[i];

    // For each tag, validate if the mapping exists in tech-item-tags
    console.log(`Validating tag exists: ${tag.category} : ${tag.value}`);

    const newTag = { category: tag.category, name: tag.value };
    const mappingDetails = await queryTechItemsTag(newTag.category, newTag.name);
    if (mappingDetails) {
      if(!mappingDetails["tech-items"]) mappingDetails["tech-items"] = new Set();

      // If it does, add a mapping to the new tech item
      console.log("Tag exists, updating mapping");
      if (!mappingDetails["tech-items"].has(techItem.id)) {
        mappingDetails["tech-items"].add(techItem.id);
        await updateTechItemTag(mappingDetails);
      }
    } else {
      // else, create a new entry
      console.log(`Tag is new, creating entry`);
      newTag["tech-items"] = (new Set()).add(techItem.id);

      await putTechItemTag(newTag);
    }
  }
  console.log("Put techItem");
  await putTechItem(techItem);

  return techItem;
};

const deleteTechItem = async ({ params, body}) => {
  const tokenValidation = await validateAuthToken(token);
  if(!(tokenValidation.message == "Authenticated")) {
    console.info(tokenValidation);
    throw new Error(tokenValidation.err);
  }
  
  const { id } =  params ;
  console.log("Removing tech item with id "+ id);
  const techItem = await queryTechItem(id);
  // for each tag, retrieve it and delete the current id from the list
  console.log("Retrieved tech item");
  for(let i=0; i<techItem.tags.length; i++) {
    const tag = techItem.tags[i];

    // For each tag, validate if the mapping exists in tech-item-tags
    console.log(`Validating tag exists: ${tag.category} : ${tag.value}`);

    const newTag = { category: tag.category, name: tag.value };
    const mappingDetails = await queryTechItemsTag(newTag.category, newTag.name);
    if (mappingDetails) {
      if(!mappingDetails["tech-items"]) mappingDetails["tech-items"] = new Set();

      if (mappingDetails["tech-items"].has(techItem.id)) {
        console.log("Tag exists, removing mapping");
        mappingDetails["tech-items"].delete(techItem.id);
        if(mappingDetails["tech-items"].size == 0) mappingDetails["tech-items"] = null;
        await updateTechItemTag(mappingDetails);
      }
    } 
  }
  const resultMessage = await deleteTechItemDB(id);
  return { message: resultMessage };
}

export { getTechItem, createTechItem, deleteTechItem };
