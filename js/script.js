{
  const changeSpoilerText = () => {
    spoiler.innerText =
      spoiler.innerText === spoilerTextHide ? spoilerTextShow : spoilerTextHide;
  };
  const changeSpoilerButtonText = () => {
    spoilerButton.innerText =
      spoiler.innerText === spoilerTextHide ? "Pokaż spoiler" : "Ukryj Spoiler";
  };
  const init = () => {
    spoilerButton.addEventListener("click", changeSpoilerText);
    spoilerButton.addEventListener("click", changeSpoilerButtonText);
  };
  const spoiler = document.querySelector(".js__spoiler");
  const spoilerTextHide = "Spoiler";
  const spoilerButton = document.querySelector(".js__spoilerButton");
  const spoilerTextShow =
    "Istnieją teorie, że Marvin jest Blizną pojawiającym się w Gothic I";
  init();
}
