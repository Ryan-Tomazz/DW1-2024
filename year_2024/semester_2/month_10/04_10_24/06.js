//Faça uma função que receba um valor numérico representando um ano (por exemplo, 1890) e verifique se o ano é ou não bissexto. Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.
function ano(n){
    if ( n%4 == 0 || n%400 == 0 ){
        console.log("ano bissexto")
    } else{
        console.log("não bissexto")
    }
}
console.log(ano(1988))
console.log(ano(2001))