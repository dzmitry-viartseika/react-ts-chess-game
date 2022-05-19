import { Figure } from './figures/Figure';
import {Board} from "./Board";
import {Colors} from "./Colors";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    avaliable: boolean;
    id: number;

    constructor(board: Board, y: number, x: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.avaliable = false;
        this.id = Math.random();
    }
}
