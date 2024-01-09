import { handler } from "../index.js";
import event from "./localrun-data.json" assert { type: "json" };

console.log(handler(event));