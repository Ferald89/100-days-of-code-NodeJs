// make my first hello world in javascript
console.log("hello world");

//hello world in diferents colors
console.log('\x1b[35m%s\x1b[0m', 'Hello world'); //"\x1b[31m" it's a ANSI SCAPE

//hello world with variables and change of background

const mess = 'Hello world';
const effect = '\x1b[8m'//Effect in the terminal
const resetFG = '\x1b[0m';//reset color to terminal
const colorFG = '\x1b[30m';//Color FG
const colorBG = '\x1b[41m';//Color BG
console.log(effect + colorFG + colorBG + mess + resetFG);

//hello world with alarms and adv
console.error('hello world');
console.info('hello world');
console.warn('hello world');

//hello world in table

console.table([{ a: 'hello world', b: 'hello world' }, { a: 'hello world', b: 'hello world' }]);

// hello world in table 
var hello = {};

hello.hello1 =  "hello world";
hello.hello2 = "hello world";
hello.hello3 = "hello world";

console.table(hello);