import {Player} from './js/player.js';

export const canvas = document.querySelector('canvas');
export const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const position = {
  x : canvas.width / 2,
  y : canvas.height / 2
};

let player = new Player(position, 60, '#FF0000');
console.log(player);
player.draw();

