import techItemTagsRoutes from "./techItemTags/route.js"
import techItemRoutes from "./techItem/route.js"


const ping ={
    get: () => {}
}

const resources = {
    "techitemtags": techItemTagsRoutes,
    "techitem": techItemRoutes,
    ping
}

export default resources;