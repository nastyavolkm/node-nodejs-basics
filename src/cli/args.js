const parseArgs = () => {
    const commandArgs = process.argv;
    for (let i = 0; i < commandArgs.length; i++) {
        const prop = commandArgs[i];
        if (prop.startsWith('--')) {
            console.log(`${prop.replace('--','')} is ${commandArgs[i+1]}`);
        }
    }
};

parseArgs();