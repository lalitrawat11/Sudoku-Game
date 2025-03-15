from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
import copy

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def generate_full_sudoku():
    """Generates a fully solved 9x9 Sudoku board using backtracking."""
    board = [[0] * 9 for _ in range(9)]  # Initialize empty board

    def is_valid(num, row, col):
        """Check if placing num at (row, col) is valid."""
        # Check row and column
        for i in range(9):
            if board[row][i] == num or board[i][col] == num:
                return False
        
        # Check 3x3 box
        box_row, box_col = (row // 3) * 3, (col // 3) * 3
        for i in range(3):
            for j in range(3):
                if board[box_row + i][box_col + j] == num:
                    return False
        
        return True

    def fill_board():
        """Recursively fills the board using backtracking."""
        for row in range(9):
            for col in range(9):
                if board[row][col] == 0:
                    numbers = list(range(1, 10))
                    random.shuffle(numbers)
                    for num in numbers:
                        if is_valid(num, row, col):
                            board[row][col] = num
                            if fill_board():
                                return True
                            board[row][col] = 0
                    return False
        return True

    fill_board()
    return board


def remove_numbers(board, difficulty):
    """Removes numbers from a full Sudoku board based on difficulty."""
    puzzle = copy.deepcopy(board)
    empty_cells = int(difficulty * 81)  # Number of cells to remove
    
    while empty_cells > 0:
        row, col = random.randint(0, 8), random.randint(0, 8)
        if puzzle[row][col] != 0:
            puzzle[row][col] = 0
            empty_cells -= 1

    return puzzle


def generate_puzzle(difficulty):
    """Generates a new Sudoku puzzle with a given difficulty."""
    solved_board = generate_full_sudoku()
    puzzle_board = remove_numbers(solved_board, difficulty)
    return puzzle_board, solved_board


@app.get("/default")
def generate_sudoku():
    puzzle, solution = generate_puzzle(0.18)
    return {"board": puzzle, "solution": solution}

@app.get("/easy")
def easy_sudoku():
    puzzle, solution = generate_puzzle(0.36)
    return {"board": puzzle, "solution": solution}

@app.get("/medium")
def medium_sudoku():
    puzzle, solution = generate_puzzle(0.54)
    return {"board": puzzle, "solution": solution}

@app.get("/hard")
def hard_sudoku():
    puzzle, solution = generate_puzzle(0.72)
    return {"board": puzzle, "solution": solution}

@app.get("/expert")
def expert_sudoku():
    puzzle, solution = generate_puzzle(0.9)
    return {"board": puzzle, "solution": solution}
