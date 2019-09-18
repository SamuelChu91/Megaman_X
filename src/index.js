import Game from './game';
import Background from './background';
import Player from './player';

const W = 700;
const H = 440;

export { W, H };

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = W;
  canvas.height = H;

  
  canvas.addEventListener('click', () => {
    const player = new Player(ctx);
    const background = new Background(ctx);
    const game = new Game(ctx, canvas, player, background);
    game.play();
  });

  // const game = new Game(ctx, canvas);
  // game.play();
});
