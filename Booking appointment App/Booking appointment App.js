var form = document.getElementById('my-form');
form.addEventListener('submit', submit);
var itemList = document.getElementById('users');
    itemList.addEventListener('click', removeItem);
function submit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    //console.log(name1);
    var email = document.getElementById('email').value;
    var combinedName = name+" "+email;
    var itemList = document.getElementById('users');
    var combinedName = name+" "+email+" ";
    //var itemList = document.getElementById('users');
    //itemList.addEventListener('click', removeItem);
    //Create new li element
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    //Add class
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(combinedName));
    li.appendChild(deleteBtn)
    itemList.appendChild(li);
    // localStorage.setItem('name', name);

    //itemList.addEventListener('click', removeItem);



    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({name, email});
    localStorage.setItem('formData', JSON.stringify(formData));
    //let a = JSON.parse(localStorage.getItem('formData')) 


    // function removeItem(e)
    // {
    //     e.preventDefault();
    //     //console.log(1);
    //     if(e.target.classList.contains('delete'))
    //         {
    //             var li = e.target.parentElement;
    //             itemList.removeChild(li);  
    //             //localStorage.removeItem('formData');

    //         }


    // }

    // // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // console.log(localStorage.getItem('name'))
    // console.log(localStorage.getItem('email'))
}

    function removeItem(e)
    {
        e.preventDefault();
        //console.log(1);
        if(e.target.classList.contains('delete'))
            {
                var li = e.target.parentElement;
                itemList.removeChild(li);  

                var email = li.textContent.split(' ')[1]; // Extract the email from the list item text
                console.log(email)
                var formData = JSON.parse(localStorage.getItem('formData')) || [];

                // Find the item in the array with the matching email
                var itemIndex = formData.findIndex(item => item.email === email);
                    console.log(itemIndex)
                if (itemIndex !== -1) {
                    console.log("yes")
                    formData.splice(itemIndex,1); // Remove the item from the array
                    localStorage.setItem('formData', JSON.stringify(formData)); // Update the localStorage
                }


            }


    }