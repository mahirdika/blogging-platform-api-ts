import express from "express";
import cors from "cors";
import CONFIG from "./config/environment.js";

const app = express()
const port = CONFIG.PORT

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Menjalankan server di port ${port}`)
})
