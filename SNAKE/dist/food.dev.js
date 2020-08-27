"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;
exports.draw = draw;

var _snake = require("./snake.js");

var _grid = require("./grid.js");

var food = getRandomFoodPosition();
var EXPANSION_RATE = 1;

function update() {
  if ((0, _snake.onSnake)(food)) {
    (0, _snake.expandSnake)(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

function draw(gameBoard) {
  var foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  var newFoodPosition;

  while (newFoodPosition == null || (0, _snake.onSnake)(newFoodPosition)) {
    newFoodPosition = (0, _grid.randomGridPosition)();
  }

  return newFoodPosition;
}