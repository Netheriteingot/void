var End = 0;
var viod = 0;
var b1 = 0, b2 = 0;
var End_Level = 0;
var Clicks = 0, tp = 0;
function clickvoid() {
    if (tp < 4999) {
        viod += Math.round(b1 + 1);
        buton = "Click this to get +" + nt(b1 + 1) + " void.";
        if (Clicks < 2000) Clicks++;
    }
    else {
        buton = "This button is useless.";
    }
    UpdButton();
}
function randstr(ori){
    var t=Math.random();
    if(t<0.95)return ori;
    else{
        t=Math.random()*10;
        if(t<1)return "Empty";
        if(t<2)return "Void";
        if(t<3)return "Dakarlocat";
        if(t<4)return "Death";
        if(t<5)return "Universe";
        if(t<6)return "Filter";
        if(t<7)return "Clean";
        if(t<8)return "GO TO HELL";
        if(t<9)return "Voiddddddddddddddd";
        if(t<10)return "Glitter, Vomitus and Neon";
    }
}
function buyq1() {
    if (viod >= q1cost) {
        viod -= q1cost;
        b1++;
    }
    q1cost = 30 * Math.pow(2.5, b1);
    q1c = "Space Compressor<br>You have " + nt(b1) + ".<br>Buy one for " + nt(q1cost) + " void.";
    UpdQ1();
}
function buyq2() {
    if (viod >= q2cost) {
        viod -= q2cost;
        b2++;
    }
    q2cost = 100 * Math.pow(3, b2);
    q2c = "Space Multiplier<br>You have " + nt(b2) + ".<br>Buy one for " + nt(q2cost) + " void.";
    UpdQ2();
}
setInterval(function () {
    viod += b1 * Math.pow(2.1 + (4e-4) * Clicks - (5e-4) * tp, b2) / 20;
    if (End == 1 && tp < 5800) tp++;
    if (End == 1 && tp < 500) viod /= 1.0006;
    else if (End == 1 && tp < 1000) viod /= 1.003;
    else if (End == 1 && tp < 2000) viod /= 1.006;
    else if (End == 1 && tp < 4000) viod /= 1.012;
    else if (End == 1) viod /= 1.02;
    if (End == 1 && viod < 1) viod -= 0.01;
    if (End_Level == 0 && viod >= 10) End_Level = 1;
    if (End_Level == 1 && viod >= 200) End_Level = 2;
    if (End_Level == 2 && viod >= 3000) End_Level = 3;
    if (End_Level == 3 && viod >= 1e+6) End_Level = 4;
    if (End_Level == 4 && viod >= 1e+10) End_Level = 5;
    if (End_Level == 5 && viod >= 1e+20) End_Level = 6;
    if (End_Level == 6 && viod >= 1e+30) End_Level = 7;
    if (End_Level == 7 && viod >= 1e+50) End_Level = 8;
    if (End_Level == 8 && viod >= 1e+75) End_Level = 9;
    if (End_Level == 9 && viod >= 1e+80) { End_Level = 10; End = 1; }
    if (End_Level == 10 && viod <= 1e+70) End_Level = 11;
    if (End_Level == 11 && viod <= 1e+65) End_Level = 12;
    if (End_Level == 12 && viod <= 1e+60) End_Level = 13;
    if (End_Level == 13 && viod <= 1e+55) End_Level = 14;
    if (End_Level == 14 && viod <= 1e+50) End_Level = 15;
    if (End_Level == 15 && viod <= 1e+45) End_Level = 16;
    if (End_Level == 16 && viod <= 1e+40) End_Level = 17;
    if (End_Level == 17 && viod <= 1e+35) End_Level = 18;
    if (End_Level == 18 && viod <= 1e+30) End_Level = 19;
    if (End_Level == 19 && viod <= 1e+25) End_Level = 20;
    if (End_Level == 20 && viod <= 1e+21) End_Level = 21;
    if (End_Level == 21 && viod <= 1e+17) End_Level = 22;
    if (End_Level == 22 && viod <= 1e+14) End_Level = 23;
    if (End_Level == 23 && viod <= 1e+11) End_Level = 24;
    if (End_Level == 24 && viod <= 1e+8) End_Level = 25;
    if (End_Level == 25 && viod <= 1e+6) End_Level = 26;
    if (End_Level == 26 && viod <= 1e+4) End_Level = 27;
    if (End_Level == 27 && viod <= 1e+3) End_Level = 28;
    if (End_Level == 28 && viod <= 1e+2) End_Level = 29;
    if (End_Level == 29 && viod <= 38.4) End_Level = 30;
    if (End_Level == 30 && viod <= 25.6) End_Level = 31;
    if (End_Level == 31 && viod <= 17.1) End_Level = 32;
    if (End_Level == 32 && viod <= 11.4) End_Level = 33;
    if (End_Level == 33 && viod <= 7.59) End_Level = 34;
    if (End_Level == 34 && viod <= 5.06) End_Level = 35;
    if (End_Level == 35 && viod <= 3.38) End_Level = 36;
    if (End_Level == 36 && viod <= 2.25) End_Level = 37;
    if (End_Level == 37 && viod <= 1.5) End_Level = 38;
    if (End_Level == 38 && viod <= 0) { End_Level = 39; End = 2; }
}, 50);
function Load() {
    End = Number(LoadItem("End"));
    viod = Number(LoadItem("viod"));
    b1 = Number(LoadItem("b1"));
    b2 = Number(LoadItem("b2"));
    End_Level = Number(LoadItem("End_Level"));
    Clicks = Number(LoadItem("Clicks"));
    tp = Number(LoadItem("tp"));
    if (tp < 4999) buton = "Click this to get +" + nt(Math.round(b1 + 1)) + " void.";
    else buton = "This button is useless.";
    q1cost = 30 * Math.pow(2.5, b1);
    q1c = "Space Compressor<br>You have " + nt(b1) + ".<br>Buy one for " + nt(q1cost) + " void.";
    q2cost = 100 * Math.pow(3, b2);
    q2c = "Space Multiplier<br>You have " + nt(b2) + ".<br>Buy one for " + nt(q2cost) + " void.";
    UpdHead();
    UpdNews();
    UpdButton();
    UpdQ1();
    UpdQ2();
}