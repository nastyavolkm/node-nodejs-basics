import { cp, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const sourceFolderPath = path.join(__dirname, 'files');
    const destinationFolderPath = path.join(__dirname, 'files_copy');
    if (!existsSync(sourceFolderPath) || existsSync(destinationFolderPath)) {
        errorHandler();
    } else {
        cp(sourceFolderPath, destinationFolderPath, {
            recursive: true,
          }, (error) => {
            if (error) {
                errorHandler();
            }
          });    
    }
};

await copy();

const errorHandler = () => {
    throw new Error('FS operation failed');
}
