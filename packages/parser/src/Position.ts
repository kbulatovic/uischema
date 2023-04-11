import Cursor from './Cursor';

export default class Position extends Cursor {
    col = 0;
    line = 1;

    constructor(col: number, line: number) {
        super(0);

        this.col = col;
        this.line = line;
    }

    offset(n: number) {
        return new Position(this.line, this.col + n);
    }
}
