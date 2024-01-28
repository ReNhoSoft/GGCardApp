import { respondToAuthChallenge, validateUser } from "../../repositories/cognitoHelper.js"

const authenticateUser = ({params, body} ) => {
    const {username, password} = body;
    return validateUser({username, password});
}

const updateUserPassword = ({params, body}) => {
    return respondToAuthChallenge(body);
}

export { authenticateUser, updateUserPassword }