var form = document.getElementById('my-form');
form.addEventListener('submit', submit);
function submit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    //console.log(name1);
    var email = document.getElementById('email').value;
    var combinedName = name+" "+email;
    var itemList = document.getElementById('users');
    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(combinedName));
    itemList.appendChild(li);
  

    let myObj ={
        userName: name,
        userEmail: email
    };

    let formData = JSON.parse(localStorage.getItem('formDate')) || [];
    formData.push({name, email});
    localStorage.setItem('formDate', JSON.stringify(formData));
    let a = JSON.parse(localStorage.getItem("formDate")) 
    console.log(a);
}