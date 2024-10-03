//]Escreva uma função que receba 3 números inteiros e devolva o menor entre eles.
let x = 0
let y = 0
let z = 0
function menor(x,y,z){
   
  if(x == y == z){
      console.log( "os números são iguais, logo não há um menor")}
  if(x = y){
    if(z < x){
        console.log(z+" é o menor")
    }
  }
  if(x = z){
    if(y <z){
        console.log(y+" é o menor")
    }
  } 
  if(z = y){
    if(x<y){
        console.log(x + " é o menor")
    } 
  }  
  if(x < z){
    if(x<y){
        console.log(x + " é o menor")
    }
  }
  if(y < x){
    if(y<z){
        console.log(y + " é o menor")
    }
  }
  if(z < x){
    if(z<y){
        console.log(z + " é o menor")
    }
  }

}
console.log(menor(7,3,5))