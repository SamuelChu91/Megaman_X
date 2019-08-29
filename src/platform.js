export default class Platform {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    collision(pX, pY, pWidth, pHeight) {
        let xCol = ((pX < x + width && pX > x) || (pX + pWidth < x + width && pX + pWidth > x));
        let yCol = ((pY < y + height && pY > y) || (pY + pHeight < y + height && pY + pHeight > y));
        return xCol && yCol;
    }
}

// think about how you can utilize different classes