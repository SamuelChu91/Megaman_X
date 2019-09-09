export default class Platform {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.collision = this.collision.bind(this);
  };

  collision(pX, pY, pWidth, pHeight) {
    const {
      x,
      y,
      width,
      height,
    } = this;
    const xCol = ((pX < x + width && pX > x) || (pX + pWidth < x + width && pX + pWidth > x));
    const yCol = ((pY < y + height && pY > y) || (pY + pHeight < y + height && pY + pHeight > y));
    return xCol && yCol;
  };
};

// think about how you can utilize different classes
// for collisions
