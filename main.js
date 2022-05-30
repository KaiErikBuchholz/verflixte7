let ss1 = 0; //erschaffen von Variablen
let ars1 = 0;
let ss2 = 0;
let ars2 = 0;
let scom = 0;
let arcom = 0;


function würfelnS1(){

    let w1 = Math.floor(Math.random()*5+1) //erschafft Variable würfel 1 und ordnet einen Wert von 1-6 zu
    let w2 = Math.floor(Math.random()*5+1)
    ss1 = w1 + w2 + ss1                       // berechnet die Summe der Augenzahlen
    ars1 = ars1 + 1 // berechnet die Anzahl der gespielten Runden
    let srs1 = w1 + w2
    if(srs1 === 7){     //beendet die Runde wenn eine 7 gewürfelt wurde
    document.getElementById("button1").disabled = true; //disabled den Knopf
    ss1 = ss1 - 7                                                // zieht die 7 von Score ab
    alert("Die Runde von Spieler 1 ist beendet") // alert das die Runde vorbei ist
        document.getElementById("Würfel 1").innerHTML = "Würfel 1: " + w1
        document.getElementById("Würfel 2").innerHTML = "Würfel 2: " + w2
        document.getElementById("summeS1").innerHTML = "Summe der Augenzalhen: " + ss1
        document.getElementById("anzahlRundenS1").innerHTML = "Spieler 1 hat " + ars1 + " Runden gespielt!"
        document.getElementById("rs1bennden").disabled = true;
        document.getElementById("sadr").innerHTML = "Spieler 2 ist an der Reihe"    //ausgabe das spieler 2 dran ist
    }else{
    document.getElementById("button1").disabled = false;    //Knopf bleibt aktiviert
        document.getElementById("Würfel 1").innerHTML = "Würfel 1: " + w1 // gibt es gewürfelte Augenzahl von Würfel 1 aus
        document.getElementById("Würfel 2").innerHTML = "Würfel 2: " + w2
        document.getElementById("summeS1").innerHTML = "Summe der Augenzalhen: " + ss1 //gibt die Summe der Augenzahl aus
        document.getElementById("anzahlRundenS1").innerHTML = "Spieler 1 hat " + ars1 + " Runden gespielt!" //gibt die Anzahl der Runden aus
    }
}
function rundebeenden(){
    document.getElementById("button1").disabled = true;
    alert("Die Runde von Spieler 1 ist beendet")
    document.getElementById("rs1bennden").disabled = true;
}


function würfelnS2(){
    let w1 = Math.floor(Math.random()*5+1) //erschafft Variable Würfel 1 und ordnet einen Wert von 1-6 zu
    let w2 = Math.floor(Math.random()*5+1)
    ss2 = w1 + w2 + ss2                       //berechnet die Summer der Augenzahlen
    ars2 = ars2 + 1                           //berechnet die Anzahl der gespielten Runden
    let srs2 = w1 + w2
    document.getElementById("Würfel 1").innerHTML = "Würfel 1: " + w1 //Ausgabe der Augenzahl
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
        document.getElementById("sadr").innerHTML = "Die Runde ist beendet. Lade die Seite neu um nochmal zu spielen"

    }
}
    }

    function auswerten(){ //Funktion zur Auswertung wer gewonnen hat
    if(ss2 < ss1){
        document.getElementById("auswertung").innerHTML= "Spieler 1 hat gewonnen!"
    }if(ss2 ===ss1){
        document.getElementById("auswertung").innerHTML= "Es ist ein Unentschieden!"
        }if(ss2>ss1){
        document.getElementById("auswertung").innerHTML= "Spieler 2 hat gewonnen!"
        }
    }


function gegencomputerspielen(){
    document.getElementById("button1").disabled = true;
    document.getElementById("rs1bennden").disabled = true;
    document.getElementById("sadr").innerHTML = "Der Computer fängt an zu spielen"
    document.getElementById("computeralsgegner").disabled = true;
    document.getElementById("zweispieler").disabled = true;
    document.getElementById("gegenwenwillst du spielen").innerHTML = ""
    document.getElementById("summeS1").innerHTML = ""
    computeralsspieler()


}

function zuzweitspielen(){
    document.getElementById("sadr").innerHTML = "Spieler 1 fängt an"
    document.getElementById("computeralsgegner").disabled = true;
    document.getElementById("zweispieler").disabled = true;
    document.getElementById("gegenwenwillst du spielen").innerHTML = ""
}

function computeralsspieler(){
    do {
    let w1 = Math.floor(Math.random()*5+1)
    let w2 = Math.floor(Math.random()*5+1)
    scom = w1 + w2 + scom
    arcom = arcom + 1
    document.getElementById("Würfel 1").innerHTML = "Würfel 1: " + w1
    document.getElementById("Würfel 2").innerHTML = "Würfel 2: " + w2
    document.getElementById("summeS1").innerHTML = "Summe der Augenzalhen vom Computer: " + scom
    document.getElementById("anzahlRundenS1").innerHTML = "Der Computer hat " + arcom + " Runden gespielt!"
    }while((scom/arcom)<8){
        alert("Die Runde von Computer ist beendet")
        document.getElementById("sadr").innerHTML="Spieler 2 ist an der Reihe"

    }
}

