import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorHandler } from './utils/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const fileName = path.join(__dirname, 'files/fileToRemove.txt');
    fs.unlink(fileName, (error) => {
        if (error) {
            errorHandler();
        }
    })
};

await remove();