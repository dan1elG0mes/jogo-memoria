class carta {
    constructor(x, y, tamanho, valor) {
        this.x = x
        this.y = y
        this.tamanho = tamanho
        this.valor = valor

        this.virada = false;
        this.encontrada = false; // verifica se encontrou o par
    }

    mostrar() {
        if (this.virada || this.encontrada) {
            fill("white")
            rect(this.x, this.y, this.tamanho, this.tamanho)

            let indice = this.valor - 1
            let img = imagens[indice]

            image(img, this.x, this.y, this.tamanho, this.tamanho)

            // fill("white");
            // textSize(20);  
            // textAlign(CENTER, CENTER)
            //  text(this.valor, this.x + (this.tamanho / 2), this.y + (this.tamanho / 2));
        }
        else {
            fill("red")
            rect(this.x, this.y, this.tamanho, this.tamanho)
        }
    }

    clicado(px, py) {
        return px > this.x && px < this.x + this.tamanho &&
            py > this.y && py < this.y + this.tamanho
    }
}