import React from "react";
import "./tips.css";

const Tips = () => {
  return (
    <div className="SideTips">
      <h2 className="TipsHead">Sudoku Tips</h2>
      <p className="para1">
        Sudoku is a fun puzzle game once you get the hang of it. At the same
        time, learning to play Sudoku can be a bit intimidating for beginners.
        So, if you are a complete beginner, here are a few Sudoku tips that you
        can use to improve your Sudoku skills.
      </p>
      <div className="tips-container">
        {/* List above Canvas */}
        <ul className="tips-list">
          <li>
            <strong>Tip 1:</strong> Look for rows, columns of 3×3 sections that
            contain 5 or more numbers. Work through the remaining empty cells,
            trying the numbers that have not been used. In many cases, you will
            find numbers that can only be placed in one position considering the
            other numbers that are already in its row, column, and 3×3 grid.
          </li>
          <li>
            <strong>Tip 2:</strong> Break the grid up visually into 3 columns
            and 3 rows. Each large column will have 3, 3×3 grids and each row
            will have 3, 3×3 grids. Now, look for columns or grids that have 2
            of the same number. Logically, there must be a 3rd copy of the same
            number in the only remaining 9-cell section. Look at each of the
            remaining 9 positions and see if you can find the location of the
            missing number.
          </li>
        </ul>

        {/* Canvas below the list */}
        <canvas className="canvas"></canvas>
      </div>
    </div>
  );
};

export default Tips;
