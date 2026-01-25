/**
 * Returns a timestamp string.
 * @param {boolean} [perpetual=false] - If true, returns a filesystem-safe format for filenames; otherwise returns human-readable format.
 * @returns {string} The formatted timestamp.
 */
export function getTimestamp(perpetual?: boolean): string;

/**
 * Gets the last modified timestamp of a file in milliseconds.
 * @param {string} filePath - The path to the file.
 * @returns {number} Last modified timestamp in milliseconds, or 0 if the file does not exist.
 */
export function getLastSavedTimestamp(filePath: string): number;

/**
 * Waits until a predicate function returns true, polling at a given interval.
 * @param {() => boolean | Promise<boolean>} predicate - Function to check for the desired condition. Can return a boolean or a Promise that resolves to boolean.
 * @param {number} [interval=50] - Time in milliseconds between checks.
 * @param {number | false} [timeout=false] - Maximum time to wait in milliseconds. False disables timeout.
 * @returns {Promise<void>} Resolves when predicate returns true, rejects if timeout occurs.
 */
export function waitUntil(
    predicate: () => boolean | Promise<boolean>,
    interval?: number,
    timeout?: number | false
): Promise<void>;

/**
 * Returns a promise that resolves after a specified delay.
 * @param {number} ms - Delay time in milliseconds.
 * @returns {Promise<void>} Resolves after the delay.
 */
export function wait(ms: number): Promise<void>;

/**
 * Removes ANSI escape codes from a string.
 * @param {string} str - Input string potentially containing ANSI codes.
 * @returns {string} String without ANSI codes.
 */
export function stripAnsi(str: string): string;

/**
 * Splits a string into chunks of a specified size.
 * @param {string} str - The string to split.
 * @param {number} chunkSize - Size of each chunk.
 * @returns {string[]} Array of string chunks.
 */
export function divideString(str: string, chunkSize: number): string[];

/**
 * Ensures that the directory for a given file path exists. Creates it if necessary.
 * @param {string} filePath - File path whose parent directories should be created.
 */
export function ensureDirExists(filePath: string): void;

declare const _default: {
    getTimestamp: typeof getTimestamp;
    getLastSavedTimestamp: typeof getLastSavedTimestamp;
    waitUntil: typeof waitUntil;
    wait: typeof wait;
    stripAnsi: typeof stripAnsi;
    divideString: typeof divideString;
    ensureDirExists: typeof ensureDirExists;
};

export default _default;