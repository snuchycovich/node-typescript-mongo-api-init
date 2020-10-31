import app from './app';
import { startConnection } from './database'
import dotenv from 'dotenv';

const PORT = app.get("port");

async function main() {
    dotenv.config();
    startConnection();
    await app.listen(PORT);
    console.log(`Server is running on port ${PORT}.`)
}

main();