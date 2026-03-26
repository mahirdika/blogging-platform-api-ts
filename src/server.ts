import express from "express";
import cors from "cors";
import CONFIG from "./config/environment.js";
import routes from "./routes/index.js";
import DBConnect from "./utils/db.connect.js";

const app = express()
const port = CONFIG.PORT

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await DBConnect()

routes(app)

app.listen(port, () => {
    console.log(`Menjalankan server di port ${port}`)
})
