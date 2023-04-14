const { MongoClient } = require("mongodb");

async function main() {
  /*
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://SinanM:WU9G3Cat3Qt9qwcu@codes.10bnqin.mongodb.net/test";

  const client = new MongoClient(uri);
}
