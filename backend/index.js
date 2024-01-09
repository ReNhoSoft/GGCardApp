import routes from "./routes/routes.js";

async function handler(event) {
  try {
    console.log("Event:",event)
    const { httpMethod, path } = event.requestContext;
    const params = event.queryStringParameters;
    const bodyContent = event.body ? JSON.parse(event.body) : null;
    console.log(bodyContent);
    if (!httpMethod || !path) {
      return generateResponse(404, "Invalid input", { httpMethod, path });
    }

    const resourceName = path.split("/")[1].toLowerCase();
    console.log(`Recieved request for resource ${resourceName} and method ${httpMethod}`);
    const resource = routes[path.split("/")[1].toLowerCase()];
    if (!resource) {
        console.log("Cant find requested resource");
        return generateResponse(404, "Cant find requested resource", {
        httpMethod,
        path,
      });
    }

    const action = resource[httpMethod.toLowerCase()];
    if (!action) {
      return generateResponse(
        404,
        "Resource doesnt support the requested method",
        { httpMethod, path }
      );
    }
    const result = await action(params, bodyContent );
    console.log("Success", result);
    return generateResponse(200, "Success", result);
  } catch (error) {
    console.error(error);
    return generateResponse(500, "Unexpeted error encountered", error);
  }
}

function generateResponse(code, message, data) {
  return {
    statusCode: code,
    isBase64Encoded: false,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": '*'
    },
    body: JSON.stringify({
      message,
      data: { ...data },
    }),
  };
}

export { handler };
