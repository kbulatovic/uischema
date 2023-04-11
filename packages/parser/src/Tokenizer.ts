import Cursor from './Cursor';
import Position from './Position';
import UiSchemaError from './SyntaxErrorExt';
import { ParserInterface, TokenizerInterface } from './types';

const LIMIT_INDENT_CHECK_COUNT = 100;

export default class Tokenizer extends Position implements TokenizerInterface {
    parser: ParserInterface;
    indentPos = new Cursor(0);
    start = 0;
    end = 0;
    lineStart = 0;
    lineEnd = 0;
    indentHistory: number[] = [];

    constructor(parser: ParserInterface) {
        super(0, 1);
        this.parser = parser;
    }

    public checkIndent() {
        let wsCount = 0;
        const indentRule = this.parser.config.indent;
        const lastIndent = this.indentHistory[this.indentHistory.length];

        while (this.pos < this.parser.input.length) {
            const char = this.parser.input.codePointAt(this.pos);

            if (char !== 32) {
                break;
            }

            if (this.pos === LIMIT_INDENT_CHECK_COUNT) {
                throw new UiSchemaError(
                    `This indicates a bug, indent check limit exceed ${LIMIT_INDENT_CHECK_COUNT} iterations`,
                    new Position(this.col, this.line)
                );
            }

            wsCount = ++this.pos;
        }

        this.col = this.pos;

        const maybeNext = lastIndent + indentRule;
        const maybePrev = lastIndent === 0 ? null : lastIndent - indentRule;

        if (this.line !== 1 && this.indentHistory?.[0] === 0 && wsCount === 0) {
            throw new UiSchemaError(
                'Only 1 element must be in root',
                new Position(this.col, this.line)
            );
        }

        if (this.line === 1 && wsCount === 0) {
            return;
        }

        if (
            maybeNext !== wsCount ||
            maybePrev !== wsCount ||
            wsCount !== lastIndent
        ) {
            throw new UiSchemaError(
                'Space indentation not consinstent',
                new Position(this.col, this.line)
            );
        }

        this.indentHistory.push(wsCount);
    }

    public parseLineExpression() {
        console.log(this.parser.input[this.pos]);
    }

    public parseLine() {
        this.start = this.pos;
        this.checkIndent();
        this.parseLineExpression();
    }
}
