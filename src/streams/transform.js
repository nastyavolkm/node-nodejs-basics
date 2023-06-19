import { Transform } from 'stream';

const transform = async () => {
    const reverseData = new Transform({
        transform(data, enc, cb) {
          const reversedData = data.toString().split('').reverse().join('');
          this.push(reversedData);
          cb();
        },
      });
    
      process.stdin.pipe(reverseData).pipe(process.stdout);
};

await transform();