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
app.use(express.urlencoded()); //sets data limit of parsing in url to 50mb
app.use(express.static(path.join(__dirname, "site")));

app.post("/writeDataToDb", (req, res) => {
  writecodeindb(req.body.participant, req.body.id, req.body.code);
  res.send({
    participant: req.body.participant,
    id: req.body.id,
    code: req.body.code,
  });
});

app.get("/checkCode/:code/:id", async (req, res) => {
  let responseCode = await checkcode(req.params.code);
  let responseID = await checkId(req.params.id);
  console.log(responseCode[0]);
  console.log(responseID);

  // 0 Code ok    ID ok
  // 1 Code x     ID ok
  // 2 Code x/ok  ID x

  if (responseCode[0] == true && responseID == false) {
    deletcode(responseCode[1]);
    writeidindb(req.params.id);
    res.send("0");
    console.log("send");
  }
  if (responseCode[0] == false && responseID == false) {
    res.send("1");
    console.log("send");
  } else if (responseID == true) {
    res.send("2");
    console.log("send");
  }
});

app.get("/getcodes/", async (req, res) => {
  let codes = await getcodes();

  res.send(codes.toString());
});

async function getcodes() {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://SinanM:TBrVZIEEv84WhC6Q@codes.coft2ps.mongodb.net/Codes";

  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db("Codes");
    const collection = database.collection("Codes");

    const query = {
      code: { $ne: null }, // Filters out documents where the "code" field is not null
    };

    const codes = await collection.find(query).toArray();
    let count = 0;
    for (i = 0; i < codes.length; i++) {
      if (codes[i].code !== "") {
        count++;
      }
    }
    console.log(count);

    return count;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function checkId(ID) {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://SinanM:TBrVZIEEv84WhC6Q@codes.coft2ps.mongodb.net/Codes";

  const client = new MongoClient(uri);
  try {
    let answer;

    await client.connect();

    const database = client.db("Codes");
    const collection = database.collection("ParticipantID");

    const query = { id: ID };
    const result = await collection.findOne(query);
    console.log(result);

    if (result) {
      answer = true;
    } else {
      answer = false;
    }

    return answer;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function checkcode(wincode) {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://SinanM:TBrVZIEEv84WhC6Q@codes.coft2ps.mongodb.net/Codes";

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
    "mongodb+srv://SinanM:TBrVZIEEv84WhC6Q@codes.coft2ps.mongodb.net/Codes";

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

async function writecodeindb(participant, id, wincode) {
  const { MongoClient } = require("mongodb");
  const uri =
    "mongodb+srv://SinanM:TBrVZIEEv84WhC6Q@codes.coft2ps.mongodb.net/Codes";

  const client = new MongoClient(uri);
  try {
    const database = client.db("Codes");
    const collection = database.collection("Codes");

    const query = {
      participant: participant,
      id: id,
      code: wincode,
    };
    const code = await collection.insertOne(query);
    console.log(code);
    // Ensures that the client will close when you finish/error
    await client.close();
  } catch (e) {}
}

async function writeidindb(id) {
  const { MongoClient } = require("mongodb");
  const uri =
    "mongodb+srv://SinanM:TBrVZIEEv84WhC6Q@codes.coft2ps.mongodb.net/Codes";

  const client = new MongoClient(uri);
  try {
    const database = client.db("Codes");
    const collection = database.collection("ParticipantID");

    const query = { id: id };
    const ID = await collection.insertOne(query);
    console.log(ID);
    // Ensures that the client will close when you finish/error
    await client.close();
  } catch (e) {}
}

const listener = app.listen("3000", () => {
  console.log("Server started at port " + listener.address().port);
});
