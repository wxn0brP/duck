var fs = require("fs");
var txt = fs.readFileSync("duck.txt", "utf8");
var colors = ["\x1b[31m","\x1b[32m","\x1b[33m","\x1b[34m","\x1b[35m","\x1b[36m","\x1b[90m"];
function display(color){
    console.log(color+txt+"\x1b[0m");
}

(async () => {
    var delay = ms => new Promise(res => setTimeout(res, ms));
    console.clear();
    var i=0;
    while(true){
        display(colors[i]);
        i++;
        if(i>=colors.length) i = 0;
        await delay(100);
        console.clear();
    }
})()