class Osoba{
    constructor(jmeno, prijmeni, rokNarozeni){
        this.jmeno = jmeno
        this.prijmeni = prijmeni
        this.rokNarozeni = rokNarozeni
        this.hobbies = [];
    }
    age(){
        return new Date().getFullYear() - this.rokNarozeni
    }
    introduce(){
        console.log(`Jsem ${this.jmeno} ${this.prijmeni} a je mi ${this.age()} let`)
    }
    addHobby(hobby){
        this.hobbies.push(hobby)
    }
    showHobbies(){
        if(this.hobbies.length<=0){
            console.log("nemam zadne zajmy")
        }
        else{
            console.log("moje zajmy jsou")
            for(let i = 0;i <this.hobbies.length;i++){
                console.log(`${this.hobbies[i]}, `)
            }
            console.log(".")
        }
    }
}
let clovek = new Osoba("Pepa","ZDepa", 2007);
