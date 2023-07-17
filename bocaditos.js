let botonHamburguesaIni = document.getElementById('botonHamburguesa')
let botonPicadaIni = document.getElementById('botonPicada')
let botonArepaIni = document.getElementById('botonArepa')
let botonPataconIni = document.getElementById('botonPatacon')
let botonSalchiIni = document.getElementById('botonSalchi')
let botonDeiniciarSecion = document.getElementById('bot-ini')

let botonDeHambur1 = document.getElementById('InfoYCompraHAmbur1')
let botonDeHambur2 = document.getElementById('InfoYCompraHAmbur2')
let botonDeHambur3 = document.getElementById('InfoYCompraHAmbur3')
let botonDeHambur4 = document.getElementById('InfoYCompraHAmbur4')
let botonDeHambur5 = document.getElementById('InfoYCompraHAmbur5')
let botonDeHambur6 = document.getElementById('InfoYCompraHAmbur6')
let botonDeHambur7 = document.getElementById('InfoYCompraHAmbur7')
let botonDeHambur8 = document.getElementById('InfoYCompraHAmbur8')
let botonDeHambur9 = document.getElementById('InfoYCompraHAmbur9')
let botonDeHambur10 = document.getElementById('InfoYCompraHAmbur10')

let botonDePicada1 = document.getElementById('InfoYCompraPicada1')
let botonDePicada2 = document.getElementById('InfoYCompraPicada2')
let botonDePicada3 = document.getElementById('InfoYCompraPicada3')
let botonDePicada4 = document.getElementById('InfoYCompraPicada4')
let botonDePicada5 = document.getElementById('InfoYCompraPicada5')
let botonDePicada6 = document.getElementById('InfoYCompraPicada6')
let botonDePicada7 = document.getElementById('InfoYCompraPicada7')
let botonDePicada8 = document.getElementById('InfoYCompraPicada8')
let botonDePicada9 = document.getElementById('InfoYCompraPicada9')
let botonDePicada10 = document.getElementById('InfoYCompraPicada10')

let botonDeArepa1 = document.getElementById('InfoYCompraArepa1')
let botonDeArepa2 = document.getElementById('InfoYCompraArepa2')
let botonDeArepa3 = document.getElementById('InfoYCompraArepa3')
let botonDeArepa4 = document.getElementById('InfoYCompraArepa4')
let botonDeArepa5 = document.getElementById('InfoYCompraArepa5')
let botonDeArepa6 = document.getElementById('InfoYCompraArepa6')
let botonDeArepa7 = document.getElementById('InfoYCompraArepa7')
let botonDeArepa8 = document.getElementById('InfoYCompraArepa8')
let botonDeArepa9 = document.getElementById('InfoYCompraArepa9')
let botonDeArepa10 = document.getElementById('InfoYCompraArepa10')

let botonDePatacon1 = document.getElementById('InfoYCompraPataco1')
let botonDePatacon2 = document.getElementById('InfoYCompraPataco2')
let botonDePatacon3 = document.getElementById('InfoYCompraPataco3')
let botonDePatacon4 = document.getElementById('InfoYCompraPataco4')
let botonDePatacon5 = document.getElementById('InfoYCompraPataco5')
let botonDePatacon6 = document.getElementById('InfoYCompraPataco6')
let botonDePatacon7 = document.getElementById('InfoYCompraPataco7')
let botonDePatacon8 = document.getElementById('InfoYCompraPataco8')
let botonDePatacon9 = document.getElementById('InfoYCompraPataco9')
let botonDePatacon10 = document.getElementById('InfoYCompraPataco10')

let botonDeSalchipapas1 = document.getElementById('InfoYCompraSalchi1')
let botonDeSalchipapas2 = document.getElementById('InfoYCompraSalchi2')
let botonDeSalchipapas3 = document.getElementById('InfoYCompraSalchi3')
let botonDeSalchipapas4 = document.getElementById('InfoYCompraSalchi4')
let botonDeSalchipapas5 = document.getElementById('InfoYCompraSalchi5')
let botonDeSalchipapas6 = document.getElementById('InfoYCompraSalchi6')
let botonDeSalchipapas7 = document.getElementById('InfoYCompraSalchi7')
let botonDeSalchipapas8 = document.getElementById('InfoYCompraSalchi8')
let botonDeSalchipapas9 = document.getElementById('InfoYCompraSalchi9')
let botonDeSalchipapas10 = document.getElementById('InfoYCompraSalchi10')

let divDeHamburguesaInf = document.getElementById('compraEInfoDeHamburguesa')
divDeHamburguesaInf.style.display = 'none'
let divDePicadaInf = document.getElementById('compraEInfoDePicada')
divDePicadaInf.style.display = 'none'
let divDeArepaInf = document.getElementById('compraEInfoDeArepa')
divDeArepaInf.style.display = 'none'
let divDePatacoInf = document.getElementById('compraEInfoDePatacones')
divDePatacoInf.style.display = 'none'
let divDeSalchiInf = document.getElementById('compraEInfoDeSalchipapas')
divDeSalchiInf.style.display = 'none'


let extCatHambur = document.getElementById('salir-de-hambur')
let extCatPicada = document.getElementById('salir-de-picadas')
let extCatArepa = document.getElementById('salir-de-arepas')
let extCatPatacones = document.getElementById('salir-de-patacones')
let extCatSalchi = document.getElementById('salir-de-salchipapas')
let extInitSection = document.getElementById('salir-de-initSection')
let extVerifiedcuenta = document.getElementById('salir-de-pedidos')

let sectionPrin = document.getElementById('tarjetas_comidas')

let sectionHambur = document.getElementById('catHamburguesas')
sectionHambur.style.display = 'none'
let sectionPicada = document.getElementById('catPicadas')
sectionPicada.style.display = 'none'
let sectionArepa = document.getElementById('catArepas')
sectionArepa.style.display = 'none'
let sectionPatacones = document.getElementById('catPatacones')
sectionPatacones.style.display = 'none'
let sectionSalchipaps = document.getElementById('catSalchipapas')
sectionSalchipaps.style.display = 'none'
let sectionSecion = document.getElementById('secSecion')
sectionSecion.style.display = 'none'
let sectionPedidos = document.getElementById('seccion-de-pedidos')
sectionPedidos.style.display = 'none'

botonDeHambur1.addEventListener('click',mostraInfHambur1)
botonDeHambur2.addEventListener('click',mostraInfHambur2)
botonDeHambur3.addEventListener('click',mostraInfHambur3)
botonDeHambur4.addEventListener('click',mostraInfHambur4)
botonDeHambur5.addEventListener('click',mostraInfHambur5)
botonDeHambur6.addEventListener('click',mostraInfHambur6)
botonDeHambur7.addEventListener('click',mostraInfHambur7)
botonDeHambur8.addEventListener('click',mostraInfHambur8)
botonDeHambur9.addEventListener('click',mostraInfHambur9)
botonDeHambur10.addEventListener('click',mostraInfHambur10)

botonDePicada1.addEventListener('click',mostraInfPicada1)
botonDePicada2.addEventListener('click',mostraInfPicada2)
botonDePicada3.addEventListener('click',mostraInfPicada3)
botonDePicada4.addEventListener('click',mostraInfPicada4)
botonDePicada5.addEventListener('click',mostraInfPicada5)
botonDePicada6.addEventListener('click',mostraInfPicada6)
botonDePicada7.addEventListener('click',mostraInfPicada7)
botonDePicada8.addEventListener('click',mostraInfPicada8)
botonDePicada9.addEventListener('click',mostraInfPicada9)
botonDePicada10.addEventListener('click',mostraInfPicada10)

botonDeArepa1.addEventListener('click',mostraInfArepa1)
botonDeArepa2.addEventListener('click',mostraInfArepa2)
botonDeArepa3.addEventListener('click',mostraInfArepa3)
botonDeArepa4.addEventListener('click',mostraInfArepa4)
botonDeArepa5.addEventListener('click',mostraInfArepa5)
botonDeArepa6.addEventListener('click',mostraInfArepa6)
botonDeArepa7.addEventListener('click',mostraInfArepa7)
botonDeArepa8.addEventListener('click',mostraInfArepa8)
botonDeArepa9.addEventListener('click',mostraInfArepa9)
botonDeArepa10.addEventListener('click',mostraInfArepa10)

botonDePatacon1.addEventListener('click',mostraInfPatacon1)
botonDePatacon2.addEventListener('click',mostraInfPatacon2)
botonDePatacon3.addEventListener('click',mostraInfPatacon3)
botonDePatacon4.addEventListener('click',mostraInfPatacon4)
botonDePatacon5.addEventListener('click',mostraInfPatacon5)
botonDePatacon6.addEventListener('click',mostraInfPatacon6)
botonDePatacon7.addEventListener('click',mostraInfPatacon7)
botonDePatacon8.addEventListener('click',mostraInfPatacon8)
botonDePatacon9.addEventListener('click',mostraInfPatacon9)
botonDePatacon10.addEventListener('click',mostraInfPatacon10)

botonDeSalchipapas1.addEventListener('click',mostraInfSalchipapas1)
botonDeSalchipapas2.addEventListener('click',mostraInfSalchipapas2)
botonDeSalchipapas3.addEventListener('click',mostraInfSalchipapas3)
botonDeSalchipapas4.addEventListener('click',mostraInfSalchipapas4)
botonDeSalchipapas5.addEventListener('click',mostraInfSalchipapas5)
botonDeSalchipapas6.addEventListener('click',mostraInfSalchipapas6)
botonDeSalchipapas7.addEventListener('click',mostraInfSalchipapas7)
botonDeSalchipapas8.addEventListener('click',mostraInfSalchipapas8)
botonDeSalchipapas9.addEventListener('click',mostraInfSalchipapas9)
botonDeSalchipapas10.addEventListener('click',mostraInfSalchipapas10)

extCatHambur.addEventListener('click',salirDeHamburguesas )
extCatPicada.addEventListener('click',salirDePicada )
extCatArepa.addEventListener('click',salirDeArepa )
extCatPatacones.addEventListener('click', salirDePatacones)
extCatSalchi.addEventListener('click',salirDeSalchipapas)
extInitSection.addEventListener('click', salirDeIniSesion )
extVerifiedcuenta.addEventListener('click', salirDePedidos )

botonHamburguesaIni.addEventListener('click', mostrarHambur )
botonPicadaIni.addEventListener('click', mostrarPicada )
botonArepaIni.addEventListener('click', mostrarArepa )
botonPataconIni.addEventListener('click', mostrarPatacones)
botonSalchiIni.addEventListener('click', mostrarSalchi)
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
function salirDePatacones () {
    sectionPatacones.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
}
function salirDeSalchipapas () {
    sectionSalchipaps.style.display = 'none'
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
function mostrarPatacones () {
    botonDeiniciarSecion.style.display = 'none'
    sectionPrin.style.display = 'none'
    sectionPatacones.style.display = 'block'
}
function mostrarSalchi () {
    botonDeiniciarSecion.style.display = 'none'
    sectionPrin.style.display = 'none' 
    sectionSalchipaps.style.display = 'block'
}

function mostraInfHambur1 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.position = 'absolute';
    divDeHamburguesaInf.style.top = '50px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 1.';
}
function mostraInfHambur2 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.position = 'absolute';
    divDeHamburguesaInf.style.top = '350px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 2.';
}
function mostraInfHambur3 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '650px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 3.';
}
function mostraInfHambur4 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '950px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 4.';
}
function mostraInfHambur5 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '1250px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 5.';
}
function mostraInfHambur6 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '1550px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 6.';
}
function mostraInfHambur7 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '1900px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 7.';
}
function mostraInfHambur8 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '2200px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 8.';
}
function mostraInfHambur9 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '2500px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 9.';
}
function mostraInfHambur10 () {
    divDeHamburguesaInf.style.display = 'block'
    divDeHamburguesaInf.style.top = '2850px';
    divDeHamburguesaInf.style.left = '400px';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 10.';
}

function mostraInfPicada1 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.position = 'absolute';
    divDePicadaInf.style.top = '50px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 1.';
}
function mostraInfPicada2 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '350px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 2.';
}
function mostraInfPicada3 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '650px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 3.';
}
function mostraInfPicada4 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '950px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 4.';
}
function mostraInfPicada5 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '1250px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 5.';
}
function mostraInfPicada6 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '1550px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 6.';
}
function mostraInfPicada7 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '1900px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 7.';
}
function mostraInfPicada8 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '2200px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 8.';
}
function mostraInfPicada9 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '2500px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 9.';
}
function mostraInfPicada10 () {
    divDePicadaInf.style.display = 'block'
    divDePicadaInf.style.top = '2850px';
    divDePicadaInf.style.left = '400px';
    divDePicadaInf.textContent = 'Este es el texto del botón 10.';
}

function mostraInfArepa1 () {
    divDeArepaInf.style.display = 'block'
    divDeArepaInf.style.position = 'absolute';
    divDeArepaInf.style.top = '100px';
    divDeArepaInf.style.left = '100px';
}
function mostraInfArepa2 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa3 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa4 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa5 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa6 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa7 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa8 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa9 () {
    divDeArepaInf.style.display = 'block'
}
function mostraInfArepa10 () {
    divDeArepaInf.style.display = 'block'
}

function mostraInfPatacon1 () {
    divDePatacoInf.style.display = 'block'
    divDePatacoInf.style.position = 'absolute';
    divDePatacoInf.style.top = '100px';
    divDePatacoInf.style.left = '100px';
}
function mostraInfPatacon2 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon3 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon4 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon5 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon6 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon7 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon8 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon9 () {
    divDePatacoInf.style.display = 'block'
}
function mostraInfPatacon10 () {
    divDePatacoInf.style.display = 'block'
}

function mostraInfSalchipapas1 () {
    divDeSalchiInf.style.display = 'block'
    divDeSalchiInf.style.position = 'absolute';
    divDeSalchiInf.style.top = '100px';
    divDeSalchiInf.style.left = '100px';
}
function mostraInfSalchipapas2 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas3 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas4 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas5 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas6 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas7 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas8 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas9 () {
    divDeSalchiInf.style.display = 'block'
}
function mostraInfSalchipapas10 () {
    divDeSalchiInf.style.display = 'block'
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



