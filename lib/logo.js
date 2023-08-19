// class for the logo
class logo {
    // constructor sets empty string for the text and shape
    constructor(){
        this.text = "";
        this.shape = "";
    }
    // render method for logo
    render(){
        return `<svg version = "1.1" width = "300" height = "200" xmlns ="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
// class to set the text element of logo
    setText(textValue, textColor) {
        // check to make sure only 1-3 characters are used.
        if (textValue.length > 3) {
            error("enter 1-3 characters");
        }
        // text alignment
        this.text = `<text x = "150" y = "125" font-size = "60" text-anchor = "middle" fill = "${textColor}">${textValue} </text>`
    }
    // class to set the shape 
    // render method to align the shape of logo
    setShape(shapeValue) {
        this.shape = shapeValue.render();
    }
};
// exports logo to index.js
module.exports = logo;