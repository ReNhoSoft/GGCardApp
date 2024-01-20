import { authenticateUser } from "./authService.js"

const loginRoutes = {
    post: authenticateUser
}

export { loginRoutes }