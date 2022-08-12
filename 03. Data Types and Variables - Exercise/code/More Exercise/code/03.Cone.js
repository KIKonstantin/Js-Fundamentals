function cone(radius, height){
    // V= (1/3) * 3.14 * r*r * h;
    // slant height : s= Math.sqrt(Math.pow(r) + Math.pow(h))
    // area: L = Math.PI * r * s;

    let s = Math.sqrt(radius * radius + height * height);
    let L = Math.PI * radius * s;
    let V = (1/3) * Math.PI * radius * radius * height;
    let B = Math.PI * radius * radius;
    let A = L + B;

    console.log (`volume = ${V.toFixed(4)}`);
    console.log (`area = ${A.toFixed(4)}`);

}
cone(3, 5)