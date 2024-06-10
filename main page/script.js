//main container
let main = document.getElementById('main')

//housing for all the files
let fileList = []
getAllFiles()


//adds all files to files list
async function getAllFiles(){   
    for(let i = 3; i <= 7; i++){
        let response = await fetch(`../projects/202${i}`)
        if(!response.ok){
            continue
        }
        for(let j = 1; j <= 12; j++){
            let response = await fetch(`../projects/202${i}/${j}.month`)
            if(!response.ok){
                continue
            }
            for(let k = 1; k <= 31; k++){
                let response = await fetch(`../projects/202${i}/${j}.month/${k}.day/index.html`)
                if(response.ok){
                    fileList.push(new file(`202${i}/${j}/${k}`,`../projects/202${i}/${j}.month/${k}.day/index.html`))
                }
            }   
        }
    }
    showAllFiles()
}

//displays all files on screen
function showAllFiles(){
    for(let i = 0; i < fileList.length; i++){
        console.log(fileList[i])
        let div = document.createElement('button')
        div.innerHTML = `${fileList[i].fileName}`
        div.classList.add('file')
        div.onclick = () => {location.href = `${fileList[i].filePath}`}
        main.appendChild(div)
    }
}