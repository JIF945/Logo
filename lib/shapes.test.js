// modules to run shape test
const  { circle, triangle, square,} = require("./shapes");
const logo = require("./logo");


// //  create new shapes, define test, and set color for ( circle, triangle, square)
//  output is the expected return 

describe("triangle",() => {
    test("should render svg for a green polygon element", () => {
    const tri = new triangle();
    tri.setColor("green");
    expect(tri.render()).toEqual(`<polygon points = "100, 15 244, 182 56, 182" fill ="green"/>`)
})  
})

describe("circle",() => {
    test("should render svg for a blue polygon element", () => {
    const cir = new circle();
    cir.setColor("blue");
    expect(cir.render()).toEqual(`<circle cx = "150" cy = "100" r = "70" fill ="blue" />`)
})  
})

describe("square",() => {
    test("should render svg for a blue polygon element", () => {
    const squ = new square();
    squ.setColor("red");
    expect(squ.render()).toEqual(`<rect x = "90" y = "50" width = "150" height = "150" fill ="red"/>`)
})  
})