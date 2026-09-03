const clubes = document.querySelector ('#clubes')
const btbahia = document.querySelector('#btbahia')
const btvitoria = document.querySelector('#btvitoria')
const btrealmadrid = document.querySelector('#btrealmadrid')
const btroma = document.querySelector('#btroma')
const btarsenal = document.querySelector('#btarsenal')

// evento

btbahia.addEventListener('click',Bahia)
btvitoria.addEventListener('click',Vitoria)
btrealmadrid.addEventListener('click',Real_Madrid)
btroma.addEventListener('click',Roma)
btarsenal.addEventListener('click',Arsenal)

// função

function Bahia(){
    clubes.src = 'images/bahia.jpg'
}

function Vitoria(){
    clubes.src = 'images/wp3911751.jpg'
}

function Real_Madrid(){
    clubes.src = 'images/Real_Madrid.png'
}

function Roma(){
    clubes.src = 'images/AS_Roma_logo.png'
}

function Arsenal(){
    clubes.src = 'images/arsenal.jpg'
}

