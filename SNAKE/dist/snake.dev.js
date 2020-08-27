"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;
exports.draw = draw;
exports.expandSnake = expandSnake;
exports.onSnake = onSnake;
exports.getSnakeHead = getSnakeHead;
exports.snakeIntersection = snakeIntersection;
exports.SNAKE_SPEED = void 0;

var _input = require("./input.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SNAKE_SPEED = 5;
exports.SNAKE_SPEED = SNAKE_SPEED;
var snakeBody = [{
  x: 11,
  y: 11
}];
var newSegments = 0;

function update() {
  addSegments();
  var inputDirection = (0, _input.getInputDirection)();

  for (var i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = _objectSpread({}, snakeBody[i]);
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

function draw(gameBoard) {
  snakeBody.forEach(function (segment) {
    var snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}

function expandSnake(amount) {
  newSegments += amount;
}

function onSnake(position) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ignoreHead = _ref.ignoreHead,
      ignoreHead = _ref$ignoreHead === void 0 ? false : _ref$ignoreHead;

  return snakeBody.some(function (segment, index) {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

function getSnakeHead() {
  return snakeBody[0];
}

function snakeIntersection() {
  return onSnake(snakeBody[0], {
    ignoreHead: true
  });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (var i = 0; i < newSegments; i++) {
    snakeBody.push(_objectSpread({}, snakeBody[snakeBody.length - 1]));
  }

  newSegments = 0;
}