const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result .span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.persen');
const backspace = document.querySelector('.backspace');



let firstValue = "";
let isFirstValue = false;
let secondValue = ""
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if(isFirstValue === false){
      getFirstValue(atr);
    }
    if (isSecondValue === false) {
      getSecondValue(atr);
    }
  })
}

function getFirstValue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
}

function getSecondValue(el) {
  if (firstValue != "" && sign != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getSign() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", (e) => {
      sign = e.target.getAttribute("value");
      isFirstValue = true;
    })
  }
}

getSign();

// equals.addEventListener("click", () => {
//   result.innerHTML = "";
//   if (sign === "+") {
//     resultValue = firstValue + secondValue;
//   } else if (sign === "-") {
//     resultValue = firstValue - secondValue;
//   } else if (sign === "x") {
//     resultValue = firstValue * secondValue;
//   } else if (sign === "/") {
//     resultValue = firstValue / secondValue;
//   }
//   result.innerHTML = resultValue;
//   firstValue = resultValue;
//   secondValue = "";
  
//   checkResultLength();
// })
equals.addEventListener("click", () => {
  result.innerHTML = "";
  switch (sign) {
    case "+":
      resultValue = parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case "-":
      resultValue = parseFloat(firstValue) - parseFloat(secondValue);
      break;
    case "x":
      resultValue = parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case "/":
      resultValue = parseFloat(firstValue) / parseFloat(secondValue);
      break;
  }
  result.innerHTML = resultValue;
  firstValue = resultValue;
  secondValue = "";
  checkResultLength();
});

// function checkResultLength() {
//   resultValue = JSON.stringify(resultValue);
//   if (resultValue.length >= 8) {
//     resultValue = JSON.parse(resultValue);
//     result.innerHTML = resultValue.toFixed(5);
//   }
// }
function checkResultLength() {
  if (resultValue.toString().length >= 8) {
    resultValue = parseFloat(resultValue).toFixed(5);
    result.innerHTML = resultValue;
  }
}

negative.addEventListener("click", () => {
  resultValue = "";
  if (firstValue != "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  if(firstValue != "" && secondValue != "" && sign != ""){
    resultValue = -resultValue;
  }
  result.innerHTML = resultValue;
})

percent.addEventListener("click", () => {
  resultValue = "";
  if (firstValue != "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if(firstValue != "" && secondValue != "" && sign != ""){
    resultValue = resultValue / 100;
  }
  result.innerHTML = resultValue;
})

clear.addEventListener("click", () => {
  result.innerHTML = 0;
  firstValue = "";
  isFirstValue = false;
  secondValue = ""
  isSecondValue = false;
  sign = "";
  resultValue = 0;
})

backspace.addEventListener("click", () => {
  let currentDisplay = result.innerHTML;
  if (currentDisplay.length > 1) {
    result.innerHTML = currentDisplay.slice(0, -1);
  } else {
    result.innerHTML = "0";
  }

  if (!isFirstValue) {
    firstValue = result.innerHTML;
  } else if (isFirstValue && !isSecondValue) {
    secondValue = result.innerHTML;
  }
});

//tes