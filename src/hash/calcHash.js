import { createHash } from "crypto";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile } from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');
    readFile(filePath, (error, data) => {
        if (error) {
            throw new error('Something went wrong');
        } else {
            const hash = createHash("sha256").update(data).digest("hex");
            console.log(hash);
        }
    });
};

await calculateHash();