import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('working')
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(8080, console.log(`server running in ${process.env.NODE_ENV}`))