import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const fileName = path.join(__dirname, 'files/fileToRemove.txt');
    fs.unlink(fileName, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    })
};

await remove();