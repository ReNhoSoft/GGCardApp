import techItemTagsRoutes from "./techItemTags/route.js"
import techItemRoutes from "./techItem/route.js"
import { loginRoutes } from "./auth/route.js";

const ping ={
    get: () => {}
}

const resources = {
    "techitemtags": techItemTagsRoutes,
    "techitem": techItemRoutes,
    "login": loginRoutes,
    ping
}

export default resources;