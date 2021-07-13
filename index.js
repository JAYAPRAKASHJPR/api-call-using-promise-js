// var x = new Promise((resolve, reject) => {
//   resolve('jp');
// });
const getdata = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respone => {
      return respone.json();
    })
    .then(json => console.log(json));
};

const y = getdata();


// x.then(x => console.log(x))
//   .catch(y => console.log(y))
//   .finally(console.log('finally'));
