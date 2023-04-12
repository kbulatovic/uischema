import { ParserConfig } from './types';

export function thr(msg: string, pos: number, line: number, col: number) {
    const message = `${msg} (${line}:${col})`;
    const err = new SyntaxError(message);

    err.pos = pos;
    err.line = line;
    err.col = col;

    throw err;
}

export function normalizeConf(conf: Partial<ParserConfig> = {}): ParserConfig {
    return {
        indent: conf?.indent ?? 4,
        allowLineBreakOnStart: conf.allowLineBreakOnStart ?? true,
    };
}
