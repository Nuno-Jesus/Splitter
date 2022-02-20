import { Player } from './js/player.js';
import { Enemy } from './js/enemy.js';
import { Projectile } from './js/projectile.js';

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext("2d");
const spawnDelay = 1000;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const position = assemble(canvas.width / 2, canvas.height / 2);

let player = new Player(position, 60, '#FF0000');
var projectiles = [];
var enemies = [];

//Whenever the player clicks on the screen it creates a projectile in the same direction 
addEventListener('click', function(event){
  const x = event.clientX - canvas.width / 2;
  const y = event.clientY - canvas.height / 2;

  const angle = Math.atan2(y, x);

  const speed = assemble(Math.cos(angle), Math.sin(angle));
  const position = assemble(canvas.width / 2, canvas.height / 2);
  
  const projectile = new Projectile(position, speed, 10, '#AAAAAA');
  projectiles.push(projectile);

}, false);

function spawnEnemies(){
  setInterval(function(){
    const radius = Math.ceil(Math.random() * 30 + 20);
    const position = generateCoordinates(radius);

    const deltaX = canvas.width / 2 - position.x;
    const deltaY = canvas.height / 2 - position.y;
    const angle = Math.atan2(deltaY, deltaX);

    const speed = assemble(Math.cos(angle), Math.sin(angle));
    
    const enemy = new Enemy(position, speed, radius, '#8800FF');
    enemies.push(enemy);

  }, spawnDelay);
}

function animate(){
  requestAnimationFrame(animate);

  //Clears the previous frame
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  player.draw();
  projectiles.forEach((projectile, index) => {
    projectile.update();
  });

  enemies.forEach((enemy, index) => {
    enemy.update();
  });
}

function assemble(x, y){
  const property = {
    x: x,
    y: y
  };

  return property;
}

function generateCoordinates(radius){
  let position = {
    x : 0,
    y : 0
  };

  //Generate horizontally
  if(Math.random() < 0.5){
    position.x = Math.ceil(Math.random() * canvas.width);
    //Generate either on top or bottom
    position.y = Math.random() < 0.5 ? -radius : canvas.height + radius;
  }

  //Generate vertically
  else{
    position.y = Math.ceil(Math.random() * canvas.height);
    //Generate either on the left or right
    position.x = Math.random() < 0.5 ? -radius : canvas.width + radius;
  }

  return position;
}

animate();
spawnEnemies();

