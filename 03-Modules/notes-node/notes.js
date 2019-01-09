console.log('Starting notes.js');

module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';  
}

module.exports.add = (a, b) => {
  console.log('adding numbers');
  return a + b;
}
