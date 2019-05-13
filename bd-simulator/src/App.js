import React from 'react';

import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import { AI } from 'boardgame.io/ai';

class bdBoard extends React.Component {
  onClick(id) {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
    }
  }

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {
    let winner = '';
    if (this.props.ctx.gameover) {
      winner = (<div id="winner">Winner: {this.props.ctx.gameover.winner}</div>);
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '100px',
      height: '100px',
      lineHeight: '100px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 6; j++) {
        const id = (6 * i) + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    let eBody = [];
    for (let i = 3; i < 6; i++) {
      let eCells = [];
      for (let j = 6; j < 12; j++) {
        const eId = (6 * i) + j;
        console.log(eId);
        eCells.push(
          <td style={cellStyle} key={eId} onClick={() => this.onClick(eId)}>
            {this.props.G.cells[eId]}
          </td>
        );
      }
      eBody.push(<tr key={i}>{eCells}</tr>);
    }

    return (
      <div>
        <table id="board">
          <p> Ally </p>
          <tbody>{tbody}</tbody>
          <p> Enemy </p>
          <tbody>{eBody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
  return cells.filter(c => c === null).length == 0;
}

const bd = Game({
  setup: () => ({ cells: Array(18).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      console.log(id);
      if(G.cells[id] === null) {
        G.cells[id] = "X";
      }
    },
  },

  flow: {
    endGameIf: (G, ctx) => {
      if (IsDraw(G.cells)) {
        return { draw: true };
      }
    },
  },
});

const App = Client({
  game: bd,
  board: bdBoard,

  ai: AI({
    // TO DO
    // enumerate: (G, ctx) => {
    //   let moves = [];
    //   for (let i = 0; i < 9; i++) {
    //     if (G.cells[i] === null) {
    //       moves.push({move: 'clickCell', args: [i]});
    //     }
    //   }
    //   return moves;
    // },
  }),
});

export default App;
