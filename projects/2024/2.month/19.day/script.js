const body = document.body;
const text = document.querySelector("#text");
const motivation = ["Embrace the challenges ahead, for they are the stepping stones to your success.","Believe in yourself, for you are stronger than you think.","Every small step forward is progress. Keep moving forward!","The only way to guarantee failure is to never try. Take the first step.","Your determination and persistence will pave the way for your dreams to become reality."]
function changeBackground(){
    let randomColor =getRandomColor();
    body.style.backgroundColor = randomColor;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function motivationMsg(){
    let i = Math.floor(Math.random() * 5);
    alert(motivation[i]);
}


function askForInput(){
    let newText = prompt("Change the text.");
    text.innerText = newText;
}