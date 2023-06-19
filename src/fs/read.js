import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const fileToRead = path.join(__dirname, 'files/fileToRead.txt');
    fs.readFile(fileToRead, 'utf8', (error, data) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    })
};

await read();