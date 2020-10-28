import express, { json } from "express"
import mongoose from "mongoose"
import Cards from "./dbCards.js"
import cors from 'cors'

// App config
const app = express()
const port = 3001
const connection_URL = 'mongodb+srv://admin:PiDCM8belnVeyj2X@cluster0.5mgkk.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Middleware
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(connection_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected")
})

// API endpoint
app.get("/", (req, res) => res.status(200).send("Hello World! STJ "))

app.post("/tinder/addCard", (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost ${port}`))


