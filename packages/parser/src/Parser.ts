import Tokenizer from './Tokenizer';
import { ParserConfig, type ParserInterface } from './types';

export default class Parser implements ParserInterface {
    input: string;
    indent: number;
    config: ParserConfig;

    constructor(input: string, config: ParserConfig) {
        this.input = input;
        this.config = config;
    }

    public parse() {
        const tokenizer = new Tokenizer(this);
    }
}
