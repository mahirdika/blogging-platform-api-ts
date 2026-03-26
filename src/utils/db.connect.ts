import mongoose from "mongoose";                
import CONFIG from "../config/environment.js";

const DBConnect = async () => {
    try {
        await mongoose.connect(`${CONFIG.DB}`)
        console.log("Terhubung dengan MongoDB");
    } catch (error) {
        console.log("Tidak berhasil terhubung dengan MongoDB");
        console.log(error);
        process.exit(1);
    }
}

export default DBConnect

