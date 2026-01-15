export function getTimestamp(perpetual?: boolean): string;

export function getLastSavedTimestamp(filePath: string): number;

export function waitUntil(
    predicate: () => boolean,
    interval?: number,
    timeout?: number | false
): Promise<void>;

export function wait(ms: number): Promise<void>;

export function stripAnsi(str: string): string;

export function divideString(str: string, chunkSize: number): string[];

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