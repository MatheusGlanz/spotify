// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://glanzmatheus:7HLVEXzANCNxt70h@cluster0.ixbo9tk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
