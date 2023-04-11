import Position from './Position';
import { ParserConfig, ParserInterface } from './types';

export default class IndentPos extends Position {
    indentRule: ParserInterface['indent'];

    constructor(col: number, line: number, config: Partial<ParserConfig>) {
        super(col, line);

        this.indentRule = config.indent;
    }

    static isValid(
        spaceCount: number,
        indentConf: number,
        prevIndents: number[]
    ) {
        if (!prevIndents.length && spaceCount === 0) {
            return true;
        }

        const lastIndent = prevIndents[prevIndents.length];
    }
}
