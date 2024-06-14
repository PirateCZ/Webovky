const slova = [
    "přetěžováni",
    "povztekání",
    "prozpěvování",
    "pořizovateli",
    "přemazávání",
    "převazovanými",
    "perverznějšími",
    "prezentovanými",
    "příznakovější",
    "převzorkování",
    "keprový",
    "keynesiánců",
    "kejklavé",
    "kesonech",
    "keprovýma",
    "keser",
    "kesonovýma",
    "kelímkovým",
    "kempem",
    "ken",
    "nedokážeš",
    "neprivatizujme",
    "vymalovali",
    "linhartického",
    "ploutevním",
    "zakreslený",
    "čistokrevností",
    "kopolyesterovému",
    "účastnily",
    "nenasazovaly",
    "zelináře",
    "radostí",
    "obešly",
    "kyzovém",
    "skrývými",
    "zneprůzračnit",
    "předepsánými",
    "jihoameričanovo",
    "záškodníkova",
    "netřebickou",
    "příjmového",
    "roznožky",
    "obkladovým",
    "hospodyňskýma",
    "nerovnoramenném",
    "nevědecký",
    "zajistitelem",
    "nejuspořádanějším",
    "vidítou",
    "korpulentních",
    "osvobozují",
    "toaletnímu",
    "nezablokujte",
    "rozlišovány",
    "jamajce",
    "spínátkem",
    "litovaného",
    "vysypte",
    "rozměřovaném",
    "taxikářův",
    "křečkové",
    "odpálíte",
    "rovnodušný",
    "zbytečným",
    "rohlíčku",
    "paralytikovy",
    "peršanovou",
    "automatizujme",
    "práčem",
    "vyťukaných",
    "arzenálem",
    "zanikajícího",
    "otitulkovávat",
    "sebedefinice",
    "aktivem",
    "zreorganizovaném",
    "svízelný",
    "zahnulo",
    "lékarnický",
    "nezachráněni",
    "založily",
    "okořeňují",
    "přeplní",
    "rozostřili",
    "plnomocných",
    "podsouvaná",
    "dokládali",
    "ukřivdíme",
    "svačinkovýma",
    "nestřídé",
    "nešikových",
    "polévejte",
    "nominujte",
    "osívaném",
    "kalibrací",
    "nepoučen",
    "malečovskou",
    "dovřeli",
    "stylce",
    "okrašlovat",
  ];
  let ceskaAbeceda = ['A', 'Á', 'B', 'C', 'Č', 'D', 'Ď', 'E', 'É', 'Ě', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ň', 'O', 'Ó', 'P', 'Q', 'R', 'Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'V', 'W', 'X', 'Y', 'Ý', 'Z', 'Ž'];
  let word = slova[Math.floor(Math.random()*slova.length)]
  let geussingWord = [];
  let health = 9;

  createDashes();
  createGame();
  createButtons();
  displayLives();
  let buttons = document.querySelectorAll("button");
  let letters = document.querySelectorAll("li");
  
  function neco(){
    //tady jeste neco ma bejtđ
    
    
    
    let input = document.querySelector(".text-field");
    
    for (let i = 0; i < ceskaAbeceda.length;i++){
      let btn = document.createElement("button");
      btn.innerHTML = ceskaAbeceda[i];
      btn.onclick = () => {
        input.innerHTML = btn.innerHTML;
      }
      document.appendChild(btn);
    }
  }
  
  function createDashes(){
    for (let i = 0;i < word.length;i++){
      geussingWord.push("_");
    }
  }
  function createGame(){
    let ul = document.querySelector("ul");
    for(let i = 0;i < geussingWord.length;i++){
      let dash = document.createElement("li");
      
      dash.innerHTML = "_";
      ul.appendChild(dash);}
    }
    function createButtons(){
      let ol = document.querySelector("#button-letters");
      for (let i = 0; i < ceskaAbeceda.length; i++){
        let button = document.createElement("button");
        button.innerHTML =  ceskaAbeceda[i];
        button.id = i;
        button.onclick = checkLetters;
        ol.appendChild(button);
      }
    }
    function checkLetters(){
      let id = this.id;
      for (let i = 0;i < word.length;i++){
        if (word[i] == ceskaAbeceda[id].toLowerCase()){
          geussingWord[i] = word[i];
          updateWord();
          buttons[id].style.backgroundColor = "limegreen";
        }else{
          buttons[id].disabled = true;
        }    
      }
      if (!(buttons[id].style.backgroundColor == "limegreen")){
        health--
      }
      if (health <= 0){
        loseGame();
      }
      displayLives();

    }
  function updateWord(){
    for (let i = 0;i < geussingWord.length;i++){
      letters[i].innerHTML = geussingWord[i].toUpperCase();
    }
    if (contains(geussingWord) == true){
      winGame();
    }
  }
function winGame(){
  alert("u won");
}
function loseGame(){
  for (let i = 0;i < buttons.length;i++){
    buttons[i].disabled = true;
  }
  alert("u lost");
}
function contains(slovo){
  let count;
  for(let i = 0;i < slovo.length;i++){
    if (slovo[i] == "_"){
      return false;
    }
  }
  return true;
} 
function displayLives(){
  let healthBox =  document.createElement("div");
  let div = document.querySelector("main");
  healthBox.innerHTML = health;
  healthBox.style.position = "absolute"
  healthBox.style.right = 0;
  healthBox.style.top = 0;
  healthBox.style.border = "2px black solid" ;
  healthBox.style.backgroundColor = "black"
  healthBox.style.color = "red";
  healthBox.style.padding = "0px 10px";
  healthBox.style.margin = "10px "
  div.appendChild(healthBox);
} 