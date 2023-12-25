// import { useState } from "react";


// const initialgameBoard=[ [null, null, null],  [null, null, null],  [null, null, null] ]
export default function GameBoard( {selectedsquare ,board } ){

    // let gameBoard=initialgameBoard;
    // for(const Newturn of playerturn){
    //     const { square, player} = Newturn;
    //     const{row, col}= square;
    //     gameBoard[row][col]=player;
    // }

//    const[gameBoard,setGameBoard ]= useState(initialgameBoard);
//    function handleboard(rowIndex, colIndex ){
//     setGameBoard((prevGameBoard)=> {
//         const updateBoard= [...prevGameBoard.map((innerArray) => [...innerArray])]
//         updateBoard[rowIndex][colIndex]=activeplayersymbol;
//         return updateBoard;
//     });
//     selectedsquare();

//    }

return(
    <ol id="game-board">
       {board.map( (row, rowIndex)=>  <li key={rowIndex}> 
       <ol>
        {row.map((PlayerSymbol, colIndex)=> <li key={colIndex}> <button onClick={()=> selectedsquare(rowIndex, colIndex)}
         disabled={PlayerSymbol!==null}
        
        
        > {PlayerSymbol} </button> </li> )}
       </ol>
       </li> )}

    </ol>
);
}