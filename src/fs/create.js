import { writeFile, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const fileName = path.join(__dirname, 'files/fresh.txt');
    if (existsSync(fileName)) {
        errorHandler();
    } else {
        writeFile(fileName, 'I am fresh and young', (error) => {
            if (error) {
                errorHandler();
            }
        });
    }
};

await create();

const errorHandler = () => {
    throw new Error('FS operation failed');
}