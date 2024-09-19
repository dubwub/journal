const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./model/dataSchema.js"); <- my schema file

app.use(express.json());
app.use(cors());


// DB config
const db = require('./config/keys').MongoURI; <- my password
mongoose.set('strictQuery', true);


// connect to mongo 
mongoose.connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => 
    console.log('MongoDB Connected'))
  .catch( error => 
    console.log(error)
  );

  // bodyparser gets the req.body
app.use(express.urlencoded({extended: false}));

app.get('/checkWalletAddress/:walletAddress', async (req, res) => {
  const { walletAddress } = req.params;
  const document = await User.findOne({ walletAddress });
  const exists = !!document;
  res.json({ exists });
});

app.post("/insert", async (req, res) => {
  const walletAddress = req.body.walletAddress;
 

  const formData = new User({
    walletAddress,
 
  });

  try {
    await formData.save();
    res.send("inserted data..");
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
