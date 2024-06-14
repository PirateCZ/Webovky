let gameSize = 4;
let ids = []
let game = [
    [],
    [],
    [],
    [],
]


fillArrayWithId()
fillPlayField()
createDiv()


function createDiv(){
    for(let i = 0;i < gameSize;i++){
        for(let j = 0;j < gameSize;j++){
            let div = document.createElement('div');
            div.style.backgroundColor = game[i][j].color
            div.id = game[i][j].id  
            div.style.width = '100px'
            div.style.height = '100px'
            document.body.appendChild(div)  
        }
    }
}
function fillPlayField(){
    for(let i = 0; i < gameSize;i++){
        for(let j = 0;j < gameSize;j++){

            let randomIndex = Math.floor(Math.random() * ids.length)
            game[j].push(new card(ids[randomIndex],color(ids[randomIndex])))
            ids.splice(randomIndex, 1)
        }
    }
}
function fillArrayWithId(){
    for(let i = 1; i <= gameSize*gameSize/2;i++){
        ids.push(i)
        ids.push(i)
    }
}
function color(id){
    let color = '#FFFFFF'
    const colors = [
        "#FF6347", // Tomato
        "#4682B4", // Steel Blue
        "#2E8B57", // Sea Green
        "#FFD700", // Gold
        "#8A2BE2", // Blue Violet
        "#FFA07A", // Light Salmon
        "#6A5ACD", // Slate Blue
        "#008080", // Teal
        "#FF69B4", // Hot Pink
        "#20B2AA", // Light Sea Green
        "#9370DB", // Medium Purple
        "#00FF00", // Lime
        "#696969", // Dim Gray
        "#DC143C", // Crimson
        "#00BFFF", // Deep Sky Blue
        "#FF4500"  // Orange Red
    ];
        color = colors[--id]
    return color

}