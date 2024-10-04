function tri(l1, l2, l3) {
    if ((l1 < (l2 + l3)) && (l1 >(Math.abs (l2 - l3)))) {
        console.log("as medidas formam um triângulo")
    } else {
        if ((l2 < (l1 + l3)) && (l2 >(Math.abs (l1 - l3)))) {
            console.log("as medidas formam um triângulo")
        } else {
            if ((l3 < (l2 + l1)) && (l3 >( Math.abs(l2 - l1)))) {
                console.log("as medidas formam um triângulo")
            } else { console.log("as medidas não formam um triângulo") }
        }
    }
}

console.log(tri(1, 15, 20))
console.log(tri(10, 15, 20))





