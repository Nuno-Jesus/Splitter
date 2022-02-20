import {c} from './../index.js';

export class Player{
  constructor(position, radius, color){
    this.position = position;
    this.radius = radius;
    this.color = color;
  }

  draw(){
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, false);
    c.fillStyle = this.color;
    c.fill();
  }
}