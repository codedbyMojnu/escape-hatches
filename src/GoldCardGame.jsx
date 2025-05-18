import { useState } from "react";

export default function GoldCartGame() {
  const [goldCount, setGoldCount] = useState(0);
  const [round, setRound] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);

  function handlePlayClick() {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1) {
      setGoldCount(goldCount + 1);
    }
    if (goldCount === 3) {
      setRound(round + 1);
      setGoldCount(0);
    }
    if (round === 3) {
      setGameEnd(true);
    }
  }

  return (
    <div>
      {!gameEnd ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div
            style={{
              flex: "1 1 250px",
              border: "1px solid gold",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <p>Gold Card: {goldCount}</p>
            <button
              onClick={handlePlayClick}
              style={{
                padding: "8px 16px",
                backgroundColor: "gold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Play
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid gold",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div>Round</div>
            <div>{round}</div>
          </div>
        </div>
      ) : (
        <h2>Good Game</h2>
      )}
    </div>
  );
}
