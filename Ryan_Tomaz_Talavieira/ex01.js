function somaSerie(n){
    let i = 1
    let j = 1 
    let d = 0
    let s = 0
    while (i <= n){
        d = j*i
        i ++
        j = j + 2 
        s += d  
    }
    console.log(s)
}

console.log(somaSerie(4))