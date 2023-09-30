console.log("Hello");

let spoiler = document.querySelector(".js__spoiler");
let spoilerTextHide = "Spoiler"
let spoilerButton = document.querySelector(".js__spoilerButton");
let spoilerTextShow = "Istnieją teorie, że Marvin jest Blizną pojawiającym się w Gothic I";

spoilerButton.addEventListener("click", () => {

  spoiler.innerText =
    spoiler.innerText === spoilerTextHide ? spoilerTextShow : spoilerTextHide;

   spoilerButton.innerText =
    spoiler.innerText === spoilerTextHide ? "Pokaż spoiler" : "Ukryj Spoiler";
});