let botonHamburguesaIni = document.getElementById('botonHamburguesa')
let botonPicadaIni = document.getElementById('botonPicada')
let botonArepaIni = document.getElementById('botonArepa')
let botonDeiniciarSecion = document.getElementById('bot-ini')

let extCatHambur = document.getElementById('salir-de-hambur')
let extCatPicada = document.getElementById('salir-de-picadas')
let extCatArepa = document.getElementById('salir-de-arepas')
let extInitSection = document.getElementById('salir-de-initSection')
let extVerifiedcuenta = document.getElementById('salir-de-pedidos')

let sectionPrin = document.getElementById('tarjetas_comidas')

let sectionHambur = document.getElementById('catHamburguesas')
sectionHambur.style.display = 'none'
let sectionPicada = document.getElementById('catPicadas')
sectionPicada.style.display = 'none'
let sectionArepa = document.getElementById('catArepas')
sectionArepa.style.display = 'none'
let sectionSecion = document.getElementById('secSecion')
sectionSecion.style.display = 'none'
let sectionPedidos = document.getElementById('seccion-de-pedidos')
sectionPedidos.style.display = 'none'

extCatHambur.addEventListener('click',salirDeHamburguesas )
extCatPicada.addEventListener('click',salirDePicada )
extCatArepa.addEventListener('click',salirDeArepa )
extInitSection.addEventListener('click', salirDeIniSesion )
extVerifiedcuenta.addEventListener('click', salirDePedidos )

botonHamburguesaIni.addEventListener('click', mostrarHambur )
botonPicadaIni.addEventListener('click', mostrarPicada )
botonArepaIni.addEventListener('click', mostrarArepa )
botonDeiniciarSecion.addEventListener('click', initSection)

function salirDeHamburguesas () {
    sectionHambur.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
}
function salirDePicada () {
    sectionPicada.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
}
function salirDeArepa () {
    sectionArepa.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
}
function salirDeIniSesion () {
    sectionSecion.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
}
function salirDePedidos () {
    sectionPedidos.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
}


function initSection () {
    botonDeiniciarSecion.style.display = 'none'
    sectionPrin.style.display = 'none'
    sectionSecion.style.display = 'block'
}
function mostrarHambur () {
    botonDeiniciarSecion.style.display = 'none'
    sectionPrin.style.display = 'none'
    sectionHambur.style.display = 'block'
}
function mostrarPicada () {
    botonDeiniciarSecion.style.display = 'none'
    sectionPrin.style.display = 'none'
    sectionPicada.style.display = 'block'
}
function mostrarArepa () {
    botonDeiniciarSecion.style.display = 'none'
    sectionPrin.style.display = 'none'
    sectionArepa.style.display = 'block'
}

function contraVerifi(){
 let contraseña="Bocados-Nemococo"
 let user="Dilan-Bocados.com"

 if(document.form.password.value==contraseña && document.form.login.value==user){
    sectionSecion.style.display = 'none'
    sectionPedidos.style.display = 'block'
 }
 else{
    alert("por favor ingresa nombre y usuario correctos")
 }
}



