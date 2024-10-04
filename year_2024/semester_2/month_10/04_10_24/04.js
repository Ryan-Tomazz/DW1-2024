function dosagem(i,p){
    if(i > 12 && p >= 60){
        console.log("deve tomar 1000mg")
    } else{
        if(i>12 && p<=60){
            console.log("devem tomar 875mg")
        } else{
            if(i<12 && p>=5 && p<=9){
                console.log("devem tomar 125mg")
            } else{
                if(i<12 && p>=9.1 && p <= 16){
                    console.log("devem tomar 250mg")
                } else {
                    if(i<12 && p>=16.1 && p<=24){ 
                        console.log("devem tomar 500mg")
                    } else {
                        console.log("devem tomar 750mg")
                    }
                }
            }
        }
    }
}

console.log(dosagem(11,25))