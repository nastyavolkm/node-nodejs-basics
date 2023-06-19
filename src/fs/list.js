import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorHandler } from './utils/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');
    fs.readdir(folderPath, (error, files) => {
        if (error) {
            errorHandler();
        }
        console.log(files);
    })
};

await list();