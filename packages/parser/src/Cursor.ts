export default class Cursor {
    pos = 0;

    constructor(pos: number) {
        this.pos = pos;
    }

    left() {
        --this.pos;
        return this;
    }

    right() {
        ++this.pos;
        return this;
    }
}
