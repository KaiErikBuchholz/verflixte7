let ss1 = 0;
let ars1 = 0;
let ss2 = 0;
let ars2 = 0;

function würfelnS1(){

    let w1 = Math.floor(Math.random()*5+1)
    let w2 = Math.floor(Math.random()*5+1)
    ss1 = w1 + w2 + ss1
    let srs1 = w1 + w2
    ars1 = ars1 + 1
    document.getElementById("Würfel 1").innerHTML = "Würfel 1: " + w1
    document.getElementById("Würfel 2").innerHTML = "Würfel 2: " + w2
    document.getElementById("summeS1").innerHTML = "Summe der Augenzalhen: " + ss1
    document.getElementById("anzahlRundenS1").innerHTML = "Spieler 1 hat " + ars1 + " Runden gespielt!"
    if(srs1 === 7){
    document.getElementById("button1").disabled = true;
    ss1 = ss1 - 7
    alert("Die Runde von Spieler 1 ist beendet")
        document.getElementById("sadr").innerHTML = "Spieler 2 ist an der Reihe"
    }else{
    document.getElementById("button1").disabled = false;

    }
}
function rundebeenden(){
    document.getElementById("button1").disabled = true;
    würfelnS2()
}


function würfelnS2(){
    let w1 = Math.floor(Math.random()*5+1)
    let w2 = Math.floor(Math.random()*5+1)
    ss2 = w1 + w2 + ss2
    let srs2 = w1 + w2
    ars2 = ars2 + 1
    document.getElementById("Würfel 1").innerHTML = "Würfel 1: " + w1
    document.getElementById("Würfel 2").innerHTML = "Würfel 2: " + w2
    document.getElementById("summeS2").innerHTML = "Summe der Augenzalhen: " + ss2
    document.getElementById("anzahlRundenS2").innerHTML = "Spieler 2 hat " + ars2 + " Runden gespielt!"
    if(srs2 === 7){
        document.getElementById("button2").disabled = true;
        ss2 = ss2 - 7
        alert("Die Runde von Spieler 2 ist zu Ende. Jetzt bekommt die Auswertung")
        auswerten()
        document.getElementById("sadr").innerHTML = "Die Runde ist beendet. Lade die Seite neu"
    }else{if(ars2 === ars1){
        document.getElementById("button2").disabled = true;
        alert("Die Runde von Spieler 2 ist zu Ende. Jetzt kommt die Auswertung")
        auswerten()
        document.getElementById("sadr").innerHTML = "Die Runde ist beendet. Lade die Seite neu"

    }
}
    }

    function auswerten(){
    if(ss2 < ss1){
        document.getElementById("auswertung").innerHTML= "Spieler 1 hat gewonnen!"
    }if(ss2 ===ss1){
        document.getElementById("auswertung").innerHTML= "Es ist ein Unentschieden!"
        }if(ss2>ss1){
        document.getElementById("auswertung").innerHTML= "Spieler 2 hat gewonnen!"
        }
    }


