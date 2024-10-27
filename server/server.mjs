import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './db/conn.mjs'

import notes from './models/note.js'

const router = express.Router();
router.route("/note").put(function(req, res) {
  console.log(req.body);
  notes.create([
    {
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
    }
  ])
  res.json('nice!')
});
router.route("/note").get(function(req, res) {
  notes.find({}).then(function(notes) {
    var noteMap = {};

    notes.forEach(function(note) {
      noteMap[note._id] = note;
    });

    res.send(noteMap);
  });
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
