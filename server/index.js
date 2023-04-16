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
run().catch(console.dir);
