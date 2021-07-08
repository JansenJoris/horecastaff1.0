import { MongoClient } from 'mongodb'

const { MONGODB_URI_HORECASTAFF, MONGODB_DB_HORECASTAFF } = process.env;

if (!MONGODB_URI_HORECASTAFF) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

if (!MONGODB_DB_HORECASTAFF) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local'
    )
}




let cached = global.mongo

if (!cached) {
    cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        cached.promise = MongoClient.connect(MONGODB_URI_HORECASTAFF, opts).then((client) => {
            return {
                client,
                db: client.db(MONGODB_DB_HORECASTAFF),
            }
        })
    }
    cached.conn = await cached.promise
    return cached.conn
};
