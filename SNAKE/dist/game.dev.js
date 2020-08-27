"use strict";

var _snake = require("./snake.js");

var _food = require("./food.js");

var _grid = require("./grid.js");

var lastRenderTime = 0;
var gameOver = false;
var gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/';
    }

    return;
  }

  window.requestAnimationFrame(main);
  var secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / _snake.SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  (0, _snake.update)();
  (0, _food.update)();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  (0, _snake.draw)(gameBoard);
  (0, _food.draw)(gameBoard);
}

function checkDeath() {
  gameOver = (0, _grid.outsideGrid)((0, _snake.getSnakeHead)()) || (0, _snake.snakeIntersection)();
}