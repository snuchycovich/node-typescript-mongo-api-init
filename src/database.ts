import mongoose, { MongooseDocument, connection, connections } from 'mongoose';
import config from './config/config';

const dbOptions: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

export async function startConnection() {
    const uri = `mongodb://${config.DB.MONGO_HOSTNAME}/${config.DB.MONGO_DB}`;
    await mongoose.connect(uri, dbOptions)
    .then(() => console.log('Database is connected'))
    .catch(err => console.error('Could not connect to database:', err))
}