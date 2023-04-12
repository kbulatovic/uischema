import Position from './Position';
import { ParserInterface, TokenizerInterface } from './types';
import { thr } from './utils';

const LIMIT_INDENT_CHECK_COUNT = 100;
const PIPE_DELIMITER = '|';

export default class Tokenizer extends Position implements TokenizerInterface {
    parser: ParserInterface;
    start = 0;
    end = 0;
    lineStart = 0;
    lineEnd = 0;
    lastIndent = 0;

    constructor(parser: ParserInterface) {
        super(0, 1);
        this.parser = parser;
    }

    public checkIndent() {
        let wsCount = 0;
        const { indent: indentRule, allowLineBreakOnStart } = this.parser.config;

        while (this.pos <= this.parser.input.length) {
            const char = this.parser.input.codePointAt(this.pos);

            if (char === undefined) {
                return;
            }

            // Allow a start with line break
            if (this.pos === 0 && char === 10) {
                if (allowLineBreakOnStart) {
                    ++this.pos;
                    continue;
                }

                thr(`Tab character not allowed when starting the script`, 1, 1, 1);
            }

            if (char !== 32) {
                break;
            }

            if (this.pos === LIMIT_INDENT_CHECK_COUNT) {
                thr(
                    `This indicates a bug, indent check limit exceed ${LIMIT_INDENT_CHECK_COUNT} iterations`,
                    this.pos,
                    this.line,
                    this.col
                );
            }

            ++wsCount;
            ++this.pos;
        }

        this.col = this.pos;

        const nextGap = wsCount + indentRule;
        const validDist =
            nextGap % indentRule === 0 && Math.abs(nextGap - this.lastIndent) <= indentRule;

        if (!validDist) {
            thr(`Inconsistent spacing`, this.pos, this.line, this.col);
        }

        this.lastIndent = nextGap;
    }

    public parseLineExpression() {
        let identifier = '';
        const input = this.parser.input;

        while (this.pos < input.length) {
            const char = input.codePointAt(this.pos);

            if (char === 32) {
                const p = this.pos + 3;
                const hasArgs = input.slice(this.pos, p).split(PIPE_DELIMITER).length === 2;

                if (hasArgs) {
                    this.pos = p;
                    this.readArgs(identifier);
                }

                break;
            }

            if (char === 10) {
                this.moveToNextLine();
                this.readLine();
                break;
            }

            identifier += char;

            ++this.pos;
        }

        this.createToken(identifier);
    }

    public readLine() {
        this.start = this.pos;

        this.checkIndent();
        this.parseLineExpression();
    }

    public readArgs(name: string) {}

    public createToken(name: string, args?: unknown[]) {}
}
