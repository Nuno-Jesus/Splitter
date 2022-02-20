import {Player} from './js/player.js';
import { Projectile } from './js/projectile.js';

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const position = assemble(canvas.width / 2, canvas.height / 2);

let player = new Player(position, 60, '#FF0000');
var projectiles = [];

addEventListener('click', function(event){
  const x = event.clientX - canvas.width / 2;
  const y = event.clientY - canvas.height / 2;

  const angle = Math.atan2(y, x);

  const speed = assemble(Math.cos(angle), Math.sin(angle));
  const position = assemble(canvas.width / 2, canvas.height / 2);
  
  const projectile = new Projectile(position, speed, 10, '#AAAAAA');
  projectiles.push(projectile);

}, false);

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  player.draw();
  projectiles.forEach((projectile, index) => {
    projectile.update();
  });
}

function assemble(x, y){
  const property = {
    x: x,
    y: y
  };

  return property;
}

animate();


