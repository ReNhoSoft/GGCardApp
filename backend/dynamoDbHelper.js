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

export { queryTechItemsTag, getTechItemTagsByCategory, getTechItems }