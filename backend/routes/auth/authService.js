import { validateUser } from "../../repositories/cognitoHelper.js"

const authenticateUser = ({params, body} ) => {
    const {username, password} = body;
    return validateUser({username, password});
}

export { authenticateUser }