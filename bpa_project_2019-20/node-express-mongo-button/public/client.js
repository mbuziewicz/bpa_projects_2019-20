console.log('Client-side code running');

const users = [
    { name: "Mary", age: 32, image: "https://randomuser.me/api/portraits/med/women/314.jpg"},
    { name: "John", age: 22, image: "https://randomuser.me/api/portraits/med/men/52.jpg"},
    { name: "Joe", age: 44 , image: "https://randomuser.me/api/portraits/med/men/25.jpg"}
  ];

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

setInterval(function() {
  fetch('/clicks', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
        document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
        document.getElementById('name').innerHTML = `${users[0].name}`;
        document.getElementById('age').innerHTML = `${users[0].age}`;
        //document.getElementById('image').innerHTML = `<img width=300px src='https://randomuser.me/api/portraits/med/women/${data.length}.jpg'>`;
        document.getElementById('image').innerHTML = `<img width=1200px src='https://source.unsplash.com/collection/${data.length}.jpg'>`;
        
    })
    .catch(function(error) {
      console.log(error);
    });
}, 1000);