'use strict';
/** Imports */
import State from './state';

// Webpack will replace these imports with a URLs to images
const playerImage   = require('assets/images/player.png');
const enemyImage    = require('assets/images/enemy.png');
const wallImage     = require('assets/images/wall.png');
const floorImage    = require('assets/images/floor.png');


// The state for loading core resources for the game
export default class PreloaderState extends State {
  preload(): void {
    console.debug('Assets loading started');

    this.game.load.image('player', playerImage);
    this.game.load.image('enemy', enemyImage);
    this.game.load.image('wall', wallImage);
    this.game.load.image('floor', floorImage);
  }

  create(): void {
    console.debug('Assets loading completed');

    this.game.state.start('main'); // Switch to main game state
  }
}
