//dom
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const bt = document.querySelector('#bt')
const r1 = document.querySelector('#r1')
const r2 = document.querySelector('#r2')

// evento

bt.addEventListener('click', imc)


// função

function imc(){

    p = Number(peso.value)
    a = Number(altura.value)
    calculo = p/(a*a)

    r1.textContent = `O seu IMC é ${calculo.toFixed(2)}`

    if(calculo <18.5){
        r2.textContent = `Você está abaixo do seu PESO`
    }else if(calculo >=18.5 && calculo<25){
        r2.textContent = `Você está na média`
    }else if(calculo >=25 && calculo <30){
        r2.textContent = `Você está acima da média do seu PESO`
    }else
    r2.textContent = `Você está com obesidade`
}