import { connectToDatabase } from '../../util/mangodbHorecastaff';


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    //get from MongoDB database

    const dataKlanten = await db.collection('klantenBestand').find({}).limit(0).toArray()
    console.log(dataKlanten);
    res.json({ dataKlanten });
}

