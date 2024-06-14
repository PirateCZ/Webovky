const typingTexts = [
    "Rychlá hnědá liška přeskočila líného psa.",
    "Když jsem šel do obchodu, koupil jsem mléko, chléb a máslo.",
    "Včera večer jsem četl knihu o historii starověkého Říma.",
    "Programování je skvělý způsob, jak vyřešit složité problémy.",
    "Učení se novým jazykům může být náročné, ale také velmi obohacující.",
    "Psaní všemi deseti prsty je dovednost, kterou stojí za to si osvojit.",
    "Každý den byste měli věnovat čas procvičování nových dovedností.",
    "Vytváření vlastních projektů je skvělý způsob, jak se učit a růst.",
    "Káva a čaj jsou dva nejoblíbenější nápoje na světě.",
    "Hudba může mít velký vliv na naši náladu a produktivitu.",
    "Každý programátor by měl mít základní znalosti o algoritmech a datových strukturách.",
    "Cvičení jógy může pomoci zlepšit flexibilitu a snížit stres.",
    "Dobrá komunikace je klíčem k úspěchu v jakémkoli týmu.",
    "Každý den se učíme něco nového, pokud jsme otevření novým zkušenostem.",
    "Přátelství je důležitou součástí našeho života a přináší nám radost.",
    "Matematika je základem mnoha vědních oborů a technologií.",
    "Zdravý životní styl zahrnuje pravidelnou fyzickou aktivitu a vyváženou stravu.",
    "Cestování nám umožňuje objevovat nové kultury a perspektivy.",
    "Čtení knih je skvělý způsob, jak rozšířit své znalosti a představivost.",
    "Psaní deníku může být terapeutické a pomoci nám lépe porozumět sami sobě."
];

let text = document.getElementById('text')
let textInput = document.getElementById('text-input')
let button = document.getElementById('btn')
let sentence = "";
let index = 0;
let sumthing = false

startWriting()


function startWriting(){
    assingText()
    index = 0
    resetInput()
}

function assingText(){
    let randomIndex = Math.floor(Math.random() * typingTexts.length)
    text.innerHTML = typingTexts[randomIndex]
    sentence = typingTexts[randomIndex]
}

function resetInput(){
    textInput.style.backgroundColor = "white"
    textInput.disabled = false
    textInput.value = ''
}
textInput.addEventListener("keydown", function(event){
    if(event.key == 'Backspace'){
        index--
        if(index < 0){
            index = 0
        }
        if(sumthing){
            index--
            sumthing = false
        }
    }
    console.log(index)
})

textInput.addEventListener("input", function(){
    if(sentence[index] == textInput.value[index]){
            textInput.style.backgroundColor = 'green'
    }
    else{
        textInput.style.backgroundColor = 'red'
    }
    index++
    sumthing = true
    win()
})

function win(){
    if(sentence.length == textInput.value.length){
        textInput.disabled = true
        if(sentence == textInput.value){
            alert("you win")
        }
        else{
            alert("you lose")
        }
    } 
}