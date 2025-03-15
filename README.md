🧩 Sudoku Game
A full-stack Sudoku game with a Python FastAPI backend for generating puzzles and a React frontend for playing the game. The app supports multiple difficulty levels, tracks errors, and provides hints.

🚀 Features

🎮 Interactive Sudoku Board – Click on cells to enter numbers.
🤖 Auto-Generated Puzzles – Backend dynamically generates Sudoku puzzles at different difficulty levels.
🎯 Difficulty Levels – Easy, Medium, Hard, Expert.
✅ Solution Toggle – Show/hide the solution.
⚠️ Error Highlighting – Highlights incorrect entries.
🎉 Success Message – Confetti animation on puzzle completion.

🛠️ Tech Stack

Frontend
React (JavaScript/TypeScript)
CSS (Custom Styling, Flexbox, Grid)
State Management (useState, useEffect)

Backend
Python (FastAPI) – Generates and serves Sudoku puzzles.
CORS Middleware – Allows frontend-backend communication.
Random & Copy – Used for Sudoku board generation.

📂 Project Structure
bash
Copy
Edit
/sudoku-game
│── /backend
│ ├── main.py # FastAPI backend
│ ├── requirements.txt # Backend dependencies
│ ├── .gitignore # Ignore backend-related files
│── /frontend
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── App.js # Main app file
│ │ ├── styles/ # CSS files
│ ├── package.json # Frontend dependencies
│── README.md # Project documentation

🏗️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sudoku-game.git
   cd sudoku-game
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Start the FastAPI server:

   ```bash
   uvicorn backend.app:app --reload
   ```

2. The API will be available at `http://127.0.0.1:8000`.

3. You can access the interactive API documentation at `http://127.0.0.1:8000/docs`.

🌟 API Endpoints
Endpoint Difficulty Description
/default Easy Generates a simple puzzle
/easy Easy Generates an easy puzzle
/medium Medium Generates a medium puzzle
/hard Hard Generates a hard puzzle
/expert Expert Generates an expert puzzle

🎯 How to Play
1️⃣ Click on an empty cell.
2️⃣ Enter a number from 1-9.
3️⃣ If the number is incorrect, it will highlight in red.
4️⃣ Click "Show Solution" to reveal the full solution.
5️⃣ Complete the puzzle to see the success animation! 🎉

🛠️ To-Do List
Hint System – Show possible numbers for a cell.
Timer & Scoring System – Track player progress.
Mobile-Friendly UI – Improve responsiveness.
📜 License
This project is open-source under the MIT License.

👨‍💻 Author
Your Name
[GitHub](https://github.com/lalitrawat11) | [LinkedIn](https://www.linkedin.com/in/lalit03/)
