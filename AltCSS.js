var newsticker_x = 0, newsticker_y = 100;
var curnews = "";
function UpdNews() {
    newsticker_x = Math.random() * End_Level * End_Level / 2;
    if (Math.random() <= 0.5) newsticker_x *= -1;
    newsticker_y = Math.random() * End_Level * End_Level / 5;
    if (Math.random() <= 0.5) newsticker_y *= -1;
    if (Math.random() > 0.05 || End == 0) newsticker_x = newsticker_y = 0;
    if (End <= 1) document.getElementById("news_back").innerHTML = "<p id=\"news\" style=\" height: 23px; width: 90%; border-style: groove; border-color: white; text-align: center; padding: 10px 0; position: absolute; top: " + newsticker_y + "px; left: " + (window.innerWidth / 20 + newsticker_x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("news", curnews);
}
var head_x = 0, head_y = 0;
var curhead = "";
function UpdHead() {
    head_x = Math.random() * End_Level * End_Level / 2;
    if (Math.random() <= 0.5) head_x *= -1;
    head_y = Math.random() * End_Level * End_Level / 5;
    if (Math.random() <= 0.5) head_y *= -1;
    if (Math.random() > 0.05 || End == 0) head_x = head_y = 0;
    document.getElementById("head_back").innerHTML = "<p id=\"head\" style=\" font-size: 28px; height: 50px; width: 90%; text-align: center; position: absolute; top: " + (50 + head_y) + "px; left: " + (window.innerWidth / 20 + head_x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("head", curhead);
    else SetiH("head", "THE END");
}
var buton = "";
function UpdButton() {
    var button_x = 0, button_y = 0;
    button_x = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) button_x *= -1;
    button_y = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) button_y *= -1;
    if (Math.random() > 0.05 || End == 0) button_x = button_y = 0;
    if (End <= 1) document.getElementById("button_back").innerHTML = "<p id=\"buton\" style=\" border-style: groove; border-color: white; height: 25px; width: 300px; text-align: center; padding: 70px 0; position: absolute; top: " + (150 + button_y) + "px; left: " + (window.innerWidth / 2 - 150 + button_x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("buton", buton);
}
var q1c = "";
function UpdQ1() {
    var button_x = 0, button_y = 0;
    button_x = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) button_x *= -1;
    button_y = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) button_y *= -1;
    if (Math.random() > 0.05 || End == 0) button_x = button_y = 0;
    if (End <= 1) document.getElementById("q1d").innerHTML = "<p id=\"q1\" style=\" border-style: groove; border-color: white; height: 55px; width: 300px; text-align: center; padding: 55px 0; position: absolute; top: " + (400 + button_y) + "px; left: " + (window.innerWidth / 2 - 350 + button_x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("q1", q1c);
}
var q2c = "";
function UpdQ2() {
    var button_x = 0, button_y = 0;
    button_x = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) button_x *= -1;
    button_y = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) button_y *= -1;
    if (Math.random() > 0.05 || End == 0) button_x = button_y = 0;
    if (End <= 1) document.getElementById("q2d").innerHTML = "<p id=\"q2\" style=\" border-style: groove; border-color: white; height: 55px; width: 300px; text-align: center; padding: 55px 0; position: absolute; top: " + (400 + button_y) + "px; left: " + (window.innerWidth / 2 + 50 + button_x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("q2", q2c);
}
function UpdTmp() {
    var tmp1x = 0, tmp1y = 0;
    tmp1x = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) tmp1x *= -1;
    tmp1y = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) tmp1y *= -1;
    if (Math.random() > 0.15 || End == 0) tmp1x = tmp1y = 0;
    document.getElementById("tmp1").innerHTML = "<p id=\"temp1\" style=\" font-size: 15px; height: 50px; width: 90%; text-align: center; position: absolute; top: " + (110 + tmp1y) + "px; left: " + (window.innerWidth / 20 + tmp1x) + "px; color: white; \">" + meow + "</p>";
    if (End <= 1) SetiH("temp1", t1);
    tmp1x = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) tmp1x *= -1;
    tmp1y = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) tmp1y *= -1;
    if (Math.random() > 0.15 || End == 0) tmp1x = tmp1y = 0;
    if (End <= 1) document.getElementById("tmp2").innerHTML = "<p id=\"temp2\" style=\" font-size: 15px; height: 50px; width: 300px; text-align: center; position: absolute; top: " + (375 + tmp1y) + "px; left: " + (window.innerWidth / 2 - 350 + tmp1x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("temp2", t2);
    tmp1x = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) tmp1x *= -1;
    tmp1y = Math.pow(End_Level * 100, Math.random());
    if (Math.random() <= 0.5) tmp1y *= -1;
    if (Math.random() > 0.15 || End == 0) tmp1x = tmp1y = 0;
    if (End <= 1) document.getElementById("tmp3").innerHTML = "<p id=\"temp3\" style=\" font-size: 15px; height: 50px; width: 300px; text-align: center; position: absolute; top: " + (355 + tmp1y) + "px; left: " + (window.innerWidth / 2 + 50 + tmp1x) + "px; color: white; \"></p>";
    if (End <= 1) SetiH("temp3", t3);
}
var meow = "";
setInterval(function () {
    j = Math.random() * 4;
    if (j < 4) meow = "A work of art by l319836";
    if (j < 3) meow = "Special thanks to Fallen_Cat for inspiring me.";
    if (j < 2) meow = "Special thanks to yhvr and Galaxy for providing the platform.";
    if (j < 1) meow = "Special thanks to Sparkle_7 for testing.";
    if (End < 2) meow = "";
    SaveItem("End", End);
    SaveItem("viod", viod);
    SaveItem("b1", b1);
    SaveItem("b2", b2);
    SaveItem("End_Level", End_Level);
    SaveItem("Clicks", Clicks);
    SaveItem("tp", tp);
}, 1000);
var clear = 0;
var rand = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[]{}|;:\",./<>?`";
setInterval(function () {
    if (clear == 1) {
        End = 0;
        viod = 0;
        b1 = 0;
        b2 = 0;
        End_Level = 0;
        Clicks = 0;
        tp = 0;
    }
    curhead = "You have " + nt(viod.toFixed(2));
    if (End == 0) curhead += " void.";
    else curhead += randstr(" void.");
    t1 = "You have clicked " + nt(Clicks) + " times, increasing your multiplier base by " + (Clicks * 2e-4).toFixed(4) + ".";
    if (End == 1) t1 += "<br>Due to the Big Rip, your multiplier base receives a time-based debuff of " + (tp * 5e-4).toFixed(4) + ".";
    t2 = "You receive " + nt((b1 * Math.pow(2.1 + (2e-4) * Clicks - (5e-4) * tp, b2)).toFixed(4)) + " void per second.";
    t3 = "Your multipliers gives a " + nt((Math.pow(2.1 + (2e-4) * Clicks - (5e-4) * tp, b2)).toFixed(4)) + "x boost to your production.";
    if (End_Level == 0) curnews = "You want to make some emptiness.";
    if (End_Level == 1) curnews = "You have a bit of emptiness, but you want more.";
    if (End_Level == 2) curnews = "As the multipliers roamed, your surroundings seems to become cleaner.";
    if (End_Level == 3) curnews = "You feel more emptiness around you.";
    if (End_Level == 4) curnews = "You have devoured everything around you, so you go out and seek for more.";
    if (End_Level == 5) curnews = "You have made a whole region into void.";
    if (End_Level == 6) curnews = "You have annihilated your country.";
    if (End_Level == 7) curnews = "The Earth is gone, sucked into the relentless void you have made.";
    if (End_Level == 8) curnews = "You have cleaned up the galaxy.";
    if (End_Level == 9) curnews = "The universe is about to fall apart.";
    if (End_Level == 10) curnews = "You have triggered the Big Rip.";
    if (End_Level == 11) curnews = "What are you doing...";
    if (End_Level == 12) curnews = "Everything is falling apart, including your void...";
    if (End_Level == 13) curnews = "The doom is coming, just like what you have brought upon others.";
    if (End_Level == 14) curnews = "Everything is destined to fall into destruction.";
    if (End_Level == 15) curnews = "Including you.";
    if (End_Level == 16) curnews = "You are not seeing things clearly.";
    if (End_Level == 17) curnews = "You are getting closer and closer to the ultimate destruction.";
    if (End_Level == 18) curnews = "Just wait for everything to END.";
    if (End_Level == 19) curnews = "Your world is beginning to fall apart...";
    if (End_Level == 20) curnews = "You truly feel the void you have made and become.";
    if (End_Level == 21) curnews = "You are falling apart.";
    if (End_Level == 22) curnews = "Ultimately, everything will die.";
    if (End_Level == 23) curnews = "No matter what you are.";
    if (End_Level == 24) curnews = "...";
    if (End_Level == 25) curnews = "You are living for nothing.";
    if (End_Level == 26) curnews = "You have made your void at the cost of everthing else.";
    if (End_Level == 27) curnews = "Including yourself.";
    if (End_Level == 28) curnews = "This is your last...";
    if (End_Level == 29) curnews = "DIE";
    if (End_Level == 30) curnews = "Was man sich eingebrockt hat";
    if (End_Level == 31) curnews = "Das muss man auch auslöffeln";
    if (End_Level == 32) curnews = "I am forgetting";
    if (End_Level == 33) curnews = "Everything";
    if (End_Level == 34) curnews = "And leave";
    if (End_Level == 35) curnews = "No trace";
    if (End_Level == 36) curnews = "Of us";
    if (End_Level == 37) curnews = "End";
    if (End_Level == 38) curnews = "\"Now\"";
    if (End_Level >= 12) {
        var bbb = 0;
        if (End_Level >= 12) bbb = 1;
        if (End_Level >= 16) bbb = 4;
        if (End_Level >= 21) bbb = 10;
        if (End_Level >= 29) bbb = 100;
        if (End_Level >= 30) bbb = 4;
        for (var i = 0; i < bbb; i++) {
            var k = "", b = 0, c = 0;
            k = curhead;
            b = rand[Math.floor(Math.random() * 92)];
            c = rand[Math.floor(Math.random() * 92)];
            k = k.replace(rand.slice(c, c + 1),);
            curhead = k;
            k = curnews;
            b = rand[Math.floor(Math.random() * 92)];
            c = rand[Math.floor(Math.random() * 92)];
            curnews = k;
            k = t1;
            b = rand[Math.floor(Math.random() * 92)];
            c = rand[Math.floor(Math.random() * 92)];
            t1 = k;
            k = t2;
            b = rand[Math.floor(Math.random() * 92)];
            c = rand[Math.floor(Math.random() * 92)];
            t2 = k;
            k = t3;
            b = rand[Math.floor(Math.random() * 92)];
            c = rand[Math.floor(Math.random() * 92)];
            t3 = k;
        }
    }
    UpdNews();
    UpdHead();
    UpdTmp();
    if (tp >= 4999) {
        UpdButton();
        UpdQ1();
        UpdQ2();
    }
}, 50);