const boton = document.getElementById('boton-color')
const boton_in = document.getElementById('boton-color_in')
const boton_fo = document.getElementById('boton-color_fo')
const boton_fc = document.getElementById('boton-color_fc')
const boton_ro = document.getElementById('boton-color_ro')
const boton_si = document.getElementById('boton-color_si')

// Guardar el codigo de los colores
const color = document.getElementById('color')
const color_in = document.getElementById('color_in')
const color_fo = document.getElementById('color_fo')
const color_fc = document.getElementById('color_fc')
const color_ro = document.getElementById('color_ro')
const color_si = document.getElementById('color_si')

//funion de cambio de color
function generarColorHexAleatorio(){
    //Almacena todos los digitos Hexadecimales posibles
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    //ciclo repetitivo para randomizar el Hexadecimal
    for(let i=0; i<6;i++){
        //Asigna los numeros aleatorios de manera aleatoria
        let indeceAleatorio = Math.floor(Math.random()*16)
        colorHex += digitos[indeceAleatorio]
    }

    return colorHex
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio()
    color.textContent = colorAleatorio
    document.body.style.backgroundColor = colorAleatorio
})

boton_in.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio()
    color_in.textContent = colorAleatorio
    document.body.children[0].children[1].style.backgroundColor = colorAleatorio
})

//console.log(document.body.children[0].children[1].children[1])

function fuenteG(){
    let fuentes = ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif','Lucida Sans']

    let index = Math.floor(Math.random()*6)
    let f_selec = fuentes[index]

    return f_selec
}

boton_fo.addEventListener('click',function(){
    let fuente = fuenteG()
    color_fo.innerText = fuente
    document.body.style.fontFamily = fuente

})

function t_fuen(){
    let x = Math.floor(Math.random()*40)+10
    let grande = x + "px"

    return grande
}

boton_fc.addEventListener('click', function(){
    let grande = t_fuen()
    color_fc.innerText = grande
    document.body.style.fontSize = grande
    
})

boton_ro.addEventListener('click', function(){
    let color = generarColorHexAleatorio()
    color_ro.innerText = color
    document.body.style.color = color
} )


boton_si.addEventListener('click', function(){
    const link = document.getElementsByTagName('a')
    color_si.innerHTML = link
    link[0].setAttribute('href', 'https://chat.openai.com/')
})