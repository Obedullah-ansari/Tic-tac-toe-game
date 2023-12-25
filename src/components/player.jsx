import { useState } from "react";

export default function Player({ initialname,  symbol, isActive , onchangename}) {
  const [PlayerName, setPlayerName] = useState(initialname);
  const [isEditing, seIsEditing] = useState(false);
  function nameEditing() {
    seIsEditing((Editing) => !isEditing);
    if(seIsEditing)
    onchangename(symbol,PlayerName);
  }
  function handelChange(event) {
    setPlayerName(event.target.value);
  }
  let NewplayerName = <span className="Player-name">{PlayerName} </span>;
  let Savechanges = "Edit";

  if (isEditing) {
    NewplayerName = (
      <input type="text" value={PlayerName}  onChange={handelChange} />
    );
    Savechanges = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {NewplayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={nameEditing}>{Savechanges}</button>
    </li>
  );
}
