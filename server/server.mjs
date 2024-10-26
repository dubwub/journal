import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './db/conn.mjs'

import notes from './models/note.js'

const router = express.Router();
router.route("/note").get(function(req, res) {
  notes.insertMany([
    {
      id: "0",
      title: "test",
      body: "body",
    }
  ])
  res.json('nice!')
});

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
