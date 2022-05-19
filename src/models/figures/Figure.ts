import {Colors} from "../Colors";
import logo from '../../assets/images/black-king.jpeg';
import {Cell} from "../Cell";

type logoType = typeof logo;

export enum FigureName {
    'FIGURE' = 'Фигура',
    'KING' = 'Король',
    'KNIGHT' = 'Конь',
    'PAWN' = 'Пешка',
    'QUEEN' = 'Ферзь',
    'ROOK' = 'Ладья',
    'BISHOP' = 'Слон',
}

export class Figure {
    color: Colors;
    logo: logoType | null;
    cell: Cell;
    name: FigureName;
    id: number;

    constructor(color: Colors,cell: Cell) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.logo = logo;
        this.name = FigureName.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true;
    }

    moveFigure(target: Cell): void {
        console.log('wertey')
    }
}
