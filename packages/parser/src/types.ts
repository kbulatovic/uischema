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
    indent: number;
};

export interface PositionInterface {
    col: number;
    line: number;
}
