const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)
    console.log(duplicateNote);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse.bold('Note added successfully!'));
    } else {
        console.log(chalk.red.inverse.bold('Duplicate note found! Either change note title or update.'));
    }
}

const deleteNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse.bold('Note removed!'));
    }
    else {
        console.log(chalk.red.inverse.bold('Note not found!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse.bold('Note not found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes!'));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch(err) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataString);
}

module.exports = {
    addNote,
    deleteNote,
    readNote,
    listNotes
}
