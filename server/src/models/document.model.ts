import mongoose, {Schema, Document} from "mongoose";

export interface IDocument extends Document{
    title: String;
    content: String
    createdAt: Date;
    updatedAt: Date;
}

const DocumentSchema : Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            default: "Untitled Document",
        },
        content: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

export default mongoose.model<IDocument>("Document", DocumentSchema);