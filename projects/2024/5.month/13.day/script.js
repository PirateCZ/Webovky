let carList = []
const form = document.getElementById('myForm');
const brandInput = document.getElementById('brand') 
const modelInput = document.getElementById('model')

function showCars(){
    for(let i = 0; i < carList.length; i++){
        carList[i].zobrazInfo()
    }
}
brandInput.addEventListener('change',function(event){
    const elementsToRemove = modelInput.getElementsByTagName('option');
    for(let i = elementsToRemove.length - 1;i > 0; i--){
        elementsToRemove[i].remove();
    }

    let brand = brandInput.value
    if(brand == 'Škoda'){
        let option1 = document.createElement('option')
        option1.value = 'Octavia'
        option1.textContent = 'Octavia'
        modelInput.appendChild(option1)
        let option2 = document.createElement('option')
        option2.value = 'Fabia'
        option2.textContent = 'Fabia'
        modelInput.appendChild(option2)
        let option3 = document.createElement('option')
        option3.value = 'Superb'
        option3.textContent = 'Superb'
        modelInput.appendChild(option3)
    }
    else if(brand == 'Volkswagen'){
        let option1 = document.createElement('option')
        option1.value = 'Passat'
        option1.textContent = 'Passat'
        modelInput.appendChild(option1)
        let option2 = document.createElement('option')
        option2.value = 'Golf'
        option2.textContent = 'Golf'
        modelInput.appendChild(option2)
        let option3 = document.createElement('option')
        option3.value = 'Touran'
        option3.textContent = 'Touran'
        modelInput.appendChild(option3)

    }
    else if(brand == 'Audi'){
        let option1 = document.createElement('option')
        option1.value = 'A6'
        option1.textContent = 'A6'
        modelInput.appendChild(option1)
        let option2 = document.createElement('option')
        option2.value = 'A4'
        option2.textContent = 'A4'
        modelInput.appendChild(option2)
        let option3 = document.createElement('option')
        option3.value = 'R8'
        option3.textContent = 'R8'
        modelInput.appendChild(option3)
        let option4 = document.createElement('option')
        option4.value = 'TT'
        option4.textContent = 'TT'
        modelInput.appendChild(option4)

    }

})
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let brand = brandInput.value
    let model = modelInput.value
    carList.push(new car(brand, model, 2007, '69 000'))
    let toRemove = document.getElementsByClassName('cars')
    for(let i = 0; i < toRemove.length; i++){
        toRemove[i].remove();
    }
    showCars()
    form.reset();
});
