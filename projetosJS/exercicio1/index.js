let titulo = document.querySelector("#textoPrincipal")
let campoTexto = document.querySelector("#campoTexto")
let botao = document.querySelector("#btEnviar")


function trocarTexto(){
    let tituloAntigo = titulo.textContent
    titulo.textContent = campoTexto.value
    campoTexto.value = tituloAntigo
}

botao.onclick = () => trocarTexto()