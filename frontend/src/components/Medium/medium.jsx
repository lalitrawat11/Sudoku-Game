import React from "react";
import "./medium.css";

const Medium = () => {
  return (
    <div className="Desp">
      <h2 className="Headings">Medium Sudoku puzzles</h2>
      <p className="Para">
        Medium Sudoku is a logic puzzle which is harder than an easy one and
        requires certain tactics to solve it. Hard and Medium level Sudoku often
        require certain tactics to solve them. If you started with easy Sudoku,
        you will soon realize that you have become too quick to deal with these
        puzzles and want more! At this point, you can move to medium level
        Sudoku. The rules remain the same for medium Sudoku puzzles. The number
        from one to nine can appear only once in each of the 9 3x3 squares, in
        each individual line and in each column. The difference is only in the
        number of originally displayed figures.
      </p>
      <h2 className="Headings">Tactics to solve medium web Sudoku game</h2>
      <p className="Para">
        We would like to give you some tips to help you solve medium Sudoku.
        When solving printed Sudoku, use different colors for each digit. Thus,
        it will be easier for you to track whether a figure is really found just
        once. You can also mark solutions with a symbol that are based on
        others. This will allow you to track the sequence of your actions and
        facilitate the game. If you are playing web Sudoku, special notes are
        provided on Sudoku.com, with which you can put the possible numbers in
        the appropriate squares and verify the entered data, and then delete or
        replace it. Also there are tips on the site, using which it won`t be a
        problem for you to solve medium difficulty Sudoku!
      </p>
    </div>
  );
};

export default Medium;
