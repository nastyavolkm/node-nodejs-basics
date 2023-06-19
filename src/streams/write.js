import path from 'path';
import { createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files/fileToWrite.txt');
    const writableStream = createWriteStream(filePath);

    process.stdin.pipe(writableStream);

    process.stdin.resume();
};

await write();