import React, {FC} from 'react';
import {Board} from "../../models/Board";
import CellTemplate from "./CellTemplate";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardTemplate: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className={'app__board'}>
            {
                board.cells.map((row, index) => (
                    <div key={index}>
                        {
                            row.map(cell =>
                                <CellTemplate
                                    key={cell.id}
                                    cell={cell}
                                />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default BoardTemplate;
