//main container
let main = document.getElementById('main')

//housing for all the files
let data = {}
let fileList = []

//github api
const user = "PirateCZ"
const repo = "Webovky"
const defaultDirectory = ""
const branch = "main"
const url = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`

//start the circus
loadData()





async function loadData(){
    main.innerHTML = ""
    try{
        let response = await fetch(url)
        data = await response.json()
    }catch(error){console.error(error)}
    console.log(data)
    addFiles()
}

//adds all the files to the
function addFiles(){
    for(let i = 0; i < data.tree.length; i++){
        if(data.tree[i].path.startsWith(defaultDirectory) && data.tree[i].path.endsWith('.day')){
            let fileName = createFileName(data.tree[i].path)
            fileList.push(new file(fileName, './' + data.tree[i].path))
            console.log("File added: ", fileName, './' + data.tree[i].path)
        }
    }
    fileList.sort((a, b) => {
        let dateA = new Date(a.fileName.split('/').join('-'));
        let dateB = new Date(b.fileName.split('/').join('-'));
        return dateA - dateB;
    });
    fileList.push(new file('homework', './projects/homework/'))
    showAllFiles()
}   

//displays all files on screen
function showAllFiles(){
    for(let i = 0; i < fileList.length; i++){
        let button = document.createElement('button')
        button.innerHTML = `${fileList[i].fileName}`
        button.classList.add('file')
        button.onclick = () => {location.href = `${fileList[i].filePath}`}
        main.appendChild(button)
    }
}

//creates a name that is displayed on the website
function createFileName(path){
    let name = ""
    let skibidi = []

    for(let i = 0; i < path.length; i++){
        if(path[i] == '/'){
            skibidi.push(i)
        }
    }

    for(let i = 0; i < skibidi.length; i++){
        if(i == 0){
            name += path.substring(skibidi[i]+1, skibidi[i]+5) + '/'

        }
        else if(i == 1){
            name += path.substring(skibidi[i]+1, skibidi[i]+3) + '/'
        }
        else if(i == 2){
            name += path.substring(skibidi[i]+1, skibidi[i]+3)
        }
    }

    return removeChar(name,'.')
}


function removeChar(str, char) {
    return str.split(char).join('');
}
