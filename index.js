import {Player} from './js/player.js';
import { Projectile } from './js/projectile.js';

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const position = {
  x : canvas.width / 2,
  y : canvas.height / 2
};

var projectiles = [];

let player = new Player(position, 60, '#FF0000');

addEventListener('click', function(event){
  const x = event.clientX - canvas.width / 2;
  const y = event.clientY - canvas.height / 2;

  const angle = Math.atan2(y, x);
  
  const speed = {
    x : Math.cos(angle),
    y : Math.sin(angle)
  };

  const position = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };
  
  const projectile = new Projectile(position, speed, 10, '#AAAAAA');
  console.log(projectile);
  projectiles.push(projectile);
}, false);

function animate(){
  requestAnimationFrame(animate);
  projectiles.forEach((projectile, index) => {
    projectile.update();
  });
}

player.draw();
animate();


