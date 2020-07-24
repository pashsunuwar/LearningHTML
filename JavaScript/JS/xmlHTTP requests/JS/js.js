fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    console.log(error);
})

const buttonElement = document.getElementById('printall')
buttonElement.addEventListener('click', event =>{
alert('Element click through function!')
})
