import {c} from './../index.js';

export class Particle{
  constructor(position, speed, radius, color){
    this.position = position;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
    this.alpha = 1.00;
    this.friction = 0.99;
  }

  draw(){
    c.save();
    c.globalAlpha = this.alpha;
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, false);
    c.fillStyle = this.color;
    c.fill();
    c.restore();
  }

  update(){
    this.draw();
    this.speed.x *= this.friction;
    this.speed.y *= this.friction;
    this.position.x = this.position.x + this.speed.x;
    this.position.y = this.position.y + this.speed.y;
    this.alpha -= 0.01;
  }
}