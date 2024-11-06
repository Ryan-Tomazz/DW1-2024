let idcloseicon = document.querySelector("#closeicon")
let idmenuicon = document.querySelector("#menuicon")
let idsidebar = document.querySelector("#sidebar")
let idmain = document.querySelector("main")
let idlista = document.querySelector(".lista")

idmenuicon.addEventListener("click", showSidebar)
idcloseicon.addEventListener("click", hideSidebar)

function showSidebar(){
    idsidebar.style.display="flex"
    idmain.style.display="none"
    idmenuicon.style.display="none"
    idlista.style.display="none"
}

function hideSidebar(){
    idsidebar.style.display="none"
    idmain.style.display=""
    idmenuicon.style.display=""
    idlista.style.display=""
}