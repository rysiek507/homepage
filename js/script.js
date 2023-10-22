const spoiler = document.querySelector(".js__spoiler");
const spoilerTextHide = "Spoiler";
const spoilerButton = document.querySelector(".js__spoilerButton");
const spoilerTextShow =
  "Istnieją teorie, że Marvin jest Blizną pojawiającym się w Gothic I";
let changeText = () => {
  spoiler.innerText =
    spoiler.innerText === spoilerTextHide ? spoilerTextShow : spoilerTextHide;

  spoilerButton.innerText =
    spoiler.innerText === spoilerTextHide ? "Pokaż spoiler" : "Ukryj Spoiler";
};

spoilerButton.addEventListener("click", changeText);
