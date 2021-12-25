import { render } from '@testing-library/react';
import React from 'react';

const MARK_NONE = 0;
const MARK_X = 1;
const MARK_O = 2;

function Td({x, y, onClick}) {
    return <td onClick={() => onClick(x, y)}></td>;
}

const plus = (a, b) => a + b;

function Tr({x, marks}) {
    return (
    <tr>
        {[0, 1, 2].map(y => Td({x, y}))}
    </tr>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = [[MARK_NONE, MARK_NONE, MARK_NONE], [MARK_NONE, MARK_NONE, MARK_NONE], [MARK_NONE, MARK_NONE, MARK_NONE]];
    }

    render() {
    return (<table>
        <tbody>
            { [0, 1, 2].map(x => Tr({x, marks: this.state[x]})) }
        </tbody>
    </table>);
    } 
}