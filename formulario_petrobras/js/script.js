// DOM
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const bt = document.querySelector('#bt')
const valor = document.querySelector('#valor')


// EVENTO
bt.addEventListener('click', calcular)




/// FUNCTON
function calcular(){

    d = Number(distancia.value)
    c = Number(consumo.value)
    p = Number(preco.value)

    if (c === 0) {
        valor.textContent = "O consumo não pode ser 0!"
        return
    
    }
    
    calculo = (d/c)*p

    if (calculo <= 200) {
        valor.textContent = `Economizou! O custo ficou em R$ ${calculo.toFixed(2)}`
    } else if (calculo > 200 && calculo <= 1000) {
        valor.textContent = `Planejou bem! O custo ficou em R$ ${calculo.toFixed(2)}`
    } else {
        valor.textContent = `Saiu no prejuizo! O custo ficou em R$ ${calculo.toFixed(2)}`
    }
}




