function parseCount(num){
    let result = Number.parseFloat(num);
    if (Number.isNaN(result)){
        throw new Error("Невалидное значение")
    }
    return result;
}

function validateCount(num){
    try {
        let result = parseCount(num);
        return result;
    } catch (error) {
        return error;
    }    
}

class Triangle {
    constructor(side1, side2, side3) {
        if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
            throw new Error ("Треугольник с такими сторонами не существует")
        }
    
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    }

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
     
    get area() {
        const s = (this.side1 + this.side2 + this.side3) / 2;
        const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
        return Number(area.toFixed(3));
    }
}

function getTriangle(length1, length2, length3) {
    try {
        const triangle = new Triangle(length1, length2, length3);
        return triangle;
    } catch (error){
        const object = {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
        return Object.freeze(object);
    }
}

