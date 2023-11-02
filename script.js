document.querySelector("#boy-button").addEventListener("click", function () {
  calculateBabyHeight("boy");
});
document.querySelector("#girl-button").addEventListener("click", function () {
  calculateBabyHeight("girl");
});

var father = document.querySelector("#Father-height");
var mother = document.querySelector("#Mother-height");

// formula za visinu buduceg deteta ide tako sto visinu oca bebe saberemo sa visinom majke bebe i dobijeni zbig podelimo sa 2, zatim na to dodamo 6.5 cm za decake i oduzmemo 6.5cm za devojcice.//
function calculateBabyHeight(gender) {
  var babyHeight = (parseFloat(father.value) + parseFloat(mother.value)) / 2;

  if (gender === "boy") {
    babyHeight += 6.5;
  }
  if (gender === "girl") {
    babyHeight -= 6.5;
  }

  document.getElementById("height-selector").textContent = babyHeight;
}
// console.log(calculateBabyHeight(190,177));
