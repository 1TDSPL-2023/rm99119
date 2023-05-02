//Atrelando o evento click ao alemento h2
const h2Element = document.getElementById("titulo");

h2Element.addEventListener("click", ()=> {
    //Match função matemática..
    //Os metodos, floor, round e ceil eles arredondom os números passados.
    //O metodo random retorna um número entre 0 e 1. Ex: 0.1233

    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255)
    g = Math.round(Math.random()*255)
    b = Math.round(Math.random()*255)


  
    //h2Element.setAttribute("style", "color:rgb(" + r + "," + g +"," + b + ");");
    h2Element.setAttribute("style", `color:rgb (${r},${g},${b});`);
    h2Element.textContent = "Novo Titulo";
} );