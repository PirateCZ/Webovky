class car{
    constructor(znacka, model, rokVyroby, cena){
        this.znacka = znacka
        this.model = model
        this.rokVyroby = rokVyroby
        this.cena = cena
    }
    zobrazInfo() {
        let div = document.createElement('div')
        div.classList = 'cars'
        div.innerHTML = 
        `
        <h2>${this.znacka} - ${this.model}<h2/>
        <p>Rok Vyroby: ${this.rokVyroby}<p/>
        <p>Cena: ${this.cena} Kč<p/>
        `
        document.body.appendChild(div)
    }
}