import fs from 'node:fs';
import path from 'node:path';

export const getTimestamp = (perpetual) => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear().toString().slice(-2);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    
    return perpetual
        ? `${year}-${month}-${day}_${hours}-${minutes}-${seconds}-${milliseconds}`
        : `[${day}-${month}-${year} ${hours}:${minutes}:${seconds}.${milliseconds}]`;
};

export let getLastSavedTimestamp = function (filePath) {
    try {
        const stats = fs.statSync(filePath);
        return Math.ceil(stats.mtimeMs);
    } catch (error) {
        // log.yellow('Error getting file timestamp. It probably doesn\'t exist... yet!'); //it just doesnt exist. who cares LMAO
        return 0;
    };
};

export function waitUntil(predicate, interval = 50, timeout = false) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
            if (predicate()) return resolve();
            if (timeout && (Date.now() - start > timeout)) return reject(new Error('waitUntil timeout'));
            setTimeout(check, interval);
        };
        check();
    });
};

/**
 * Returns a Promise that resolves after the specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the delay.
 */
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const stripAnsi = (str) => str.replace(/\x1B[[(?);]{0,2}(;?\d)*./g, '');

export const divideString = (str, chunkSize) => {
    const result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.slice(i, i + chunkSize));
    }
    return result;
};

export const ensureDirExists = (filePath) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
};

export default { getTimestamp, getLastSavedTimestamp, waitUntil, wait, stripAnsi, divideString, ensureDirExists };