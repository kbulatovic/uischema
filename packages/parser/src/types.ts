export interface ParserInterface {
    config: ParserConfig;
    input: string;
    indent: number;
    parse: () => void;
}

export interface TokenizerInterface {
    parser: ParserInterface;
}

export type ParserConfig = {
    allowLineBreakOnStart?: boolean;
    indent?: number;
};

export interface PositionInterface {
    col: number;
    line: number;
}
