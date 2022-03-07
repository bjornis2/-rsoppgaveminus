var klikkeknappEL = document.getElementById("klikkeknapp");
var utskriftEL = document.getElementById("utskrift");
var oppgradering1EL = document.getElementById("oppgradering1");
var oppgradering2EL = document.getElementById("oppgradering2");

klikkeknappEL.addEventListener("click", beregnklikk)
oppgradering1EL.addEventListener("click", oekpoengperklikkmed1)
oppgradering2EL.addEventListener("click", oekpoengperklikkmed2)

var antallklikk = 0;
var poengperklikk = 1;

function beregnklikk(e) {
    antallklikk = antallklikk + poengperklikk;
    utskriftEL.innerHTML = "du har klikket " +  antallklikk + " ganger ";
    console.log("hei");
    
}

function oekpoengperklikkmed1(e) {
    if(antallklikk > 9) {
        antallklikk = antallklikk-100;
        poengperklikk++;
        klikkeknappEL.innerHTML = "+" + poengperklikk;
        utskriftEL.innerHTML = "du har kjøpt en oppgradering og har nå" + antallklikk + "igjen"
    } else [
        alert("no points? :(")
    ]
}

function oekpoengperklikkmed2(e) {
    if(antallklikk > 999) {
        antallklikk = antallklikk-1000;
        poengperklikk++;
        klikkeknappEL.innerHTML = "+" + poengperklikk;
        utskriftEL.innerHTML = "du har kjøpt en oppgradering og har nå" + antallklikk + "igjen"
    } else [
        alert("no points? :(")
    ]
}