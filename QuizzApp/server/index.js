const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(
  cors({
    //TODO: Change when upload to server
    origin: "*",
  })
);
app.use(express.json({ limit: "5mb" })); //sets data limit of parsing in body to 50mb //to manage the parsing of the body from react app
app.use(express.urlencoded({ limit: "5mb" })); //sets data limit of parsing in url to 50mb
app.use(express.static(path.join(__dirname, "site")));

app.post("/writeToDb", (req, res) => {
  writeindb(req.body.code);
  res.send({
    code: req.body.code,
  });
});

app.get("/checkCode/:id", async (req, res) => {
  let response = await checkcode(req.params.id);
  console.log(response[0]);

  if (response[0] == true) {
    deletcode(response[1]);
  }
  res.send(response[0]);
});

async function checkcode(wincode) {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://SinanM:WU9G3Cat3Qt9qwcu@codes.10bnqin.mongodb.net/test";

  const client = new MongoClient(uri);
  try {
    let answer = [];

    await client.connect();

    const database = client.db("Codes");
    const collection = database.collection("Codes");

    const query = { code: wincode };
    const result = await collection.findOne(query);
    console.log(result);

    if (result) {
      answer.push(true);
      console.log(result._id);

      answer.push(result._id);
    } else {
      answer.push(false);
    }

    return answer;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function deletcode(wincode) {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://SinanM:WU9G3Cat3Qt9qwcu@codes.10bnqin.mongodb.net/test";

  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db("Codes");
    const collection = database.collection("Codes");

    const query = { _id: wincode };
    const result = await collection.deleteOne(query);
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function writeindb(wincode) {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://SinanM:WU9G3Cat3Qt9qwcu@codes.10bnqin.mongodb.net/test";

  const client = new MongoClient(uri);
  try {
    const database = client.db("Codes");
    const collection = database.collection("Codes");

    const query = { code: wincode };
    const code = await collection.insertOne(query);
    console.log(code);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const listener = app.listen("3000", () => {
  console.log("Server started at port " + listener.address().port);
});
