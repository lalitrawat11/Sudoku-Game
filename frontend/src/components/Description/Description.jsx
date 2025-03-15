import React from "react";
import "./des.css";
const Description = () => {
  return (
    <div className="Desp">
      <h2 className="Headings">Play Free Sudoku Now!</h2>
      <p className="Para">
        Sudoku is one of the most popular puzzle games of all time. The goal of
        Sudoku is to fill a 9×9 grid with numbers so that each row, column, and
        3×3 section contain all of the digits between 1 and 9. As a logic
        puzzle, Sudoku is also an excellent brain game. If you play Sudoku
        daily, you will soon start to see improvements in your concentration and
        overall brain power. Start a game now. Within no time, Sudoku free
        puzzles will be your favorite online game.
      </p>
      <h2 className="Headings">About Sudoku</h2>
      <p className="Para">
        The popular Japanese puzzle game Sudoku is based on the logical
        placement of numbers. An online game of logic, Sudoku doesn’t require
        any calculation nor special math skills; all that is needed are brains
        and concentration.
      </p>
      <h2 className="Headings">How to play Sudoku</h2>
      <p className="Para">
        The goal of Sudoku is to fill in a 9×9 grid with digits so that each
        column, row, and 3×3 section contain the numbers between 1 to 9. At the
        beginning of the game, the 9×9 grid will have some of the squares filled
        in. Your job is to use logic to fill in the missing digits and complete
        the grid. Don’t forget, a move is incorrect if:
        <ul className="List">
          <li>
            Any row contains more than one of the same number from 1 to 9.
          </li>
          <li>
            Any column contains more than one of the same number from 1 to 9.
          </li>
          <li>
            Any 3×3 grid contains more than one of the same number from 1 to 9.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Description;
