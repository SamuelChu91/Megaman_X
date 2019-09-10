import Game from './game';

const W = 700;
const H = 440;

export { W, H };

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = W;
  canvas.height = H;

  const game = new Game(ctx, canvas);
  // if (!game.paused) {
  //   game.pause();
  // } else {
  game.play();
  //   game.render();
  // }
});
