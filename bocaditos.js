let botonHamburguesaIni = document.getElementById('botonHamburguesa')
let botonPicadaIni = document.getElementById('botonPicada')
let botonArepaIni = document.getElementById('botonArepa')
let botonDeiniciarSecion = document.getElementById('bot-ini')

let sectionPrin = document.getElementById('tarjetas_comidas')

let sectionHambur = document.getElementById('catHamburguesas')
sectionHambur.style.display = 'none'
let sectionPicada = document.getElementById('catPicadas')
sectionPicada.style.display = 'none'
let sectionArepa = document.getElementById('catArepas')
sectionArepa.style.display = 'none'
let sectionSecion = document.getElementById('secSecion')
sectionSecion.style.display = 'none'

botonHamburguesaIni.addEventListener('click', mostrarHambur )
botonPicadaIni.addEventListener('click', mostrarPicada )
botonArepaIni.addEventListener('click', mostrarArepa )
botonDeiniciarSecion.addEventListener('click', initSection)

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






