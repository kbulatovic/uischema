export interface ParserInterface {
    input: string;
    parse: () => void;
}

export interface TokenizerInterface {
    parser: ParserInterface;
}

export type ParserConfig = {
    indent: number;
    onToken: (token: any) => void;
};

export interface PositionInterface {
    col: number;
    line: number;
}
