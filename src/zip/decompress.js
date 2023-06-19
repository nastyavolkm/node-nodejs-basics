import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const unzip = createUnzip(); 
    const incomingFileStream = createReadStream(path.join(__dirname, 'files/archive.gz')); 
    const outComingFileStream = createWriteStream(path.join(__dirname, 'files/fileToCompress.txt'));
    incomingFileStream
    .pipe(unzip)
    .pipe(outComingFileStream);
};

await decompress();