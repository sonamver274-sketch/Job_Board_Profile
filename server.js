import dotenv from "dotenv"
dotenv.config()

import app from "./src/app.js";
import connectDb from "./src/db/db.js";

connectDb()

app.listen(process.env.PORT, () => {
    console.log("server is runing");
})

export default app