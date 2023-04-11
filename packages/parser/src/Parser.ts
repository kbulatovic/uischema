import Tokenizer from './Tokenizer';
import { type ParserInterface } from './types';

export default class Parser implements ParserInterface {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    public parse() {
        const tokenizer = new Tokenizer(this);
    }
}
