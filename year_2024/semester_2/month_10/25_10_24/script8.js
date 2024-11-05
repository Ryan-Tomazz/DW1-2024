function remove (j){
    x = j.trim()
    return x
}

console.log(remove("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(remove("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"