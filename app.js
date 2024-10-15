"use strict";


const ekran = document.querySelectorAll("#ekran");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
        if (e.target.innerText === "=") {
            ekran.innerText = eval(ekran.innertext);


        }
        else if (e.target.innerText === "AC") {
            ekran.innerText = " ";
        }
        else {
            ekran.innerText += e.target.innerText;
        }
    });
});
document.body.addEventListener("keydown", (e) => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", " - ", " / ", " * "];

    console.log(e.key);
    if (numbers.includes(e.key)) {
        ekran.innerText += e.key;
    }
    else if (e.key === "Enter") {
        ekran.innerText = eval(ekran.innerText);
    }
    else if (e.key === "Backspace") {
        ekran.innerText = ekran.innerText.slice(0, ekran.innerText.length - 1);
    }

});