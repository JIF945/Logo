class shape {
    // constructor sets empty string for the color 
    constructor(){
        this.color = "";
    }
    // value of the color
    setColor (color) {
        this.color = 'color'
    }
    
    
};

// define class: shapes ( circle, triange, square )
// use the render method  for circle, triangle and square class. 

class circle extends shape {
    render(){
        return '<circle cx = "150" cy = "100" r = "70" fill ="${this.color}"/>'
    }
};

class triangle extends shape {
    render(){
        return '<polygon points = "100, 15 248, 182 56, 182" fill ="${this.color}"/>'
    }
};

class square extends shape {
    render(){
        return '<rectangle x = "90" y = "50" width = "70" height "70" fill ="${this.color}"/>';
    }
};
// exports the classes to index.js file
module.exports = { circle, triangle, square};