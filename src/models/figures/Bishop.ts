import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/images/black-bishop.jpeg';
import whiteLogo from '../../assets/images/white-bishop.jpeg';

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureName.BISHOP;
    }
}
