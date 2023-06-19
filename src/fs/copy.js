import { cpSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const sourceFolderPath = path.join(__dirname, 'files');
    const destinationFolderPath = path.join(__dirname, 'files_copy');
    if (!existsSync(sourceFolderPath) || existsSync(destinationFolderPath)) {
        throw new Error('FS operation failed');
    } else {
        cpSync(sourceFolderPath, destinationFolderPath, {
            recursive: true,
          });    
    }
};

await copy();
