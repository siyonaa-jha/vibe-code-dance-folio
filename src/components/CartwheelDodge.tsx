import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const CartwheelDodge = () => {
  const [playerX, setPlayerX] = useState(150);
  const [obstacleY, setObstacleY] = useState(-50);
  const [obstacleX, setObstacleX] = useState(Math.random() * 300);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameAreaRef = useRef();

  useEffect(() => {
    if (gameOver || !gameStarted) return;
    const interval = setInterval(() => {
      setObstacleY((prevY) => {
        if (prevY > 400) {
          // Reset obstacle
          setScore((s) => s + 1);
          setObstacleX(Math.random() * 300);
          return -50;
        }
        return prevY + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [gameOver, gameStarted]);

  useEffect(() => {
    if (
      obstacleY + 30 >= 370 && // obstacle reaches player height (reduced from 350)
      obstacleX < playerX + 50 &&
      obstacleX + 30 > playerX
    ) {
      setGameOver(true);
    }
  }, [obstacleY, obstacleX, playerX]);

  const moveLeft = () => {
    if (!gameStarted || gameOver) return;
    setPlayerX((x) => Math.max(0, x - 20));
  };

  const moveRight = () => {
    if (!gameStarted || gameOver) return;
    setPlayerX((x) => Math.min(300, x + 20));
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
  };

  const restartGame = () => {
    setPlayerX(150);
    setObstacleY(-50);
    setObstacleX(Math.random() * 300);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Cartwheel Dodge 🤸‍♀️</h2>
        <p className="text-gray-600 mb-4">Dodge the falling Mondays and see how long you last!</p>
        <div
          ref={gameAreaRef}
          className="relative mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border rounded-lg"
          style={{ width: 350, height: 400, overflow: "hidden" }}
        >
          {/* Player */}
          <div
            className="absolute bottom-0 text-3xl"
            style={{ left: playerX }}
          >
            🤸‍♀️
          </div>

          {/* Obstacle */}
          <div
            className="absolute text-2xl"
            style={{ top: obstacleY, left: obstacleX }}
          >
            ⏰
          </div>
        </div>

        {!gameStarted && !gameOver && (
          <div className="mt-4">
            <Button 
              onClick={startGame}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold"
            >
              🎮 Start Game!
            </Button>
          </div>
        )}

        {gameStarted && !gameOver && (
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={moveLeft}>
              ← Left
            </Button>
            <Button onClick={moveRight}>
              Right →
            </Button>
          </div>
        )}

        <div className="mt-4 text-lg font-medium">
          Score: {score}
        </div>

        {gameOver && (
          <div className="mt-4">
            <p className="text-red-600 font-semibold mb-2">Game Over! 💥</p>
            <Button onClick={restartGame}>Play Again</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartwheelDodge; 