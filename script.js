const eraseBtn = document.querySelector(".erase");
const resetBtn = document.querySelector(".rese");
const gameBoardCells = document.querySelectorAll(".game-board-cell");
const colorBtn = document.querySelector(".color");


colorBtn.addEventListener('click', function() {
    gameBoardCells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = 'black';
        });
    });
});


eraseBtn.addEventListener('click', function() {
    gameBoardCells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = 'white';
        });
       
    });
});

resetBtn.addEventListener('click', function() {
        gameBoardCells.forEach(cell => {
            cell.style.backgroundColor = 'white';
        })
    });