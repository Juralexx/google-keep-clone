import NoteModel from '../models/note.model.js'

export const getAllNotes = (req, res) => {
    NoteModel.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error to get data : ' + err)
        }
    })
}

/**
 * 
 */

export const findNoteById = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('Unknown ID : ' + req.params.id)
    }
    NoteModel.findById({ _id: req.params.id },
        (err, docs) => {
            if (!err) {
                res.send(docs)
            } else {
                console.log('Unknown URL : ' + err)
            }
        }).select()
}

/**
 * 
 */

export const createNote = async (req, res) => {
    await NoteModel.create({
        _id: req.body._id,
        title: req.body.title,
        text: req.body.text,
        color: req.body.color,
        background: req.body.background
    })
        .then(docs => {
            return res.send(docs)
        })
        .catch(err => {
            return res.status(400).send({ message: err })
        })
}

/**
 * 
 */

export const updateNote = async (req, res) => {
    const { title, text, color, background } = req.body

    await NoteModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                title: title,
                text: text,
                color: color,
                background: background,
            }
        },
        {
            new: true
        },
    )
        .then(docs => res.send(docs))
        .catch(err => {
            return res.status(500).send({ message: err })
        })
}

/**
 * 
 */

export const deleteNote = async (req, res) => {
    await NoteModel.findByIdAndDelete({ _id: req.params.id })
        .then(docs => {
            res.send(docs)
        })
        .catch(err => {
            res.status(400).json({ message: err })
        })
}