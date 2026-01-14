import { getTimestamp, getLastSavedTimestamp, waitUntil, wait, stripAnsi, divideString, ensureDirExists } from '../index.js';

// timestamps

// formatted human readable timestamp
const ts = getTimestamp();
console.log(ts);
// [13-01-26 02:14:08.123]

// filesystem safe timestamp, good for filenames
const fileTs = getTimestamp(true);
console.log(fileTs);
// 26-01-13_02-14-08-123

// checking when a file was last modified

const lastSaved = getLastSavedTimestamp('./config.json');

if (lastSaved === 0) {
    console.log('file does not exist yet');
} else {
    console.log('last modified at ms:', lastSaved);
}

// waiting for a condition to become true

let ready = false;

// simulate async state change
setTimeout(() => {
    ready = true;
}, 500);

await waitUntil(() => ready);

console.log('ready flag is now true');

// waitUntil with timeout protection

try {
    await waitUntil(
        () => fs.existsSync('./output.txt'),
        100,      // check every 100ms
        3000      // fail after 3 seconds
    );
    console.log('file appeared');
} catch (err) {
    console.log('file never appeared');
}

// simple delay

console.log('waiting 1 second');
await wait(1000);
console.log('done waiting');

// stripping ANSI codes from a string

const stringWithAnsi = '\x1b[31mThis is red text\x1b[0m';
console.log(stringWithAnsi); // This is red text (in red)
const cleanString = stripAnsi(stringWithAnsi);
console.log(cleanString); // This is red text

// dividing a string into chunks

const longString = 'abcdefghijklmnopqrstuvwxyz';
const chunks = divideString(longString, 5);
console.log(chunks); // [ 'abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z' ]