
const express = require('express')
const mongoose = require('mongoose');
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/library")
}

const app = express();

// Author model
const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },

},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })

const Author = mongoose.model("author", authorSchema)

// books model
const bookSchema = new mongoose.Schema({
    book_name: { type: String, required: true },
    body: { type: String, required: true },
    checked: { type: Boolean, required: false, default: false },

    authorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author',
        required: true
    }],
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'section',
        required: true
    }
},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })

const Book = mongoose.model("book", bookSchema)

//Sections model

const sectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })
const Section = mongoose.model('section', sectionSchema)

app.use(express.json())
//__________________________CRUD operations for authors____________________________________________________________________

app.post("/authors", async (req, res) => {
    const author = await Author.create(req.body)
    return res.status(201).send({ author })
})
//all authers
app.get("/authors", async (req, res) => {
    const authors = await Author.find().lean().exec()
    return res.status(200).send({ authors })
})
//single auther
app.get("/authors/:id", async (req, res) => {
    const author = await Author.find(req.params.id).lean().exec()
    return res.status(200).send({ author })
})

//_________________________________CRUD operations for sections_____________________________________________________

app.post("/sections", async (req, res) => {
    const section = await Section.create(req.body)
    return res.status(201).send({ section })
})
app.get("/sections", async (req, res) => {
    const sections = await Section.find().lean().exec()
    return res.status(200).send({ sections })
})

//_______________________________CRUD operations for book___________________________________________________________

app.post("/books", async (req, res) => {
    const book = await Book.create(req.body)
    return res.status(201).send({ book })
})

app.get("/books", async (req, res) => {
    const books = await Book.find() //.populate("authorId").populate("sectionId").lean().exec()
    return res.status(200).send({ books })
})

app.patch('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
    return res.status(201).send({ book })
})


//____________________________________________________________________________________________________
//find by checked 
app.get("/books/checked", async (req, res) => {
    const books = await Book.find({ "checked": true }).lean().exec()
    return res.status(200).send({ books })
})


//find all books by authors id
app.get("/books/authors/:id", async (req, res) => {
    const books = await Book.find({ authorId:req.params.id}).populate({
        path:"authorId",
        select:"first_name"
    }).lean().exec()
    return res.status(200).send({ books })
});

//find books in sections by id
app.get("/books/section/:id", async (req, res) => {
    const book = await Book.find({ sectionId: req.params.id  }).populate("authorId").populate("sectionId").lean().exec()
    return res.status(200).send({ book })
});

//find the books that are not checked out
app.get("/books/section/checked/:id", async (req, res) => {
    const books = await Book.find({ $and: [{ "sectionId": { "_id": req.params.id } }, { "checked": false }] })
    .populate("authorId").populate("sectionId").lean().exec()
    return res.status(200).send({ books })
});

//find books of 1 author inside a section
app.get("/books/section/authors/:id", async (req, res) => {
    const books = await Book.find({  authorsId: req.params.id  }).populate("authorId").populate("sectionId").lean().exec()
    return res.status(200).send({ books })
})




app.listen(3535, async function () {
    await connect()
    console.log("listening on port 3535")
});