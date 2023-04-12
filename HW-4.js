const element = '<div class="hidden" id="list">\n    <input type="checkbox" id="listing" onchange="erase(this.id)">\n    <label for="listing" id="text"></label>\n   <button onclick="deleted(this.id)">Delete</button>\n</div>';

function createElement(string) {
    const div = document.createElement('div');
    div.innerHTML = string.trim();
    return div;
}

let counter = 0;

function addTask(){
    if(document.getElementById("task").value.length==0){
        alert("you need to write a task");
        return false;
    }
    else {
        const list = createElement(element);
        list.querySelector("label").innerText = document.getElementById("task").value;
        document.querySelector(".block").appendChild(list);

        counter++;
        list.setAttribute("id", `${counter}list`)
        list.querySelector("input").setAttribute("id", `${counter}listing`);
        list.querySelector("button").setAttribute("id", `${counter}button`);
        document.getElementById("task").value="";
        return true;
    }
}

function erase(id){
    const checkbox=document.getElementById(id);
    if(checkbox.checked){
        checkbox.parentElement.querySelector("label").style.textDecoration='line-through';
        checkbox.parentElement.querySelector("button").style.textDecoration='line-through';
    }
    else{
        checkbox.parentElement.querySelector("label").style.textDecoration='none';
        checkbox.parentElement.querySelector("button").style.textDecoration='none';
    }
}

function deleted(elementId){
    const parent = document.getElementById(elementId).parentElement;
    parent.parentElement.removeChild(parent);
}



