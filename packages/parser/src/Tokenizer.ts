import Position from './Position';
import UiSchemaError from './SyntaxErrorExt';
import { ParserInterface, TokenizerInterface } from './types';

export default class Tokenizer extends Position implements TokenizerInterface {
    parser: ParserInterface;
    indent = 0;
    start = 0;
    end = 0;

    constructor(parser: ParserInterface) {
        super(0, 1);
        this.parser = parser;
    }

    private checkIndent() {
        if (this.pos === 0 && (this.indent !== 0 || this.line !== 1)) {
            throw new UiSchemaError('Invalid indentation', new Position(0, 1));
        }

        const wsCount = 0;

        while (this.pos < this.parser.input.length) {
            const char = this.parser.input.codePointAt(0);
        }
    }

    parseLine() {
        this.start = this.pos;

        this.checkIndent();
    }
}
