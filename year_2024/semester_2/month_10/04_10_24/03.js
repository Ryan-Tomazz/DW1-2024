function tri(l1, l2, l3) {
    let d = 0
    let c = 0
    let b = 0
    if (d = (l1 < (l2 + l3)) && (l1 > (Math.abs(l2 - l3)))) {
        console.log("as medidas formam um triângulo")
    } else {
        if (c = (l2 < (l1 + l3)) && (l2 > (Math.abs(l1 - l3)))) {
            console.log("as medidas formam um triângulo")
        } else {
            if (b = (l3 < (l2 + l1)) && (l3 > (Math.abs(l2 - l1)))) {
                console.log("as medidas formam um triângulo")
            } else { console.log("as medidas não formam um triângulo") }
        }
    }
    if (c == true || b == true || d == true) {
        if (l1 == l2 == l3) {
            console.log("equilátero")
        } else {
            if (l1 == l2 || l1 == l3 || l2 == l3) {
                console.log("isósceles")
            } else {
                if (l1 != l2 && l2 != l3) {
                    console.log("escaleno")
                }
            }
        }
    }

}

console.log(tri(10, 15, 10))