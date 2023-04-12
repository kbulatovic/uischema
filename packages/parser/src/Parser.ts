import Tokenizer from './Tokenizer';
import { ParserConfig, type ParserInterface } from './types';
import { normalizeConf } from './utils';

export default class Parser implements ParserInterface {
    input: string;
    indent: number;
    config: ParserConfig;

    constructor(input: string, config?: ParserConfig) {
        this.input = input;
        this.config = normalizeConf(config);
    }

    public parse() {
        const tokenizer = new Tokenizer(this);
    }
}
