import React, { useState, useEffect } from "react";
import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  const [showPopout, setShowPopout] = useState(false);

  useEffect(() => {
    if (gameStats.points >= "404") {
      setShowPopout(true);
    } else {
      setShowPopout(false);
    }
  }, [gameStats]);

  return (
    <ul className="GameStats GameStats__right">
      <li>Lines to level</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{points}</li>
      {showPopout && <li className="popout">Popout Content</li>}
    </ul>
  );
};

export default React.memo(GameStats);
