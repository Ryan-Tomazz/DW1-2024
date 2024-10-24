let idcloseicon = document.querySelector("#closeicon")
let idmenuicon = document.querySelector("#menuicon")
let idsidebar = document.querySelector("#sidebar")

idmenuicon.addEventListener("click", showSidebar)
idcloseicon.addEventListener("click", hideSidebar)

function showSidebar(){
    idsidebar.style.display="flex"
}

function hideSidebar(){
    idsidebar.style.display="none"
}