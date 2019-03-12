const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/myproject';
const dbName = 'myproject';

(async function() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection('find');

    let r = await db.collection('find').insertOne({a:2});
    assert.equal(1, r.insertedCount);

    // Get first two documents that match the query
    const docs = await col.find({}).toArray();
    console.log(docs);
 } catch(err) {
	console.log(err.stack);
   }
  // Close connection
  client.close();
})();
