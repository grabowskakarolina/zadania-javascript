"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomGridPosition = randomGridPosition;
exports.outsideGrid = outsideGrid;
var GRID_SIZE = 21;

function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  };
}

function outsideGrid(position) {
  return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}