import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import jwtKeys from "./jwtkeys.json" assert { type: "json" };
import {
  ChallengeNameType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const USER_POOL_ID = "us-east-1_vcy9RHsJ0";
const CLIENT_ID = "32vfs35e0ujusmfhe8ni5kluqb";
const ISS  = "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_vcy9RHsJ0"

const respondToAuthChallenge = ({ username, password, session }) => {
  const client = new CognitoIdentityProviderClient({});

  const command = new RespondToAuthChallengeCommand({
    ChallengeName: ChallengeNameType.NEW_PASSWORD_REQUIRED,
    ChallengeResponses: {
      USERNAME: username,
      NEW_PASSWORD: password,
    },
    ClientId: CLIENT_ID,
    UserPoolId: USER_POOL_ID,
    Session: session,
  });

  return client.send(command);
};
/** snippet-end:[javascript.v3.cognito-idp.actions.RespondToAuthChallenge] */

const validateUser = async ({ username, password }) => {
  const client = new CognitoIdentityProviderClient({});

  const input = {
    AuthFlow: "USER_PASSWORD_AUTH",
    AuthParameters: {
      PASSWORD: password,
      USERNAME: username,
    },
    ClientId: CLIENT_ID,
  };
  const command = new InitiateAuthCommand(input);
  const response = await client.send(command);
  if (
    response.ChallengeName &&
    response.ChallengeName == "NEW_PASSWORD_REQUIRED"
  ) {
    //TODO: Return challenge status and session value, prompt user to enter new password
  }
  //   const response2 = await respondToAuthChallenge({
  //     clientId: "32vfs35e0ujusmfhe8ni5kluqb",
  //     username: "renosoft@gmail.com",
  //     password: "Millicent_88",
  //     userPoolId: "us-east-1_vcy9RHsJ0",
  //     session: response.Session
  //   });
  //   console.log(response2)

  const validationResult = await validateAuthToken(response.AuthenticationResult.AccessToken);
  if(validationResult.err) {
    throw new Error(validationResult.err)
  }

  return { ...validationResult, accessToken:response.AuthenticationResult.AccessToken} ;
};

const validateAuthToken = (accessToken) => {
  const key = JSON.parse(atob(accessToken.split(".")[0]));
  const jwk = jwtKeys.keys.find((element) => element.kid == key.kid);
  const pem = jwkToPem(jwk);
  const currentTime = Math.round(Date.now() / 1000);
  return new Promise((resolve, reject) => {
    jwt.verify(
    accessToken,
    pem,
    { algorithms: ["RS256"] },
    (err, decodedToken) => {
      console.log(err, decodedToken);
      if(err) {
        resolve( { message: "Error encountered during decoding", err});
      }

      // Validate data on the token
      if(decodedToken.client_id == CLIENT_ID && decodedToken.iss == ISS && decodedToken.exp > currentTime) {
        resolve({ message: "Authenticated" });
      }
      resolve( {message: "Token is invalid", err: "Token failed validation" });
    }
  )});
};
export { respondToAuthChallenge, validateUser, validateAuthToken };
