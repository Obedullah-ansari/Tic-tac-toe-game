export default function Log({turn}){
    // if (!turn) {
    //     return null; // or display a message or default content
    //   }
    return(
        <ol  id="log">
            {turn.map( (newturns)=> (
            <li key={`${newturns.square.row} ${newturns.square.col}`} >
             {newturns.player}selected{newturns.square.row}, {newturns.square.col} 
             </li> 
             ))}                                                                       
        </ol>
   );
}