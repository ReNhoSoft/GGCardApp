import { authenticateUser, updateUserPassword } from "./authService.js"

const loginRoutes = {
    post: authenticateUser,
}
const updatePasswordRoute ={
    post: updateUserPassword
}
export { loginRoutes, updatePasswordRoute }