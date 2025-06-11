let caminhao;
let produtos = [];
let obstaculos = [];
let pontos = 0;
let velocidade = 3;
let jogoAtivo = true;

function setup() {
  createCanvas(700, 500);
  caminhao = new Caminhao();
}

function draw() {
  background(135, 206, 250);
  desenharCenario();

  if (jogoAtivo) {
    caminhao.mostrar();
    caminhao.mover();

    if (frameCount % 60 === 0) {
      produtos.push(new Produto());
    }

    if (frameCount % 120 === 0) {
      obstaculos.push(new Obstaculo());
    }

    for (let i = produtos.length - 1; i >= 0; i--) {
      produtos[i].mover();
      produtos[i].mostrar();
      if (caminhao.coletou(produtos[i])) {
        pontos++;
