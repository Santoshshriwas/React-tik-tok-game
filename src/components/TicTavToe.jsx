// import React, { useState } from 'react'

// const TicTavToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xTurn, setXTurn] = useState(true);
// const [winner,setWinner] = useState(null);
//   const handelClick=(index)=>{
//     console.log("Button clicked",index);
//     if (board[index] !== null) {
//       return;
//       }
//      const newBoard = [...board];
//      newBoard[index] = xTurn? "X":"O";
//      setBoard(newBoard);
//      setXTurn(!xTurn);
//      const winnerCombi = checkWinner(newBoard);
//      if(winnerCombi){
//       setWinner(newBoard[winnerCombi[0]])
//      }
//   }

//   const renderSquare=(index)=>{
//     return (
//       <button className="square" onClick={()=>handelClick(index)}>{board[index]}</button>
//     )
//   }
//   const checkWinner = ()=>{
//     const Combinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ]
//     for (let i = 0; i < Combinations.length; i++) {
//       const [a, b, c] = Combinations[i];
//       if(board[a]==board[b]&&board[b]===board[c]){
//         return Combinations[i];
//       }

//     }
//     return null;
//   }
//   const resetGame = ()=>{
//     setBoard(Array(9).fill(null));
//     setWinner(null)
//   }
//   return (
//    <>
//     <div className='board'>
//       <div className='board-row'>{renderSquare(0)}
//       {renderSquare(1)}
//       {renderSquare(2)}
//       </div>
//       <div className='board-row'>{renderSquare(3)}
//       {renderSquare(4)}
//       {renderSquare(5)}
//       </div>
//       <div className='board-row'>{renderSquare(6)}
//       {renderSquare(7)}
//       {renderSquare(8)}
//       </div>
    
//     </div>

//     <div>
//       <button onClick={resetGame}>Reset Game</button>
//       {winner && <div>{winner} is Winner of this game</div>}
//     </div>
//    </>
//   )
// }

// export default TicTavToe;



import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== null || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = xTurn ? 'X' : 'O';
    setBoard(newBoard);
    setXTurn(!xTurn);
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const checkWinner = (currentBoard) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return combinations[i];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setXTurn(true);
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <div>
        <button onClick={resetGame}>Reset Game</button>
        {winner && <div>{winner} is the winner!</div>}
      </div>
    </>
  );
};

export default TicTacToe;
