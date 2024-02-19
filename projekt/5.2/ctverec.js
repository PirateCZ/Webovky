console.log("Hello World!");
const button = document.querySelector("#button1");
button.onclick = newDiv;
function newDiv(){
    var div = document.createElement("div");
    div.id = "myDiv";
    div.className = "new-div";
    div.textContent = "This div is created using JavaScript";
    div.style.height = "150px";
    div.style.width = "150px";
    div.style.padding = "5px";
    document.body.appendChild(div);
}

