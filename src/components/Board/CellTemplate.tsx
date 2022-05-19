import React, {FC} from 'react';
import {Cell} from "../../models/Cell";

interface ICellProps {
    cell: Cell | null;
}

const CellTemplate: FC<ICellProps> = ({cell}) => {
    return (
        <div className={['app__cell', cell?.color].join('')}>
            { cell?.figure }
        </div>
    )
}

export default CellTemplate;
