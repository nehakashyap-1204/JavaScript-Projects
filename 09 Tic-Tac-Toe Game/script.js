let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newGame-btn");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true; //playerX, player0

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function resetGame() {
  turn0 = true;
  enableButtons();
  msgContainer.classList.add("hide");
  newGameBtn.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Btn was clicked");
    if (turn0) {
      box.innerHTML = "0";
    } else {
      box.innerHTML = "X";
    }
    turn0 = !turn0;
    box.disabled = true;

    checkWinner();
  });
});

function checkWinner() {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
}

function disableButtons() {
  for (box of boxes) {
    box.disabled = true;
  }
}

function enableButtons() {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function showWinner(winner) {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  newGameBtn.classList.remove("hide");
  disableButtons();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
