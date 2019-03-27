const yargs = require('yargs');
const notes = require('./notes')

yargs.version('1.0.0-alpha');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Adding note!', argv.title);
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete a node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Deleting node', argv.title);
        notes.deleteNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'update a note',
    handler(argv) {
        notes.listNotes();
    }
})

yargs.parse();








// // const fs = require('fs')
// // const validator = require('validator');
// const chalk = require('chalk');
// const notes = require('./notes');

// notes();

// console.log(chalk.bold.red.inverse('Error!!!'));

// console.log(process.argv);
// // console.log(validator.isURL('https:gmail.com'));

// // const utils = require('./utils')

// // const fs = require('fs')

// // // fs.writeFileSync('notes.txt', 'My name is Anurag.');
// // fs.appendFileSync('notes.txt', 'Appended text');
// console.log(utils(1,2));


// // fs.writeFileSync("notes.txt", 'This file was created by node.js')
// fs.appendFileSync('notes.txt', 'second message')
