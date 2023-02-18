import mongoose from 'mongoose'

const NoteModel = new mongoose.Schema(
    {
        _id: {
            type: String
        },
        title: {
            type: String
        },
        text: {
            type: String
        },
        color: {
            type: String
        },
        background: {
            type: String
        },
    },
    {
        collection: 'notes',
        timestamps: true
    }
)

export default mongoose.model("notes", NoteModel)