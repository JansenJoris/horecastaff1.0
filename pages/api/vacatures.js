import { connectToDatabase } from '../../util/mongodb';


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    //get from MongoDB database

    const data = await db.collection('listingsAndReviews').find({}).limit(20).toArray()
    console.log(data);
    res.json({ data });
}

