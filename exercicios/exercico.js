function verifica(){
    alert(nome.value)
    nome.value = ""
    nome.focus()
    
};

oi = (nome) => "oi" + nome;

function botao(){
    alert("isso é um botão")
}

function aleatorio(limite){
    return Math.round(Math.random() * (limite - 1)+1)
    
}





alert("olá visitante")
var d1 = document.getElementById("d1")
var par = d1.getElementsByTagName('p')
var tam = par.length;
var nome = document.getElementById('nome')
var bot = document.querySelector('button')
nome.addEventListener("focus",function(){
    nome.style.backgroundColor = "orange"
})
nome.addEventListener("blur",function(){
    nome.style.backgroundColor = "white"
})
bot.onclick = verifica;
d1.style.height = "200px"
d1.style.width = "200px"
d1.style.position = "absolute"
d1.style.top = "20%"
d1.style.backgroundColor = "#ffbbaa"
d1.addEventListener("mouseover", function(){
    d1.style.backgroundColor = "#000"
})
d1.addEventListener("mouseleave", function(){
    d1.style.backgroundColor = "#ffbbaa"
})
    


alert("na div tem "+ tam + " paragrafos" )




var limit = document.getElementById("num")
limit.addEventListener("focus",function(){
    limit.style.backgroundColor = "orange"
})
limit.addEventListener("blur",function(){
    limit.style.backgroundColor = "white"
})
var ger = document.getElementById('ran')
ger.addEventListener("click",function(){
    var l = parseInt(limit.value)
    var n = aleatorio(l)
    alert("seu numero é " + n)
})

const div = document.getElementsByClassName("ver")
for(let g = 0;g<div.length;g++){
    div[g].style.width = "250px"
    div[g].style.textAlign = "center"
    div[g].style.height = "250px"
    div[g].style.backgroundColor = "#aaaaaa"
    div[g].style.position = "absolute"
    div[g].style.top = "50%"
}
div[0].innerHTML = "essa div foi usada getElementsByClassName"
div[1].style.left = "50%"
div[1].innerHTML = "essa também"


let center = document.getElementById("center")
center.style.textAlign ="center";
center.style.border ="5px solid black"
const h1 = document.querySelectorAll(".a")
for (let i = 0;i < h1.length;i++){
    h1[i].style.backgroundColor = "yellow"
}

let body = document.getElementById("body")
body.style.color = "#333"


