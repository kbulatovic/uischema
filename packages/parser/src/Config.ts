import { ParserConfig } from './types';

export default class Config implements ParserConfig {
    indent: number;

    constructor({ indent }: ParserConfig) {
        this.indent = indent;
    }

    get(key: keyof ParserConfig) {
        return this[key];
    }

    set<TVal>(key: keyof ParserConfig, value: TVal) {
        this[key] = value;
    }
}
