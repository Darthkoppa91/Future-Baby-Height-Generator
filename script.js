document.getElementById("boy-button").addEventListener("click", function () {
    calculateBabyHeight("boy");
});
document.getElementById("girl-button").addEventListener("click", function () {
    calculateBabyHeight("girl");
});
// formula za visinu buduceg deteta ide tako sto visinu oca bebe saberemo sa visinom majke bebe i dobijeni zbig podelimo sa 2, zatim na to dodamo 6.5 cm za decake i oduzmemo 6.5cm za devojcice.//
function calculateBabyHeight(gender){
    var fatherHeight =190;
    var motherHeight =169;

    var babyHeight = (fatherHeight+motherHeight) / 2;

    if(gender === "boy") {
        return babyHeight+= 6.5;
        document.getElementById("sex-result").textContent ="Baby:Boy";

    } else if( gender === "girl") {
        babyHeight -= 6.5;
        document.getElementById("sex-result").textContent ="Baby: Girl";
        
    }

    document.getElementById("height-result").textContent ="Estimated Height: " + babyHeight + "cm" ;




}
console.log(calculateBabyHeight(190,177));
