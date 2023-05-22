var form = document.getElementById('my-form');
form.addEventListener('submit', submit);
function submit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;

    var email = document.getElementById('email').value;


    let myObj ={
        userName: name,
        userEmail: email
    };

    let myObj_serialized = JSON.stringify(myObj);// now we have converted object to string
    localStorage.setItem("myObj", myObj_serialized);// but it is all string and not an object so we need to parse it back to object
