/*
MIT License

Copyright (c) 2023 wxn0brP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
