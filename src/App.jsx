import { useState } from "react";
import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js"
import Gameover from "./components/Gameover.jsx";

const initialgameBoard=[ [null, null, null],  [null, null, null],  [null, null, null] ]

function deriveActiveplayer(gameTurns){
  let currentPlayer='X'
  if(gameTurns.length > 0 && gameTurns[0].player==='X')
   currentPlayer='O';

  return currentPlayer;
}

function App() {
  const [playersname, setplayersname]= useState({
   X  : 'Player 1',
   Y  :'player 2'
  })
  const [gameTurns, setGameTurns] = useState([]);
  //const [Activeplayer, setActivePlayer] = useState("X");

  const Activeplayer = deriveActiveplayer(gameTurns);

  let gameBoard= [...initialgameBoard.map((array)=> [...array])]
    for(const Newturn of gameTurns){
        const { square, player} = Newturn;
        const{row, col}= square;
        gameBoard[row][col]=player;
  
    }
    let winner=null;

    for(const comb of WINNING_COMBINATIONS){
    const firstsquaresymbol =gameBoard[comb[0].row][comb[0].column];
    const secondsquaresymbol =gameBoard[comb[1].row][comb[1].column];
     const thirdsquaresymbol=gameBoard[comb[2].row][comb[2].column];

     if(firstsquaresymbol !==null && firstsquaresymbol===secondsquaresymbol && firstsquaresymbol===thirdsquaresymbol){
      winner= playersname[firstsquaresymbol];
     }
   }
   const hasdraw = gameTurns.length===9 && !winner;
   

  function handelChangesquare(rowIndex, colIndex) {
    //setActivePlayer((currentActivePlayer) =>  currentActivePlayer === "X" ? "O" : "X");

    setGameTurns((prevTurn) => {
      const currentPlayer=deriveActiveplayer(prevTurn);
     

      const UpdatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn, ];
      
    return UpdatedTurns;
    });
  }
  function handelrematch(){
    setGameTurns([]);
  }
  function handelPlayerchangedname(symbol, newname){
    setplayersname(
      prevplayer=>{
        return{
           ...prevplayer,
          [symbol] :newname
        };
      }
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname="player 1"
            symbol="X"
            isActive={Activeplayer === "X"}
            onchangename={handelPlayerchangedname}
          />
          <Player
            initialname="player 2"
            symbol="O"
            isActive={Activeplayer === "O"}
            onchangename={handelPlayerchangedname}
          />
        </ol>
        { (winner || hasdraw) && <Gameover win={winner}  rematch={handelrematch}  /> }
        <GameBoard
          selectedsquare={handelChangesquare}
         // activeplayersymbol={Activeplayer}
         board={gameBoard}
        />
      </div>
      <Log turn={gameTurns} />
    </main>
  );
  
}

export default App;
