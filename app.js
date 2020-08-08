var list = document.getElementById("list");

function addTodo(){

    var value = document.getElementById('inp').value;

    document.getElementById('inp').value='';
    
    var li = document.createElement('li');

    var text = document.createTextNode(value);
    li.appendChild(text);

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("")
    delBtn.setAttribute("class","fa fa-trash fa-lg")
    delBtn.setAttribute("onclick","deleteItem(this)") 
    delBtn.appendChild(delText)

    var editBtn  = document.createElement("button")
    var editText = document.createTextNode("")
    editBtn.setAttribute("class","fa fa-pencil-square-o fa-lg")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)




    li.appendChild(delBtn)
    li.appendChild(editBtn)


    list.appendChild(li);


}

function deleteAll(){

    list.innerHTML = "";

}

function deleteItem(e){
    e.parentNode.remove()
}


function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Your Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}
