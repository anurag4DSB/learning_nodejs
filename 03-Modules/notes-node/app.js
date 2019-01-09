console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Anurag', 1, 'Anurag', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Anurag'));

// var res = notes.addNote();
// console.log(res);

// var res = notes.add(4, 5);
// console.log(res);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
