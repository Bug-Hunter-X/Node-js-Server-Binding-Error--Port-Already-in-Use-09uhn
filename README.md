# Node.js Server Binding Error: Port Already in Use

This repository demonstrates a common Node.js error: attempting to bind a server to a port that is already in use.  The `bug.js` file shows the error-causing code, while `bugSolution.js` provides a solution using a simple check and retry mechanism.

## Running the Code

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to see the error.  You'll likely need to stop any process currently using port 8080 before this will fail.
4. Run `node bugSolution.js` to see the improved, error-handling version.