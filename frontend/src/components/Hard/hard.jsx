import React from "react";
import "./hard.css";

const Hard = () => {
  return (
    <div className="Desp">
      <h2 className="Headings">Hard Sudoku puzzles</h2>
      <p className="Para">
        Difficult Sudoku is for advanced players! Hard Sudoku is characterized
        by the fact that cells contain much fewer numbers than simple or medium
        ones. To solve hard level Sudoku puzzles, you should already know some
        tactics and tricks.
      </p>
      <h2 className="Headings">
        Popular methods and techniques for solving hard web Sudoku
      </h2>
      <p className="Para">
        Print difficult Sudoku and use different colors and symbols to solve it.
        This way, you can track whether certain numbers have already been used
        with color. Symbols can mark solutions based on others. You can also use
        the online notes feature on Sudoku.com. This way, you can first check
        whether you are moving in the right direction when solving hard Sudoku
        puzzles. In addition, there is a “double” tactic. This tactic is
        characterized by the fact that in a row, column, or in a small square,
        you can still place only two possible numbers. But you do not know which
        one to put. The idea is that you make a mark about it and exclude it
        from further decision. This reduces the number of options to solve, and
        it becomes easier to solve the puzzle. The same can be done for three
        digits. This tactic is called a “triplet” or “triple”.
      </p>
      <h2 className="Headings">Pros of playing hard web Sudoku puzzles</h2>
      <p className="Para">
        The advantages of free web difficult Sudoku puzzles are obvious. Sudoku
        puzzles are always available on your smartphone. In addition, the
        Sudoku.com website has useful features, such as tips, notes, eraser,
        delete function. Solving puzzles becomes much easier with such tools.
        Some time and effort - and you will become a professional in the Sudoku
        game soon!
      </p>
    </div>
  );
};

export default Hard;
