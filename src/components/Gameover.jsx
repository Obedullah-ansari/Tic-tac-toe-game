export default function Gameover({win ,rematch}){
    return(
        <div id="game-over">
            <h2>Game Over</h2>
           { win && <p>{win} Won! </p> }
           {!win && <p>It's a Draw</p> }
            <p>
                <button onClick={rematch}>Rematch !</button>
            </p>
        </div>
    );
}