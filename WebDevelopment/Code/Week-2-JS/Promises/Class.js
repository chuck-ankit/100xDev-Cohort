//Classes in JS

const { Console } = require("console");

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }
    paint() {
        console.log(`Painting this area with the color ${this.color}`);
    }
    destroy() {

    }


}

const rect = new Rectangle(2, 4, 'Red');
const rect2 = new Rectangle(3,5,'Blue');
const area = rect.area();
const area2 = rect2.area();
rect.paint();
console.log(area);
console.log(area2);