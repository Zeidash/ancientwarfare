var kontaktctr = document.getElementById("kontakt-container");
var card = document.querySelector(".card");
var buttonKontakt = document.querySelectorAll(".kontakt-button");
var buttonCancel = document.getElementById("kontakt-cancel");

kontaktctr.style.transition = "all 300ms ease";

buttonKontakt[0].onclick = showCard;
buttonKontakt[1].onclick = showCard;

buttonCancel.onclick = hideCard;

function hideCard () {
    card.style.display = "none";
    kontaktctr.style.backgroundColor = "transparent";
    kontaktctr.style.zIndex = "0";
    card.style.zIndex = "0";
}
function showCard () {
    card.style.display = "inline";
    kontaktctr.style.backgroundColor = "rgba(0,0,0,0.85)";
    card.style.zIndex = "999999";
    kontaktctr.style.zIndex = "9999";
}

