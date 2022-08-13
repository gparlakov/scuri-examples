const { readFileSync, writeFileSync, existsSync } = require('fs');
const { argv } = require('process');

const paths = typeof argv[2] === 'string' ? argv[2].split(',') : ['./tsconfig.json'];

for (let i = 0; i < paths.length; i++) {
    const karmaConfPath = paths[i];
    addAutospyToPaths(karmaConfPath)
}

function addAutospyToPaths(path) {
    if (existsSync(path)) {
        const fileContents = readFileSync(path).toString('utf-8');
        const switched = fileContents
            .replace(
                /"baseUrl": ".\/",/,
                `"baseUrl": "./",\n    "paths": {\n      "autospy": ["./auto-spy"]\n     },`
            )
        writeFileSync(path, switched)
    }
}
