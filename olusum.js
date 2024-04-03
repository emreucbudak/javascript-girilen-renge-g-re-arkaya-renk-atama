let kutum = document.querySelector(".kutu");
let kutum1 = document.querySelector("#text");
let formum = document.querySelector("#formum")
formum.addEventListener("keyup",renkBul);
function renkBul() {
    let kutum2 = kutum1.value;
    renkAta(kutum2);
}
function renkAta(a) {
    kutum.setAttribute("style","background-color : " +a);
}