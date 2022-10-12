function trocaCafe(img){
    document.querySelector('.cafezao').src = img
}

function trocaCor(cor){
    const circulo = document.querySelector('.circulo')
    circulo.style.background = cor

}

function trocaTexto(cor){
    const texto = document.querySelector('.star')
    texto.style.color = cor
}

function trocaBotao(cor){
    const botao = document.querySelector('.botao')
    botao.style.background = cor
}

function barraMenu(){
    var menu = document.querySelector('.barra-menu')
    menu.classList.toggle('active')
    var nav = document.querySelector('.menu')
    nav.classList.toggle('active')

}