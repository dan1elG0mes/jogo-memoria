let _cartas = []

let colunas = 4
let linhas = 4

let tamanhocarta = 150
let margem = 40

let valores = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let cartasViradas = [];
let imagens = []

function preload() {
  for (let i = 1; i <= 8; i++) {
    let img = loadImage('times/' + i + '.png')
    imagens.push(img)
  }
}

function setup() {
  createCanvas(700, 700);

  shuffle(valores, true)

  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      let posX = c * (tamanhocarta + 10) + margem;
      let posY = l * (tamanhocarta + 10) + margem;

      let valorCarta = valores.pop()

      let novaCarta = new carta(posX, posY, tamanhocarta, valorCarta)
      _cartas.push(novaCarta)
    }
  }

}

function draw() {
  background("black");

  for (let i = 0; i < _cartas.length; i++) {
    _cartas[i].mostrar();
  }

}

function mousePressed() {
  if (cartasViradas.length >= 2) return

  for (let i = 0; i < _cartas.length; i++) {
    let carta = _cartas[i];

    if (carta.clicado(mouseX, mouseY) && !carta.virada && !carta.encontrada) {
      carta.virada = true;
      cartasViradas.push(carta)

      if (cartasViradas.length === 2) {
        setTimeout(checarPar, 1000)
      }
      break;
    }
  }
}

function checarPar() {
  let carta1 = cartasViradas[0]
  let carta2 = cartasViradas[1]

  if (carta1.valor === carta2.valor) {
    carta1.encontrada = true
    carta2.encontrada = true
  }
  else {
    carta1.virada = false
    carta2.virada = false
  }

  cartasViradas = []
}
