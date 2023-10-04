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

let MyPedid = document.getElementById('verMyPedido')
MyPedid.style.display = 'none'

let closeMiCarrito = document.getElementById('closeDivMiCarrito')
closeMiCarrito.addEventListener('click',crerrarCarrito)

let extCatHambur = document.getElementById('salir-de-hambur')
let extCatPicada = document.getElementById('salir-de-picadas')
let extCatArepa = document.getElementById('salir-de-arepas')
let extCatPatacones = document.getElementById('salir-de-patacones')
let extCatSalchi = document.getElementById('salir-de-salchipapas')
let extInitSection = document.getElementById('salir-de-initSection')
let extVerifiedcuenta = document.getElementById('salir-de-pedidos')
let extCompra = document.getElementById('cerrarCompra')
extCompra.style.display = 'none'
let carritoPedid = document.getElementById('button-pedidos')
carritoPedid.addEventListener('click',mostraPedid)
carritoPedid.style.display = 'none'

let exitPedidRestorant = document.getElementById('salir-de-Peid-restorant')
exitPedidRestorant.addEventListener('click',cerrarPedid)
let exitPedidFueraRest = document.getElementById('salir-de-initSection-Pedid-Fuera-restorant')
exitPedidFueraRest.addEventListener('click',cerrarPedidFueraRest)

let sectionPrin = document.getElementById('tarjetas_comidas')
let sectionPedidosEnRestorant = document.getElementById('pedidosRestaurante')
sectionPedidosEnRestorant.style.display = 'none'
let sectionPedidosFueraRestaurante = document.getElementById('pedidosFueraDeRestaurante')
sectionPedidosFueraRestaurante.style.display = 'none'

let botonEnterPedidRest = document.getElementById('botonSesionRestorant1')
let botonEnterPedidosFuera = document.getElementById('botonSesionRestorant2')
botonEnterPedidRest.addEventListener('click',enterPedidosRestorant)
botonEnterPedidosFuera.addEventListener('click',enterPedidosExitRestorant)

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

let agreHam1 = document.getElementById('agreHambur1')
agreHam1.style.display = 'none'
agreHam1.addEventListener('click',crearPedidHambur1)
agreHam1.addEventListener('click',crearPedidHamburParaSecPedid1)

let agreHam2 = document.getElementById('agreHambur2')
agreHam2.style.display = 'none'
agreHam2.addEventListener('click',crearPedidHambur2)
agreHam2.addEventListener('click',crearPedidHamburParaSecPedid2)

let agreHam3 = document.getElementById('agreHambur3')
agreHam3.style.display = 'none'
agreHam3.addEventListener('click',crearPedidHambur3)
agreHam3.addEventListener('click',crearPedidHamburParaSecPedid3)

let agreHam4 = document.getElementById('agreHambur4')
agreHam4.style.display = 'none'
agreHam4.addEventListener('click',crearPedidHambur4)
agreHam4.addEventListener('click',crearPedidHamburParaSecPedid4)

let agreHam5 = document.getElementById('agreHambur5')
agreHam5.style.display = 'none'
agreHam5.addEventListener('click',crearPedidHambur5)
agreHam5.addEventListener('click',crearPedidHamburParaSecPedid5)

let agreHam6 = document.getElementById('agreHambur6')
agreHam6.style.display = 'none'
agreHam6.addEventListener('click',crearPedidHambur6)
agreHam6.addEventListener('click',crearPedidHamburParaSecPedid6)

let agreHam7 = document.getElementById('agreHambur7')
agreHam7.style.display = 'none'
agreHam7.addEventListener('click',crearPedidHambur7)
agreHam7.addEventListener('click',crearPedidHamburParaSecPedid7)

let agreHam8 = document.getElementById('agreHambur8')
agreHam8.style.display = 'none'
agreHam8.addEventListener('click',crearPedidHambur8)
agreHam8.addEventListener('click',crearPedidHamburParaSecPedid8)

let agreHam9 = document.getElementById('agreHambur9')
agreHam9.style.display = 'none'
agreHam9.addEventListener('click',crearPedidHambur9)
agreHam9.addEventListener('click',crearPedidHamburParaSecPedid9)

let agreHam10 = document.getElementById('agreHambur10')
agreHam10.style.display = 'none'
agreHam10.addEventListener('click',crearPedidHambur10)
agreHam10.addEventListener('click',crearPedidHamburParaSecPedid10)

let agrePicad1 = document.getElementById('agrePica1') 
agrePicad1.style.display = 'none'
let agrePicad2 = document.getElementById('agrePica2') 
agrePicad2.style.display = 'none'
let agrePicad3 = document.getElementById('agrePica3') 
agrePicad3.style.display = 'none'
let agrePicad4 = document.getElementById('agrePica4') 
agrePicad4.style.display = 'none'
let agrePicad5 = document.getElementById('agrePica5') 
agrePicad5.style.display = 'none'
let agrePicad6 = document.getElementById('agrePica6') 
agrePicad6.style.display = 'none'
let agrePicad7 = document.getElementById('agrePica7') 
agrePicad7.style.display = 'none'
let agrePicad8 = document.getElementById('agrePica8') 
agrePicad8.style.display = 'none'
let agrePicad9 = document.getElementById('agrePica9') 
agrePicad9.style.display = 'none'
let agrePicad10 = document.getElementById('agrePica10') 
agrePicad10.style.display = 'none'

let agreArepi1 = document.getElementById('agreArepa1')
agreArepi1.style.display = 'none'
let agreArepi2 = document.getElementById('agreArepa2')
agreArepi2.style.display = 'none'
let agreArepi3 = document.getElementById('agreArepa3')
agreArepi3.style.display = 'none'
let agreArepi4 = document.getElementById('agreArepa4')
agreArepi4.style.display = 'none'
let agreArepi5 = document.getElementById('agreArepa5')
agreArepi5.style.display = 'none'
let agreArepi6 = document.getElementById('agreArepa6')
agreArepi6.style.display = 'none'
let agreArepi7 = document.getElementById('agreArepa7')
agreArepi7.style.display = 'none'
let agreArepi8 = document.getElementById('agreArepa8')
agreArepi8.style.display = 'none'
let agreArepi9 = document.getElementById('agreArepa9')
agreArepi9.style.display = 'none'
let agreArepi10 = document.getElementById('agreArepa10')
agreArepi10.style.display = 'none'

let agrePat1 = document.getElementById ('agrePataco1')
agrePat1.style.display = 'none'
let agrePat2 = document.getElementById ('agrePataco2')
agrePat2.style.display = 'none'
let agrePat3 = document.getElementById ('agrePataco3')
agrePat3.style.display = 'none'
let agrePat4 = document.getElementById ('agrePataco4')
agrePat4.style.display = 'none'
let agrePat5 = document.getElementById ('agrePataco5')
agrePat5.style.display = 'none'
let agrePat6 = document.getElementById ('agrePataco6')
agrePat6.style.display = 'none'
let agrePat7 = document.getElementById ('agrePataco7')
agrePat7.style.display = 'none'
let agrePat8 = document.getElementById ('agrePataco8')
agrePat8.style.display = 'none'
let agrePat9 = document.getElementById ('agrePataco9')
agrePat9.style.display = 'none'
let agrePat10 = document.getElementById ('agrePataco10')
agrePat10.style.display = 'none'

let agreSalch1 = document.getElementById ('agreSalchi1')
agreSalch1.style.display = 'none'
let agreSalch2 = document.getElementById ('agreSalchi2')
agreSalch2.style.display = 'none'
let agreSalch3 = document.getElementById ('agreSalchi3')
agreSalch3.style.display = 'none'
let agreSalch4 = document.getElementById ('agreSalchi4')
agreSalch4.style.display = 'none'
let agreSalch5 = document.getElementById ('agreSalchi5')
agreSalch5.style.display = 'none'
let agreSalch6 = document.getElementById ('agreSalchi6')
agreSalch6.style.display = 'none'
let agreSalch7 = document.getElementById ('agreSalchi7')
agreSalch7.style.display = 'none'
let agreSalch8 = document.getElementById ('agreSalchi8')
agreSalch8.style.display = 'none'
let agreSalch9 = document.getElementById ('agreSalchi9')
agreSalch9.style.display = 'none'
let agreSalch10 = document.getElementById ('agreSalchi10')
agreSalch10.style.display = 'none'

agreHam1.addEventListener('click',mostraInfHambur1)
agreHam2.addEventListener('click',mostraInfHambur2)
agreHam3.addEventListener('click',mostraInfHambur3)
agreHam4.addEventListener('click',mostraInfHambur4)
agreHam5.addEventListener('click',mostraInfHambur5)
agreHam6.addEventListener('click',mostraInfHambur6)
agreHam7.addEventListener('click',mostraInfHambur7)
agreHam8.addEventListener('click',mostraInfHambur8)
agreHam9.addEventListener('click',mostraInfHambur9)
agreHam10.addEventListener('click',mostraInfHambur10)

agrePicad1.addEventListener('click',mostraInfPicada1)
agrePicad2.addEventListener('click',mostraInfPicada2)
agrePicad3.addEventListener('click',mostraInfPicada3)
agrePicad4.addEventListener('click',mostraInfPicada4)
agrePicad5.addEventListener('click',mostraInfPicada5)
agrePicad6.addEventListener('click',mostraInfPicada6)
agrePicad7.addEventListener('click',mostraInfPicada7)
agrePicad8.addEventListener('click',mostraInfPicada8)
agrePicad9.addEventListener('click',mostraInfPicada9)
agrePicad10.addEventListener('click',mostraInfPicada10)

agreArepi1.addEventListener('click',mostraInfArepa1)
agreArepi2.addEventListener('click',mostraInfArepa2)
agreArepi3.addEventListener('click',mostraInfArepa3)
agreArepi4.addEventListener('click',mostraInfArepa4)
agreArepi5.addEventListener('click',mostraInfArepa5)
agreArepi6.addEventListener('click',mostraInfArepa6)
agreArepi7.addEventListener('click',mostraInfArepa7)
agreArepi8.addEventListener('click',mostraInfArepa8)
agreArepi9.addEventListener('click',mostraInfArepa9)
agreArepi10.addEventListener('click',mostraInfArepa10)

agrePat1.addEventListener('click',mostraInfPatacon1)
agrePat2.addEventListener('click',mostraInfPatacon2)
agrePat3.addEventListener('click',mostraInfPatacon3)
agrePat4.addEventListener('click',mostraInfPatacon4)
agrePat5.addEventListener('click',mostraInfPatacon5)
agrePat6.addEventListener('click',mostraInfPatacon6)
agrePat7.addEventListener('click',mostraInfPatacon7)
agrePat8.addEventListener('click',mostraInfPatacon8)
agrePat9.addEventListener('click',mostraInfPatacon9)
agrePat10.addEventListener('click',mostraInfPatacon10)

agreSalch1.addEventListener('click',mostraInfSalchipapas1)
agreSalch2.addEventListener('click',mostraInfSalchipapas2)
agreSalch3.addEventListener('click',mostraInfSalchipapas3)
agreSalch4.addEventListener('click',mostraInfSalchipapas4)
agreSalch5.addEventListener('click',mostraInfSalchipapas5)
agreSalch6.addEventListener('click',mostraInfSalchipapas6)
agreSalch7.addEventListener('click',mostraInfSalchipapas7)
agreSalch8.addEventListener('click',mostraInfSalchipapas8)
agreSalch9.addEventListener('click',mostraInfSalchipapas9)
agreSalch10.addEventListener('click',mostraInfSalchipapas10)

let imageHambur1 = document.getElementById('HamburImage1')
imageHambur1.style.display = 'none'
let imageHambur2 = document.getElementById('HamburImage2')
imageHambur2.style.display = 'none'
let imageHambur3 = document.getElementById('HamburImage3')
imageHambur3.style.display = 'none'
let imageHambur4 = document.getElementById('HamburImage4')
imageHambur4.style.display = 'none'
let imageHambur5 = document.getElementById('HamburImage5')
imageHambur5.style.display = 'none'
let imageHambur6 = document.getElementById('HamburImage6')
imageHambur6.style.display = 'none'
let imageHambur7 = document.getElementById('HamburImage7')
imageHambur7.style.display = 'none'
let imageHambur8 = document.getElementById('HamburImage8')
imageHambur8.style.display = 'none'
let imageHambur9 = document.getElementById('HamburImage9')
imageHambur9.style.display = 'none'
let imageHambur10 = document.getElementById('HamburImage10')
imageHambur10.style.display = 'none'

let imagePicada1 = document.getElementById('PicadaImage1')
imagePicada1.style.display = 'none'
let imagePicada2 = document.getElementById('PicadaImage2')
imagePicada2.style.display = 'none'
let imagePicada3 = document.getElementById('PicadaImage3')
imagePicada3.style.display = 'none'
let imagePicada4 = document.getElementById('PicadaImage4')
imagePicada4.style.display = 'none'
let imagePicada5 = document.getElementById('PicadaImage5')
imagePicada5.style.display = 'none'
let imagePicada6 = document.getElementById('PicadaImage6')
imagePicada6.style.display = 'none'
let imagePicada7 = document.getElementById('PicadaImage7')
imagePicada7.style.display = 'none'
let imagePicada8 = document.getElementById('PicadaImage8')
imagePicada8.style.display = 'none'
let imagePicada9 = document.getElementById('PicadaImage9')
imagePicada9.style.display = 'none'
let imagePicada10 = document.getElementById('PicadaImage10')
imagePicada10.style.display = 'none'

let imageArepa1 = document.getElementById('ArepaImage1')
imageArepa1.style.display = 'none'
let imageArepa2 = document.getElementById('ArepaImage2')
imageArepa2.style.display = 'none'
let imageArepa3 = document.getElementById('ArepaImage3')
imageArepa3.style.display = 'none'
let imageArepa4 = document.getElementById('ArepaImage4')
imageArepa4.style.display = 'none'
let imageArepa5 = document.getElementById('ArepaImage5')
imageArepa5.style.display = 'none'
let imageArepa6 = document.getElementById('ArepaImage6')
imageArepa6.style.display = 'none'
let imageArepa7 = document.getElementById('ArepaImage7')
imageArepa7.style.display = 'none'
let imageArepa8 = document.getElementById('ArepaImage8')
imageArepa8.style.display = 'none'
let imageArepa9 = document.getElementById('ArepaImage9')
imageArepa9.style.display = 'none'
let imageArepa10 = document.getElementById('ArepaImage10')
imageArepa10.style.display = 'none'

let imagePataco1 = document.getElementById('PatacoImage1')
imagePataco1.style.display = 'none'
let imagePataco2 = document.getElementById('PatacoImage2')
imagePataco2.style.display = 'none'
let imagePataco3 = document.getElementById('PatacoImage3')
imagePataco3.style.display = 'none'
let imagePataco4 = document.getElementById('PatacoImage4')
imagePataco4.style.display = 'none'
let imagePataco5 = document.getElementById('PatacoImage5')
imagePataco5.style.display = 'none'
let imagePataco6 = document.getElementById('PatacoImage6')
imagePataco6.style.display = 'none'
let imagePataco7 = document.getElementById('PatacoImage7')
imagePataco7.style.display = 'none'
let imagePataco8 = document.getElementById('PatacoImage8')
imagePataco8.style.display = 'none'
let imagePataco9 = document.getElementById('PatacoImage9')
imagePataco9.style.display = 'none'
let imagePataco10 = document.getElementById('PatacoImage10')
imagePataco10.style.display = 'none'

let imageSalchi1 = document.getElementById('SalchiImage1')
imageSalchi1.style.display = 'none'
let imageSalchi2 = document.getElementById('SalchiImage2')
imageSalchi2.style.display = 'none'
let imageSalchi3 = document.getElementById('SalchiImage3')
imageSalchi3.style.display = 'none'
let imageSalchi4 = document.getElementById('SalchiImage4')
imageSalchi4.style.display = 'none'
let imageSalchi5 = document.getElementById('SalchiImage5')
imageSalchi5.style.display = 'none'
let imageSalchi6 = document.getElementById('SalchiImage6')
imageSalchi6.style.display = 'none'
let imageSalchi7 = document.getElementById('SalchiImage7')
imageSalchi7.style.display = 'none'
let imageSalchi8 = document.getElementById('SalchiImage8')
imageSalchi8.style.display = 'none'
let imageSalchi9 = document.getElementById('SalchiImage9')
imageSalchi9.style.display = 'none'
let imageSalchi10 = document.getElementById('SalchiImage10')
imageSalchi10.style.display = 'none'

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
extCompra.addEventListener('click', salirInfoCompra)

botonHamburguesaIni.addEventListener('click', mostrarHambur )
botonPicadaIni.addEventListener('click', mostrarPicada )
botonArepaIni.addEventListener('click', mostrarArepa )
botonPataconIni.addEventListener('click', mostrarPatacones)
botonSalchiIni.addEventListener('click', mostrarSalchi)
botonDeiniciarSecion.addEventListener('click', initSection)


function crerrarCarrito () {
    MyPedid.style.display = 'none'
}

function mostraPedid () {
    MyPedid.style.display = 'block'
}


function crearPedidHambur1 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa1';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};

function crearPedidHambur2 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa2';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur3 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa3';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur4 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa4';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur5 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa5';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur6 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa6';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur7 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa7';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur8 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa8';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur9 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa9';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHambur10 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa10';
    // Agregar el nuevo div a la sección 2
    MyPedid.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};

function crearPedidHamburParaSecPedid1 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa1';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};

function crearPedidHamburParaSecPedid2 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa2';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid3 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa3';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid4 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa4';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid5 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa5';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid6 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa6';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid7 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa7';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid8 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa8';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid9 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa9';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};
function crearPedidHamburParaSecPedid10 () {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'nuevo-div';
    nuevoDiv.textContent = 'hamburguesa10';
    // Agregar el nuevo div a la sección 2
    sectionPedidosEnRestorant.appendChild(nuevoDiv);
    carritoPedid.style.display = 'block'
};


function enterPedidosRestorant () {
    sectionPedidos.style.display = 'none'
    sectionPedidosEnRestorant.style.display = 'block'
}
function enterPedidosExitRestorant () {
    sectionPedidos.style.display = 'none'
    sectionPedidosFueraRestaurante.style.display = 'block'  
}
function cerrarPedid () {
    sectionPedidosEnRestorant.style.display = 'none'
    sectionPedidos.style.display = 'block'
}
function cerrarPedidFueraRest () {
    sectionPedidosFueraRestaurante.style.display = 'none'
    sectionPedidos.style.display = 'block'
}


function salirInfoCompra () {
extCompra.style.display = 'none'

    divDeHamburguesaInf.style.display = 'none'
    divDePicadaInf.style.display = 'none'
    divDeArepaInf.style.display = 'none'
    divDePatacoInf.style.display = 'none'
    divDeSalchiInf.style.display = 'none'


agreHam1.style.display = 'none'    
agreHam2.style.display = 'none'
agreHam3.style.display = 'none'
agreHam4.style.display = 'none'
agreHam5.style.display = 'none'
agreHam6.style.display = 'none'    
agreHam7.style.display = 'none'
agreHam8.style.display = 'none'
agreHam9.style.display = 'none'
agreHam10.style.display = 'none'

agrePicad1.style.display = 'none'
agrePicad2.style.display = 'none'
agrePicad3.style.display = 'none'
agrePicad4.style.display = 'none'
agrePicad5.style.display = 'none'
agrePicad6.style.display = 'none'
agrePicad7.style.display = 'none'
agrePicad8.style.display = 'none'
agrePicad9.style.display = 'none'
agrePicad10.style.display = 'none'

agreArepi1.style.display = 'none'
agreArepi2.style.display = 'none'
agreArepi3.style.display = 'none'
agreArepi4.style.display = 'none'
agreArepi5.style.display = 'none'
agreArepi6.style.display = 'none'
agreArepi7.style.display = 'none'
agreArepi8.style.display = 'none'
agreArepi9.style.display = 'none'
agreArepi10.style.display = 'none'

agrePat1.style.display = 'none'
agrePat2.style.display = 'none'
agrePat3.style.display = 'none'
agrePat4.style.display = 'none'
agrePat5.style.display = 'none'
agrePat6.style.display = 'none'
agrePat7.style.display = 'none'
agrePat8.style.display = 'none'
agrePat9.style.display = 'none'
agrePat10.style.display = 'none'

agreSalch1.style.display = 'none'
agreSalch2.style.display = 'none'
agreSalch3.style.display = 'none'
agreSalch4.style.display = 'none'
agreSalch5.style.display = 'none'
agreSalch6.style.display = 'none'
agreSalch7.style.display = 'none'
agreSalch8.style.display = 'none'
agreSalch9.style.display = 'none'
agreSalch10.style.display = 'none'

imageHambur1.style.display = 'none'
imageHambur2.style.display = 'none'
imageHambur3.style.display = 'none'
imageHambur4.style.display = 'none'
imageHambur5.style.display = 'none'
imageHambur6.style.display = 'none'
imageHambur7.style.display = 'none'
imageHambur8.style.display = 'none'
imageHambur9.style.display = 'none'
imageHambur10.style.display = 'none'

imagePicada1.style.display = 'none'
imagePicada2.style.display = 'none'
imagePicada3.style.display = 'none'
imagePicada4.style.display = 'none'
imagePicada5.style.display = 'none'
imagePicada6.style.display = 'none'
imagePicada7.style.display = 'none'
imagePicada8.style.display = 'none'
imagePicada9.style.display = 'none'
imagePicada10.style.display = 'none'

imageArepa1.style.display = 'none'
imageArepa2.style.display = 'none'
imageArepa3.style.display = 'none'
imageArepa4.style.display = 'none'
imageArepa5.style.display = 'none'
imageArepa6.style.display = 'none'
imageArepa7.style.display = 'none'
imageArepa8.style.display = 'none'
imageArepa9.style.display = 'none'
imageArepa10.style.display = 'none'

imagePataco1.style.display = 'none'
imagePataco2.style.display = 'none'
imagePataco3.style.display = 'none'
imagePataco4.style.display = 'none'
imagePataco5.style.display = 'none'
imagePataco6.style.display = 'none'
imagePataco7.style.display = 'none'
imagePataco8.style.display = 'none'
imagePataco9.style.display = 'none'
imagePataco10.style.display = 'none'

imageSalchi1.style.display = 'none'
imageSalchi2.style.display = 'none'
imageSalchi3.style.display = 'none'
imageSalchi4.style.display = 'none'
imageSalchi5.style.display = 'none'
imageSalchi6.style.display = 'none'
imageSalchi7.style.display = 'none'
imageSalchi8.style.display = 'none'
imageSalchi9.style.display = 'none'
imageSalchi10.style.display = 'none'
}

function salirDeHamburguesas () {
agreHam1.style.display = 'none'    
agreHam2.style.display = 'none'
agreHam3.style.display = 'none'
agreHam4.style.display = 'none'
agreHam5.style.display = 'none'
agreHam6.style.display = 'none'    
agreHam7.style.display = 'none'
agreHam8.style.display = 'none'
agreHam9.style.display = 'none'
agreHam10.style.display = 'none'
    divDeHamburguesaInf.style.display = 'none'
    extCompra.style.display = 'none'
    sectionHambur.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function salirDePicada () {
agrePicad1.style.display = 'none'
agrePicad2.style.display = 'none'
agrePicad3.style.display = 'none'
agrePicad4.style.display = 'none'
agrePicad5.style.display = 'none'
agrePicad6.style.display = 'none'
agrePicad7.style.display = 'none'
agrePicad8.style.display = 'none'
agrePicad9.style.display = 'none'
agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'none'
    extCompra.style.display = 'none'
    sectionPicada.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function salirDeArepa () {
agreArepi1.style,display = 'none'
agreArepi2.style,display = 'none'
agreArepi3.style,display = 'none'
agreArepi4.style,display = 'none'
agreArepi5.style,display = 'none'
agreArepi6.style,display = 'none'
agreArepi7.style,display = 'none'
agreArepi8.style,display = 'none'
agreArepi9.style,display = 'none'
agreArepi10.style,display = 'none'
    divDeArepaInf.style.display = 'none'
    extCompra.style.display = 'none'
    sectionArepa.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function salirDePatacones () {
agrePat1.style.display = 'none'
agrePat2.style.display = 'none'
agrePat3.style.display = 'none'
agrePat4.style.display = 'none'
agrePat5.style.display = 'none'
agrePat6.style.display = 'none'
agrePat7.style.display = 'none'
agrePat8.style.display = 'none'
agrePat9.style.display = 'none'
agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'none'
    extCompra.style.display = 'none'
    sectionPatacones.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function salirDeSalchipapas () {
agreSalch1.style.display = 'none'
agreSalch2.style.display = 'none'
agreSalch3.style.display = 'none'
agreSalch4.style.display = 'none'
agreSalch5.style.display = 'none'
agreSalch6.style.display = 'none'
agreSalch7.style.display = 'none'
agreSalch8.style.display = 'none'
agreSalch9.style.display = 'none'
agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'none'
    extCompra.style.display = 'none'
    sectionSalchipaps.style.display = 'none'
    sectionPrin.style.display = 'block'
    botonDeiniciarSecion.style.display = 'block'
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
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
    agreHam1.style.display = 'block'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur1.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '70px';
    divDeHamburguesaInf.style.position = 'absolute';
    divDeHamburguesaInf.style.top = '35px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 1.';
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur2 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'block'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam2.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur2.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '380px';
    divDeHamburguesaInf.style.top = '335px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 2.';
    imageHambur1.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur3 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam3.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur3.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '650px';
    divDeHamburguesaInf.style.top = '620px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 3.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur4 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'   
    agreHam4.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur4.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '920px';
    divDeHamburguesaInf.style.top = '900px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 4.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur5 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam5.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur5.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1220px';
    divDeHamburguesaInf.style.top = '1190px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 5.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur6 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam6.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur6.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1480px';
    divDeHamburguesaInf.style.top = '1450px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 6.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur7 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam7.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur7.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1780px';
    divDeHamburguesaInf.style.top = '1750px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 7.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur8 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam8.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur8.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2080px';
    divDeHamburguesaInf.style.top = '2040px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 8.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur9.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur9 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam10.style.display = 'none'
    agreHam9.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur9.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2350px';
    divDeHamburguesaInf.style.top = '2330px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 9.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur10.style.display = 'none'
}
function mostraInfHambur10 () {
    agreHam1.style.display = 'none'
    agreHam2.style.display = 'none'
    agreHam3.style.display = 'none'
    agreHam4.style.display = 'none'
    agreHam5.style.display = 'none'
    agreHam6.style.display = 'none'
    agreHam7.style.display = 'none'
    agreHam8.style.display = 'none'
    agreHam9.style.display = 'none'
    agreHam10.style.display = 'block'
    divDeHamburguesaInf.style.display = 'block'
    imageHambur10.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2640px';
    divDeHamburguesaInf.style.top = '2620px';
    divDeHamburguesaInf.style.left = '15%';
    divDeHamburguesaInf.textContent = 'Este es el texto del botón 10.';
    imageHambur1.style.display = 'none'
    imageHambur2.style.display = 'none'
    imageHambur3.style.display = 'none'
    imageHambur4.style.display = 'none'
    imageHambur5.style.display = 'none'
    imageHambur6.style.display = 'none'
    imageHambur7.style.display = 'none'
    imageHambur8.style.display = 'none'
    imageHambur9.style.display = 'none'
}

function mostraInfPicada1 () {
    agrePicad1.style.display = 'block'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada1.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '70px';
    divDePicadaInf.style.top = '35px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 1.';
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada2 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'block'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada2.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '380px';
    divDePicadaInf.style.top = '335px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 2.';
    imagePicada1.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada3 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'block'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada3.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '650px';
    divDePicadaInf.style.top = '620px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 3.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada4 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'block'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada4.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '920px';
    divDePicadaInf.style.top = '900px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 4.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada5 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'block'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada5.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1220px';
    divDePicadaInf.style.top = '1190px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 5.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada6 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'block'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada6.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1480px';
    divDePicadaInf.style.top = '1450px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 6.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada7 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'block'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada7.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1780px';
    divDePicadaInf.style.top = '1750px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 7.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada8 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'block'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada8.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2080px';
    divDePicadaInf.style.top = '2040px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 8.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada9.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada9 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'block'
    agrePicad10.style.display = 'none'
    divDePicadaInf.style.display = 'block'
    imagePicada9.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2350px';
    divDePicadaInf.style.top = '2330px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 9.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada10.style.display = 'none'
}
function mostraInfPicada10 () {
    agrePicad1.style.display = 'none'
    agrePicad2.style.display = 'none'
    agrePicad3.style.display = 'none'
    agrePicad4.style.display = 'none'
    agrePicad5.style.display = 'none'
    agrePicad6.style.display = 'none'
    agrePicad7.style.display = 'none'
    agrePicad8.style.display = 'none'
    agrePicad9.style.display = 'none'
    agrePicad10.style.display = 'block'
    divDePicadaInf.style.display = 'block'
    imagePicada10.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2640px';
    divDePicadaInf.style.top = '2620px';
    divDePicadaInf.style.left = '15%';
    divDePicadaInf.textContent = 'Este es el texto del botón 10.';
    imagePicada1.style.display = 'none'
    imagePicada2.style.display = 'none'
    imagePicada3.style.display = 'none'
    imagePicada4.style.display = 'none'
    imagePicada5.style.display = 'none'
    imagePicada6.style.display = 'none'
    imagePicada7.style.display = 'none'
    imagePicada8.style.display = 'none'
    imagePicada9.style.display = 'none'
}

function mostraInfArepa1 () {
    agreArepi1.style.display = 'block'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa1.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '70px';
    divDeArepaInf.style.top = '35px';
    divDeArepaInf.style.left = '15%';
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa2 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'block'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa2.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '380px';
    divDeArepaInf.style.top = '335px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 2.';
    imageArepa1.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa3 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'block'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa3.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '650px';
    divDeArepaInf.style.top = '620px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 3.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa4 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'block'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa4.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '920px';
    divDeArepaInf.style.top = '900px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 4.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa5 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'block'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa5.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1220px';
    divDeArepaInf.style.top = '1190px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 5.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa6 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'block'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa6.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1480px';
    divDeArepaInf.style.top = '1450px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 6.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa7 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'block'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa7.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1780px';
    divDeArepaInf.style.top = '1750px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 7.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa8 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'block'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa8.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2080px';
    divDeArepaInf.style.top = '2040px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 8.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa9.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa9 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'block'
    agreArepi10.style.display = 'none'
    divDeArepaInf.style.display = 'block'
    imageArepa9.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2350px';
    divDeArepaInf.style.top = '2330px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 9.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa10.style.display = 'none'
}
function mostraInfArepa10 () {
    agreArepi1.style.display = 'none'
    agreArepi2.style.display = 'none'
    agreArepi3.style.display = 'none'
    agreArepi4.style.display = 'none'
    agreArepi5.style.display = 'none'
    agreArepi6.style.display = 'none'
    agreArepi7.style.display = 'none'
    agreArepi8.style.display = 'none'
    agreArepi9.style.display = 'none'
    agreArepi10.style.display = 'block'
    divDeArepaInf.style.display = 'block'
    imageArepa10.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2640px';
    divDeArepaInf.style.top = '2620px';
    divDeArepaInf.style.left = '15%';
    divDeArepaInf.textContent = 'Este es el texto del botón 10.';
    imageArepa1.style.display = 'none'
    imageArepa2.style.display = 'none'
    imageArepa3.style.display = 'none'
    imageArepa4.style.display = 'none'
    imageArepa5.style.display = 'none'
    imageArepa6.style.display = 'none'
    imageArepa7.style.display = 'none'
    imageArepa8.style.display = 'none'
    imageArepa9.style.display = 'none'
}

function mostraInfPatacon1 () {
    agrePat1.style.display = 'block'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco1.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '70px';
    divDePatacoInf.style.top = '35px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 2.';
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon2 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'block'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco2.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '380px';
    divDePatacoInf.style.top = '335px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 2.';
    imagePataco1.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon3 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'block'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco3.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '650px';
    divDePatacoInf.style.top = '620px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 3.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon4 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'block'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco4.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '920px';
    divDePatacoInf.style.top = '900px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 4.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon5 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'block'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco5.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1220px';
    divDePatacoInf.style.top = '1190px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 5.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon6 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'block'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco6.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1480px';
    divDePatacoInf.style.top = '1450px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 6.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon7 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'block'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco7.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1780px';
    divDePatacoInf.style.top = '1750px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 7.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon8 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'block'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco8.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2080px';
    divDePatacoInf.style.top = '2040px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 8.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco9.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon9 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'block'
    agrePat10.style.display = 'none'
    divDePatacoInf.style.display = 'block'
    imagePataco9.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2350px';
    divDePatacoInf.style.top = '2330px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 9.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco10.style.display = 'none'
}
function mostraInfPatacon10 () {
    agrePat1.style.display = 'none'
    agrePat2.style.display = 'none'
    agrePat3.style.display = 'none'
    agrePat4.style.display = 'none'
    agrePat5.style.display = 'none'
    agrePat6.style.display = 'none'
    agrePat7.style.display = 'none'
    agrePat8.style.display = 'none'
    agrePat9.style.display = 'none'
    agrePat10.style.display = 'block'
    divDePatacoInf.style.display = 'block'
    imagePataco10.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2640px';
    divDePatacoInf.style.top = '2620px';
    divDePatacoInf.style.left = '15%';
    divDePatacoInf.textContent = 'Este es el texto del botón 10.';
    imagePataco1.style.display = 'none'
    imagePataco2.style.display = 'none'
    imagePataco3.style.display = 'none'
    imagePataco4.style.display = 'none'
    imagePataco5.style.display = 'none'
    imagePataco6.style.display = 'none'
    imagePataco7.style.display = 'none'
    imagePataco8.style.display = 'none'
    imagePataco9.style.display = 'none'
}

function mostraInfSalchipapas1 () {
    agreSalch1.style.display = 'block'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi1.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '70px';
    divDeSalchiInf.style.position = 'absolute';
    divDeSalchiInf.style.top = '35px';
    divDeSalchiInf.style.left = '15%';
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas2 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'block'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi2.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '380px';
    divDeSalchiInf.style.top = '335px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 2.';
    imageSalchi1.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas3 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'block'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi3.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '650px';
    divDeSalchiInf.style.top = '620px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 3.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas4 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'block'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi4.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '920px';
    divDeSalchiInf.style.top = '900px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 4.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas5 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'block'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi5.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1220px';
    divDeSalchiInf.style.top = '1190px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 5.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas6 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'block'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi6.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1480px';
    divDeSalchiInf.style.top = '1450px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 6.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas7 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'block'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi7.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '1780px';
    divDeSalchiInf.style.top = '1750px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 7.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas8 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'block'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi8.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2080px';
    divDeSalchiInf.style.top = '2040px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 8.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi9.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas9 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'block'
    agreSalch10.style.display = 'none'
    divDeSalchiInf.style.display = 'block'
    imageSalchi9.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2350px';
    divDeSalchiInf.style.top = '2330px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 9.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi10.style.display = 'none'
}
function mostraInfSalchipapas10 () {
    agreSalch1.style.display = 'none'
    agreSalch2.style.display = 'none'
    agreSalch3.style.display = 'none'
    agreSalch4.style.display = 'none'
    agreSalch5.style.display = 'none'
    agreSalch6.style.display = 'none'
    agreSalch7.style.display = 'none'
    agreSalch8.style.display = 'none'
    agreSalch9.style.display = 'none'
    agreSalch10.style.display = 'block'
    divDeSalchiInf.style.display = 'block'
    imageSalchi10.style.display = 'block'
    extCompra.style.display = 'block'
    extCompra.style.left = '80%';
    extCompra.style.top = '2640px';
    divDeSalchiInf.style.top = '2620px';
    divDeSalchiInf.style.left = '15%';
    divDeSalchiInf.textContent = 'Este es el texto del botón 10.';
    imageSalchi1.style.display = 'none'
    imageSalchi2.style.display = 'none'
    imageSalchi3.style.display = 'none'
    imageSalchi4.style.display = 'none'
    imageSalchi5.style.display = 'none'
    imageSalchi6.style.display = 'none'
    imageSalchi7.style.display = 'none'
    imageSalchi8.style.display = 'none'
    imageSalchi9.style.display = 'none'
}

function contraVerifi(){
 let contraseña="juanito"
 let user="juanito"

 if(document.form.password.value==contraseña && document.form.login.value==user){
    sectionSecion.style.display = 'none'
    sectionPedidos.style.display = 'block'
 }
 else{
    alert("por favor ingresa nombre y usuario correctos")
 }
}



