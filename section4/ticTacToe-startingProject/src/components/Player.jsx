import { useState } from "react";

export default function Player({ defaultName, symbol = "X" }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(defaultName);

  const handleButtonClick = () => {
    if (!isEditing) {
      setName(name);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} onChange={handleChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleButtonClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
