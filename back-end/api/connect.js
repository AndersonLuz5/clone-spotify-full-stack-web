import { MongoClient } from "mongodb";

const URI =
	"mongodb+srv://andersonrivera94:k7SQnQm5ritiUf8s@cluster0.wqrsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("cloneSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
