// import { Observable, BehaviorSubject, animationFrame } from './rxjs'
// import { DIRECTIONS, SPEED, SNAKE_LENGTH, FPS, APPLE_COUNT, POINTS_PER_APPLE } from './constants'
// import { Key, Point2D, Scene } from './types';

import {
  createCanvasElement,
 /*  renderScene,
  renderApples,
  renderSnake,
  renderScore,
  renderGameOver,
  getRandomPosition,
  checkCollision */
} from './canvas'
/* 
import {
  isGameOver,
  nextDirection,
  move,
  eat,
  generateSnake,
  generateApples
} from './utils'; */

/**
 * Create canvas element and append it to the page
 */
let canvas = createCanvasElement()
let ctx = canvas.getContext('2d')
document.body.appendChild(canvas)