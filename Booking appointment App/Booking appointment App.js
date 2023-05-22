var form = document.getElementById('my-form');
form.addEventListener('submit', submit);
function submit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    
    var email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    console.log(localStorage.getItem('name'))
    console.log(localStorage.getItem('email'))

}
var name1 = document.getElementById('name').value;
