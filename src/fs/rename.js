import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorHandler } from './utils/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const sourceFilePath = path.join(__dirname, 'files/wrongFilename.txt');
    const resultFilePath = path.join(__dirname, 'files/properFilename.md');
    if (fs.existsSync(resultFilePath) || !fs.existsSync(sourceFilePath)) {
        errorHandler();
    } else {
        fs.rename(sourceFilePath, resultFilePath, (error) => {
            if (error) {
                errorHandler();
            }
        }); 
    }
}

await rename();