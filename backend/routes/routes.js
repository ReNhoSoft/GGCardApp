import techItemTagsRoutes from "./techItemTags/route.js"
import techItemRoutes from "./techItem/route.js"
import { loginRoutes, updatePasswordRoute } from "./auth/route.js";

const ping ={
    get: () => {}
}

const resources = {
    "techitemtags": techItemTagsRoutes,
    "techitem": techItemRoutes,
    "login": loginRoutes,
    "password": updatePasswordRoute,
    ping
}

export default resources;