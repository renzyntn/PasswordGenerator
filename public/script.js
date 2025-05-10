let txtFieldEl = document.querySelector("#txtfield-el");
let buttonEl = document.querySelector("#button-el");
let darkEl = document.querySelector("#dark-el");
let imgIcon = document.querySelector("#imgicon-el");

let chars = 
[   
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"
];

function generatePass() {
    txtFieldEl.textContent = ""
    for (let i = 0; i < 14; i++) {
        let charIndex = Math.floor(Math.random() * chars.length);
        txtFieldEl.textContent += chars[charIndex];
    }
}

function toggleDarkMode() {
    let btnIcon = document.documentElement.classList.toggle("dark");

    if (btnIcon) {
        imgIcon.src = "images/pg-light-mode.png";
        imgIcon.alt = "Light Mode Icon";
    } else {
        imgIcon.src = "images/pg-dark-mode.png";
        imgIcon.alt = "Dark Mode Icon";
    }
}