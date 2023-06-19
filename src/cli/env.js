const parseEnv = () => {
    const variables = process.env;
    const RSSVariables = Object.entries(variables)
    .filter(([key]) => {
        return key.startsWith('RSS_')
        })
        .map(([key, value]) => {
            return `${key}=${value}`;
        })
        .join(';');

    console.log(RSSVariables);
};

parseEnv();