class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.player = "x";
        this.status = "in process";

    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    
    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
          this.field[rowIndex][columnIndex] = this.player;
          this.changePlayer();
        }
      }
    changePlayer() {
        if (this.player === "x") {
            this.player = "o";
        }
        else {
            this.player = "x";
        }
    }
    

    isFinished() {
        if (this.getWinner() != null || this.isDraw()) {
            return true;
        }
        return false;

    }

    getWinner() {
        if (this.field[0][0] != null && this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2]) {
            this.status = "won";
            return this.field[0][0];
        }
        if (this.field[1][0] != null && this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2]) {
            this.status = "won";
            return this.field[1][0];
        }
        if (this.field[2][0] != null && this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2]) {
            this.status = "won" ;
            return this.field[2][0];
        }        
        if (this.field[0][0] != null && this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0]) {
            this.status = "won";
            return this.field[0][0];
        }
        if (this.field[0][1] != null && this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1]) {
            this.status = "won";
            return this.field[0][1];
        }
        if (this.field[0][2] != null && this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2]) {
            this.status = "won";
            return this.field[0][2];
        }
        if (this.field[0][0] != null && this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) {
            this.status = "won" ;
            return this.field[0][0];
        }
        if (this.field[0][2] != null && this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]) {
            this.status = "won";
            return this.field[0][2];
        }
        return null;

    }

    noMoreTurns() {
        if (this.field[0].includes(null) ||
            this.field[1].includes(null) ||
            this.field[2].includes(null)) {
            return false;
        } else {
            return true;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            this.status = "draw";
            return true;
        } else {
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

    
}


module.exports = TicTacToe;
