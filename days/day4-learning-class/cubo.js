
class cubo{
    constructor(width, length, high){
        this.width = width;
        this.length = length;
        this.high = high;
    }

    getArea(){
        return (this.width * 2)+(this.length * 2)
    }

}

module.exports = cubo;