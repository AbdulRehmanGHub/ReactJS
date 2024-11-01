let leftApples = document.querySelector(".leftcount");
let leftBtn = document.querySelector(".leftbtn");

let rightApples = document.querySelector(".rightcount");
let rightBtn = document.querySelector(".rightbtn");

let leftCount = 10;
let rightCount = 0;

function appleCount() {
  leftBtn.addEventListener("click", () => {
    if (rightCount > 0 && leftCount < 10) {
      rightCount--;
      leftCount++;
    }

    rightApples.innerHTML = `${rightCount} Apples`;
    leftApples.innerHTML = `${leftCount} Apples`;
  });

  rightBtn.addEventListener("click", () => {
    if (leftCount > 0 && rightCount < 10) {
      leftCount--;
      rightCount++;
    }
    leftApples.innerHTML = `${leftCount} Apples`;
    rightApples.innerHTML = `${rightCount} Apples`;
  });
}

appleCount();
