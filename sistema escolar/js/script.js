//DOM
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const bt = document.querySelector('#bt')
const media = document.querySelector('#media')
const situacao = document.querySelector('#situacao')

// EVENTO

bt.addEventListener('click', medias)

// FUNÇÃO
function medias(){

n1 = Number(nota1.value)
n2 = Number(nota2.value)
n3 = Number(nota3.value)
calculo = (n1+n2+n3)/3

media.textContent = `A sua média é ${calculo.toFixed(2)}`

if (calculo >=5){
    situacao.textContent = `Você foi aprovado`
} else
    situacao.textContent = `Você foi reprovado`
}