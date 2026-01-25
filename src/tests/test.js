import fs from 'node:fs';
import path from 'node:path';
import {
    getTimestamp,
    getLastSavedTimestamp,
    waitUntil,
    wait,
    stripAnsi,
    divideString,
    ensureDirExists,
    getTimePython,
    searchList,
    copyViaJson,
    findKeyByAttribute,
    sortByKey,
    pickRandomFilename
} from 'puppymisc';

// --- Timestamps ---
console.log('getTimestamp():', getTimestamp());        // human readable
console.log('getTimestamp(true):', getTimestamp(true)); // filesystem safe
console.log('getTimePython():', getTimePython());      // python-style timestamp

// --- Last saved timestamp ---
const lastSaved = getLastSavedTimestamp('./config.json');
console.log('Last saved timestamp:', lastSaved === 0 ? 'file does not exist' : lastSaved);

// --- waitUntil & wait ---
let ready = false;
setTimeout(() => ready = true, 500);
await waitUntil(() => ready);
console.log('ready flag is now true');

try {
    await waitUntil(() => fs.existsSync('./output.txt'), 100, 3000);
    console.log('output.txt appeared');
} catch (err) {
    console.log('output.txt never appeared');
}

console.log('waiting 1 second...');
await wait(1000);
console.log('done waiting');

// --- stripAnsi ---
const stringWithAnsi = '\x1b[31mThis is red text\x1b[0m';
console.log('Original:', stringWithAnsi);
console.log('Stripped:', stripAnsi(stringWithAnsi));

// --- divideString ---
const longString = 'abcdefghijklmnopqrstuvwxyz';
console.log('Divided:', divideString(longString, 5));

// --- ensureDirExists ---
const testDir = path.join('.', 'temp', 'nested', 'dir', 'file.txt');
ensureDirExists(testDir);
console.log('Ensured directory exists for', testDir);

// --- searchList ---
const list = ['apple', 'banana', 'grapefruit', 'orange'];
console.log('searchList:', searchList(list, 'gra'));    // should match 'grapefruit'
console.log('searchList (cutDown=false):', searchList(list, 'appl', false));

// --- copyViaJson ---
const obj = { a: 1, b: { c: 2 } };
const objCopy = copyViaJson(obj);
objCopy.b.c = 99;
console.log('Original object:', obj);
console.log('Copied object:', objCopy);

// --- findKeyByAttribute ---
const dictList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
console.log('findKeyByAttribute:', findKeyByAttribute(dictList, 'name', 'Bob')); // 1
console.log('findKeyByAttribute (nonexistent):', findKeyByAttribute(dictList, 'name', 'Eve')); // null

// --- sortByKey ---
const numbers = [
    { value: 10 },
    { value: 5 },
    { value: 20 }
];
console.log('sortByKey:', sortByKey(numbers, 'value'));

// --- pickRandomFilename ---
const randomFile = pickRandomFilename('.');
console.log('pickRandomFilename:', randomFile);
