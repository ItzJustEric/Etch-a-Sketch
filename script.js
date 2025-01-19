const eraseBtn = document.querySelector(".erase");
const resetBtn = document.querySelector(".rese");
const gameBoardCells = document.querySelectorAll(".game-board-cell");
const colorBtn = document.querySelector(".color");
const colorPicker = document.querySelector("#favcolor");



colorBtn.addEventListener('click', function() {
    gameBoardCells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = colorPicker.value;
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