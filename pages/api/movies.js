import { connectToDatabase } from '../../util/mongodb';


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    //get from MongoDB database

    const dataMovies = await db.collection('movies').find({}).limit(10).toArray()
    console.log(dataMovies);
    res.json({ dataMovies });
}