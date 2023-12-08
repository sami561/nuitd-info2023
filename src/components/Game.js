import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Tetris from "./Tetris";
import { useGameOver } from "../hooks/useGameOver";
import { useGameStats } from "../hooks/useGameStats";
import { motion } from "framer-motion";
import Popout from "./Popout";
import "./Game.css";
const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [gameStats] = useGameStats();

  const [showgameEnd, setshowgameEnd] = useState(false);
  console.log("🚀 ~ file: Game.js:13 ~ Game ~ showgameEnd:", showgameEnd);

  const start = () => {
    resetGameOver();
    setshowgameEnd(true);
  };

  return (
    <div className="Game">
      <React.Fragment>
        {gameOver ? (
          <>
            {showgameEnd ? (
              <>
                <h1 className="notFound"> 404</h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    className="styled-paragraph-error"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {" "}
                    <p>félicitation vous avez perdu votre temps !</p>
                    <motion.div
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {" "}
                        <img
                          src="/assets/félicitations.png"
                          className="félicitationsIMG"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <h1 className="notFound"> 404</h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p className="styled-paragraph">
                    Oops ! On dirait que vous vous êtes égaré(e) en chemin. Ne
                    laissez pas ce petit détour vous décourager ! Que
                    diriez-vous de faire une pause dans cette excursion digitale
                    et de replonger dans le monde passionnant du jeu ?
                    Souvenez-vous, chaque contretemps est une opportunité de
                    renaître plus fort(e) et plus malin(e). Retournez au jeu, où
                    l'aventure vous attend ! Que le jeu commence
                  </p>
                </motion.div>
              </>
            )}{" "}
            <div className="errorPage"> </div>
            <Menu onClick={start} />
          </>
        ) : (
          <>
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
          </>
        )}
      </React.Fragment>
    </div>
  );
};

export default Game;
