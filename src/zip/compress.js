import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const gzip = createGzip(); 
    const incomingFileStream = createReadStream(path.join(__dirname, 'files/fileToCompress.txt')); 
    const outComingFileStream = createWriteStream(path.join(__dirname, 'files/archive.gz'));
    incomingFileStream
    .pipe(gzip)
    .pipe(outComingFileStream);
};

await compress();