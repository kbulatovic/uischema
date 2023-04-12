import Cursor from './Cursor';

export default class Position extends Cursor {
    col = 0;
    line = 1;

    constructor(col: number, line: number) {
        super(0);

        this.col = col;
        this.line = line;
    }

    protected moveToNextLine(pos?: number) {
        ++this.line;
        this.col = 1;
        this.pos = pos ?? this.pos + 1;
    }

    offset(n: number) {
        return new Position(this.line, this.col + n);
    }
}
