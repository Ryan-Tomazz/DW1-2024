let condicao1 = true;
let condicao2 = true;
let condicao3 = true;
let condicao4 = true;
let condicao5 = true;
let condicao6 = true;
let condicao7 = true;

switch (condicao1) {
    case true:
        switch (condicao2) {
            case true:
                switch (condicao3) {
                    case true:
                        console.log("1");
                        break;
                    case false:
                        console.log("2");
                        break;
                }
                break;
            case false:
                switch (condicao4) {
                    case true:
                        console.log("3");
                        break;
                    case false:
                        console.log("4");
                        break;
                }
                break;
        }
        break;
    case false:
        switch (condicao5) {
            case true:
                switch (condicao6) {
                    case true:
                        console.log("5");
                        break;
                    case false:
                        console.log("6");
                        break;
                }
                break;
            case false:
                switch (condicao7) {
                    case true:
                        console.log("7");
                        break;
                    case false:
                        console.log("8");
                        break;
                }
                break;
        }
        break;
}