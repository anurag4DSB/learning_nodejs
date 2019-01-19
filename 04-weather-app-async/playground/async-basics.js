console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 0);

setTimeout(() => {
  console.log('Inside of callback2');
}, 0);

setTimeout(() => {
  console.log('Second Callback works');
}, 0);

console.log('Finishing up');
