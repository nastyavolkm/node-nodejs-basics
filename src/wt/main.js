import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'worker.js');
  
    const cpus = cpus();
    const threads = cpus.map(
      (_, index) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(filePath, { workerData: index + 10 });
          worker.on('message', resolve);
          worker.on('error', () => reject({ status: 'error', data: null }));
        })
    );
  
    const result = await Promise.all(threads);
  
    console.log(result);
};

await performCalculations();