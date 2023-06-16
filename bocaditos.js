let botonHamburguesaIni = document.getElementById('botonHamburguesa')
let botonPicadaIni = document.getElementById('botonPicada')
let botonArepaIni = document.getElementById('botonArepa')

let sectionHambur = document.getElementById('catHamburguesas')
sectionHambur.style.display = 'none'
let sectionPicada = document.getElementById('catPicadas')
sectionPicada.style.display = 'none'
let sectionArepa = document.getElementById('catArepas')
sectionArepa.style.display = 'none'


botonHamburguesaIni.addEventListener('click', catalogoPrin )
botonPicadaIni.addEventListener('click', catalogoPrin )
botonArepaIni.addEventListener('click', catalogoPrin )


botonHamburguesaIni.addEventListener('click', mostrarHambur )
botonPicadaIni.addEventListener('click', mostrarPicada )
botonArepaIni.addEventListener('click', mostrarArepa )



function catalogoPrin () {
    let sectionPrin = document.getElementById('tarjetas_comidas')
    sectionPrin.style.display = 'none'
}

function mostrarHambur () {
    let sectionHambur = document.getElementById('catHamburguesas')
    sectionHambur.style.display = 'block'
}
function mostrarPicada () {
    let section = document.getElementById('catPicadas')
    section.style.display = 'block'
}
function mostrarArepa () {
    let section = document.getElementById('catArepas')
    section.style.display = 'block'
}






