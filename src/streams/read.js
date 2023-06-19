import path from 'path';
import { createReadStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const read = async () => {
    const filePath = path .join(__dirname, 'files/fileToRead.txt');
    const readStream = createReadStream(filePath);
    readStream.on('data', data => {
        process.stdout.write(data);
    });
};

await read();