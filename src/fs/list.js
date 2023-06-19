import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

const errorHandler = () => {
    throw new Error('FS operation failed');
}