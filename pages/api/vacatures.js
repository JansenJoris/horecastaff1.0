import { connectToDatabase } from '../../util/mangodbHorecastaff';


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    //get from MongoDB database

    const dataHorecastaff = await db.collection('horecastaffCN').find({}).limit(20).toArray()
    console.log(dataHorecastaff);
    res.json({ dataHorecastaff });
}

