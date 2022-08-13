const { readFileSync, writeFileSync, existsSync } = require('fs');
const { argv } = require('process');

const paths = typeof argv[2] === 'string' ? argv[2].split(',') : ['./karma.conf.js', './src/karma.conf.js'];

for (let i = 0; i < paths.length; i++) {
    const karmaConfPath = paths[i];
    switchToHeadless(karmaConfPath)
}

function switchToHeadless(path) {
    if (existsSync(path)) {
        const fileContents = readFileSync(path).toString('utf-8');
        const switched = fileContents
            .replace(
                /browsers:.*/,
                `browsers: ["ChromeHeadlessCustom"],\n    customLaunchers: {\n      ChromeHeadlessCustom: {\n        base: "ChromeHeadless",\n        flags: ["--no-sandbox"],\n      },\n    },`
            )
            .replace(/singleRun\s?:\s?false/, 'singleRun: true');
        writeFileSync(path, switched);
        console.log('switched to ChromeHeadless in', path)
    }
}
