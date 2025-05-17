let angle = 0;
let speed = 0.01;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(0);
  
  // Posiciona o centro no meio da obra
  translate(width / 2, height / 2);
  
  // Rotaciona envolta do centro
  rotate(angle);
  
  // Desenha elipses
  for (let i = 0; i < 10; i++) {
    push();
    rotate(TWO_PI * i / 10);
    stroke(lerpColor(color('#00f'), color('#0ff'), i / 10));
    fill(255, 20);
    ellipse(100, 0, 50 + sin(angle * 3 + i) * 20, 50);
    pop();
  }
  
  // Atualiza o ângulo com base na velocidade
  angle += speed;
}

// Função para aumentar a rotação para direita e esquerda 
function keyPressed() {
  if (key === 'ArrowUp') {
    speed += 0.005;
  } else if (key === 'ArrowDown') {
    speed -= 0.005;
  } else if (key === ' ') {
    speed = 0;
  }
}
