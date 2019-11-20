let fs = require('fs');

// fs.readFile('test.txt', function (err, data) {
//     if (err) throw err;
//     console.log('Initial file content: ');
//     console.log(data.toString());
// });

let content = fs.readFileSync('test.txt');
console.log('Initial file content: ');
console.log(content.toString());

fs.appendFileSync('test.txt', '\nHello world');

let contentAppended = fs.readFileSync('test.txt');
console.log('\nFile content after modification: ');
console.log(contentAppended.toString());