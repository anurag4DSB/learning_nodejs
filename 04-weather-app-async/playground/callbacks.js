var getUser = (id, callback) => {
  user = {
    Name: 'Anurag',
    id
  };
  setTimeout(()=> {
    callback(user);
  }, 2000)
};

getUser(32, (userData) => {
  console.log(userData)
});