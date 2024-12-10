let objJuego;
let fondo;
let imglinternita, imgpuerta, imgpersona;

  function preload() {
  fondo = new ImagenesFondo();
  fondo.cargaimagenes();
  imglinternita = loadImage("data/linternita.png");
  imgpuerta = loadImage ("data/puerta.png");
  imgpersona = loadImage ("data/personita.png")
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(3,5); //3 obstaculos 5 linter
}


function draw() {
  background(0);
  objJuego.dibujar();
}
function keyPressed() {
  objJuego.teclasMovimiento(keyCode);
  objJuego.comenzarJuego(keyCode);
}
function mousePressed() {
  objJuego.mouseclic();
  objJuego.manejosonido();

}
