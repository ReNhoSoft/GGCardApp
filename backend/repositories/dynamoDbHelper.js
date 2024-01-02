import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, QueryCommand, BatchGetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const getTechItemTagsByCategory = async (category) => {
  if(!category) {
    return null;
  }
  const command = new QueryCommand({
    TableName:"tech-item-tags",
    KeyConditionExpression: "category = :category",
    ExpressionAttributeValues: {
      ":category":category
    }
  });
  
  const response = await docClient.send(command);
  if(response && response.Items) {
    return response.Items;
  }

  return null;
};

const queryTechItemsTag = async (category, name) => {
  const command = new GetCommand({
    TableName: "tech-item-tags",
    Key: {
      category: category,
      name: name
    },
  });
  
  const response = await docClient.send(command);
  if(response && response.Item) {
    return response.Item;
  }

  return null;
};

const putTechItemTag = async (techItemTag) => {
  const command = new PutCommand({
    Item: techItemTag,
    TableName: "tech-item-tags",
  });
  const response = await docClient.send(command);
  if(response.httpStatusCode == 200) {
    return "Succesfully added item"
  }
  throw new Error("Unable to create item for unknown reasons");
}

const updateTechItemTag = async (techItemTag) => {
  const command = new UpdateCommand({
    TableName: "tech-item-tags",
    Key: {
      category: techItemTag.category,
      name: techItemTag.name
    },
    UpdateExpression: "set tech-items = :items",
    ExpressionAttributeValues: {
      ":items": techItemTag["tech-items"],
    },
  });
  const response = await docClient.send(command);
  if(response.httpStatusCode == 200) {
    return "Succesfully added item"
  }

  throw new Error("Unable to update item");
}

const deleteTechItemTag = async (techItemTag) => {
  const command = new DeleteCommand({
    TableName: "tech-item-tags",
    Key: {
      category: techItemTag.category,
      name: techItemTag.name
    },
  });
  const response = await docClient.send(command);
}

const getTechItems = async (techItemIds) => {
  const command = new BatchGetCommand({
    RequestItems: {
      "tech-items": {
        Keys: techItemIds.map((id) => {return {
          id
        }}),
      },
    },
  });

  const response = await docClient.send(command);
  if (response && response.Responses) {
    return response.Responses;
  }

  return null;
};

const queryTechItem = async (techItemId) => {
  const command = new QueryCommand({
    TableName:"tech-items",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id":techItemId
    }
  });
  
  const response = await docClient.send(command);
  if(response && response.Items && response.Items.length > 0) {
    return response.Items[0];
  }

  return null;
}

const putTechItem = async (techItem) => {
  const command = new PutCommand({
    Item: techItem,
    TableName: "tech-items",
  });
  const response = await docClient.send(command);
  if(response.httpStatusCode == 200) {
    return "Succesfully added item"
  }
  throw new Error("Unable to create item for unknown reasons");
}

const updateTechItem = async (techItem) => {
  const command = new UpdateCommand({
    TableName: "tech-items",
    Key: {
      id: techItem.id,
    },
    UpdateExpression: "set tags = :tags, description = :description, #name = :name, media = :media",
    ExpressionAttributeValues: {
      ":tags": techItem.tags,
      ":name": techItem.name,
      ":media": techItem.media,
      ":description": techItem.description 
    },
    ExpressionAttributeNames: {
      "#name":"name"
    }
  });
  const response = await docClient.send(command);
  if(response.httpStatusCode == 200) {
    return "Succesfully added item"
  }
  return;
}

const deleteTechItem = async (techItem) => {
  const command = new DeleteCommand({
    TableName: "tech-items",
    Key: {
      id: techItem.id
    },
  });
  const response = await docClient.send(command);
}

export { queryTechItemsTag, getTechItemTagsByCategory, getTechItems, queryTechItem, putTechItem, putTechItemTag }