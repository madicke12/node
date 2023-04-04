import app from "./index.js";
import { MongoClient } from "mongodb";
//import ReviewsDao from "./dao/reviewsDao.js"

const Mongo_Client = MongoClient;

const mongo_username = process.env["Mongo_Username"];
const Mongo_Password = process.env["Mongo_password"];

const uri = `mongodb+srv://${mongo_username}:${encodeURIComponent(
  Mongo_Password
)}@cluster0.mdhqca8.mongodb.net/?retryWrites=true&w=majority`;
const port = 8000;

Mongo_Client.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(er.stack);
    process.exit(1);
  })

  .then(async (client) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
