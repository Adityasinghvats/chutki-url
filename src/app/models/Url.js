import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        urlCode: {
            type: String,
            required: true,
            trim: true
        },
        longUrl: {
            type: String, 
            required: true,
            trim: true
        },
        shortUrl: {
            type: String, 
            required: true,
            trim: true 
        },
        date: {type: Date, default: Date.now}
    }
)
urlSchema.index({ urlCode: 1, shortUrl: 1 });
export default mongoose.model('Url', urlSchema)