import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import Description from "./components/Description/Description";
import Easy from "./components/Easy/Easy";
import Medium from "./components/Medium/medium";
import Hard from "./components/Hard/hard";
import Expert from "./components/Expert/expert";
import Tips from "./components/Tips/Tips";
import "./App.css";

function App() {
  const [board, setBoard] = useState([]);
  const [initialBoard, setInitialBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState("default");
  const [selectedCell, setSelectedCell] = useState(null);
  const [errors, setErrors] = useState({});
  const [showSolution, setShowSolution] = useState(false);
  const isSolved = board.flat().every((num) => num !== 0);
  const [currentScore, setCurrentScore] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: board.innerWidth,
    height: board.innerHeight,
  });

  useEffect(() => {
    fetchSudoku(difficulty);
  }, [difficulty]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchSudoku = (difficulty) => {
    setLoading(true);
    setError(null);
    setErrors({});
    setCurrentScore((currentScore) => 0);

    axios
      .get(`${import.meta.env.VITE_API_URL}/${difficulty}`)
      .then((response) => {
        if (
          response.data &&
          response.data.board &&
          response.data.solution &&
          Array.isArray(response.data.board) &&
          Array.isArray(response.data.solution)
        ) {
          setBoard(response.data.board.map((row) => [...row]));
          setInitialBoard(response.data.board.map((row) => [...row])); // Store original board
          setSolution(response.data.solution.map((row) => [...row]));
          setShowSolution(false);
        } else {
          setError("Invalid board format");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load board");
        setLoading(false);
      });
  };

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const handleNumberClick = (num) => {
    setShowSolution(false);
    if (selectedCell) {
      const { row, col } = selectedCell;

      // Allow editing only if it's an initially empty cell
      if (initialBoard[row][col] === 0) {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][col] = num;
        setBoard(newBoard);

        // Check for errors
        const newErrors = { ...errors };
        if (num !== solution[row][col]) {
          newErrors[`${row}-${col}`] = true; // Mark as incorrect
          setCurrentScore((currentScore) => Math.max(0, currentScore - 50));
        } else {
          if (errors[`${row}-${col}`]) {
            // If it was previously wrong, only add 50
            setCurrentScore((currentScore) => currentScore + 50);
          } else {
            // First-time correct, add 100
            setCurrentScore((currentScore) => currentScore + 100);
          }
          delete newErrors[`${row}-${col}`]; // Remove error
        }
        setErrors(newErrors);
      }
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const renderComponent = () => {
    if (difficulty === "easy") return <Easy />;
    if (difficulty === "medium") return <Medium />;
    if (difficulty === "hard") return <Hard />;
    if (difficulty === "expert") return <Expert />;
    return <Description />;
  };

  return (
    <>
      <div className="heading">Sudoku Game</div>
      <div className="app">
        <div className="sudoku-container">
          <div className="left-panel">
            <div className="Game_Level_Select">
              {["Easy", "Medium", "Hard", "Expert"].map((level) => (
                <button
                  key={level}
                  className={difficulty === level.toLowerCase() ? "active" : ""}
                  onClick={() => setDifficulty(level.toLowerCase())}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Sudoku Board */}
            <div className="board-container">
              <div className="board">
                {board.map((row, rowIndex) =>
                  row.map((num, colIndex) => {
                    const isSelected =
                      selectedCell?.row === rowIndex &&
                      selectedCell?.col === colIndex;
                    const isError = errors[`${rowIndex}-${colIndex}`] || false;
                    const isEditable = initialBoard[rowIndex][colIndex] === 0;

                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`cell ${
                          isEditable ? "editable" : "prefilled"
                        } 
            ${isSelected ? "selected" : ""} 
            ${isError ? "error" : ""}`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        {showSolution
                          ? solution[rowIndex][colIndex]
                          : num || ""}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            {/* Success message & Confetti */}
            {board.length > 0 &&
              !board.some((row) => row.length === 0) &&
              isSolved && (
                <>
                  <div className="overlay"></div>
                  <div className="success-message">🎉 SUCCESS! 🎉</div>
                  <div className="score-message">
                    Your Score: {currentScore}
                  </div>
                  <div className="confetti">
                    <Confetti width={645} height={645} />
                  </div>
                </>
              )}
          </div>

          {/* Right Panel - Sidebar Controls */}
          <div className="right-panel">
            <div className="Score">🏆{currentScore}</div>
            <button
              className="new-game"
              onClick={() => fetchSudoku(difficulty)}
            >
              New Game
            </button>

            <div className="sidebar">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button key={num} onClick={() => handleNumberClick(num)}>
                  {num}
                </button>
              ))}
            </div>
            <button className="solution" onClick={toggleSolution}>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
          </div>
        </div>
        <Tips />
      </div>
      {renderComponent()}
    </>
  );
}

export default App;
