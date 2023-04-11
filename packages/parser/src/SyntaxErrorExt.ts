import Position from './Position';
import { PositionInterface } from './types';

export default class UiSchemaError
    extends SyntaxError
    implements PositionInterface
{
    line = 0;
    col = 0;

    constructor(type: string, pos: Position) {
        super(type);

        this.line = pos.line;
        this.col = pos.col;
    }
}
