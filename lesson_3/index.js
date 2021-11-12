const fs = require('fs');
const ACCESS_LOG = './access.log';
const ip = ['89.123.1.41', '34.48.240.111']

const readline = require('readline');

const streams = []
ip.forEach(name => {
    const writeStream = fs.createWriteStream(`${name}_requests.log`,{encoding: 'utf-8'});
    streams.push(writeStream)
})

async function processLineByLine() {
    const fileStream = fs.createReadStream(ACCESS_LOG);
    const rl = readline.createInterface({
        input: fileStream
    });

    for await (const line of rl) {
        const ipFromLog = line.match(/\d+\.\d+\.\d+\.\d+/g)
        if (ipFromLog && ip.includes(ipFromLog[0])) {
            const index = ip.indexOf(ipFromLog[0])
            streams[index].write(line + '\n');
        }
    }
    console.log('Complete!')
}

processLineByLine();
