const listadoDeProductos = [
    {
        nombre: 'Camiseta de Boca Juniors Titular',
        categoria: 'camisetas',
        precio: '18500',
        descripcion: "Camiseta de Boca Juniors titular del año 2022",
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/I/GI4683_0.jpg',
        stock: 10,
        id: '1'
    },
    {
        nombre: 'Camiseta de Boca Suplente',
        categoria: 'camisetas',
        precio: '17200',
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/85f4f67ca5e84cf0a38aae4d0182eead_9366/Tercera_Camiseta_Boca_Juniors_22-23_Amarillo_HB0517_01_laydown.jpg',
        descripcion: "Camiseta de Boca Juniors Suplente",
        stock: 5,
        id: '2'
    },
    {
        nombre: 'Camiseta de River Plate Titular',
        categoria: 'camisetas',
        precio: '17400',
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU9601_0.jpg',
        descripcion: "Camiseta de River Plate del año 2022",
        stock: 5,
        id: '3'
    },
    {
        nombre: 'Camiseta de River Plate Suplente',
        categoria: 'camisetas',
        precio: '15500',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/ad_fh7898-11-d25da1929dff39206016400841411508-640-0.jpg',
        descripcion: "Camiseta de River Plate del año 2022 Suplente",
        stock: 5,
        id: '4'
    },
    {
        nombre: 'BOTINES ADIDAS PREDATOR FREAK.1 TERRENO SUAVE',
        categoria: 'botines',
        precio: '49999',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38f6995daa56484db216ac6a011d94d9_9366/Botines_Predator_Freak.1_Terreno_Suave_Negro_FW7246_01_standard.jpg',
        descripcion: 'Botines Adidas',
        stock: 7,
        id: '5',
        detalles: 'BOTINES PREDATOR FREAK.1 TERRENO SUAVE. BOTINES DE FÚTBOL CON SUJECIÓN PARA CONTROLAR LA CANCHA. No podés cambiar el juego si no dejás que el juego te cambie a vos. Cada partido es una oportunidad para mejorar. Para ganar más control. Liberá toda tu fuerza natural con los Predator Freak. Para estos botines adidas cubrimos más del exterior con Demonskin para brindar un mayor control de la pelota. El exterior de adidas Primeknit tiene un cuello de dos piezas que permite un calce fácil y un ajuste seguro. Ponetelos para experimentar un control sobrehumano sobre terreno suave'
    },
    {
        nombre: 'BOTINES ADIDAS NEMEZIZ 19+ SG',
        categoria: 'botines',
        precio: '64999',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/22fbb16c407f44558d19ae2f017b04bd_9366/NEMEZIZ_19+_SG_Naranja_EH0565_01_standard.jpg',
        descripcion: 'Botines Adidas',
        stock: 4,
        id: '6',
        detalles: 'NEMEZIZ 19+ SG. Nemeziz 19+ Sg es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Nemeziz 19+ Sg podés dejar una reseña abajo; siempre nos encanta conocer tu opinión. Aún estamos trabajando para tener más información de Nemeziz 19+ Sg, así que volvé pronto. Mientras tanto, tomá nota del número de artículo que identifica el producto EH0565 para que lo puedas encontrar de nuevo fácilmente. Está categorizado como: Botines'   
    },
    {
        nombre: 'BOTINES ADIDAS BOTINES PREDATOR EDGE.1 LOW TERRENO FIRME',
        categoria: 'botines',
        precio: '44999',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7a1788f29f4431781c4ae0400f40974_9366/Botines_Predator_Edge.1_Low_Terreno_Firme_Blanco_GV7388_01_standard.jpg',
        descripcion: 'Botines Adidas',
        stock: 4,
        id: '7',
        detalles: 'BOTINES PREDATOR EDGE.1 LOW TERRENO FIRME. BOTINES DE CORTE BAJO QUE TE AYUDAN A CONTROLAR CADA PARTE DE TU JUEGO. Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. La tobillera adidas PRIMEKNIT adaptable de corte bajo sujeta el pie en todo momento.'   
    },
    {
        nombre: 'CAMPERA DESIGNED FOR GAMEDAY CIERRE FRONTAL',
        categoria: 'ropadeportiva',
        precio: '20999',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/081e22ff54b748b5bba5adc8018ab5f8_9366/Campera_Designed_for_Gameday_Cierre_Frontal_Blanco_HC5490_21_model.jpg',
        descripcion: 'Campera Adidas',
        stock: 12,
        id: '8',
        detalles: 'CAMPERA DESIGNED FOR GAMEDAY CIERRE FRONTAL. UNA CAMPERA AJUSTADA HECHA PARCIALMENTE CON MATERIALES RECICLADOS. Estás en la zona. Nada debe interferir con eso. Y si aún no lo lográs, esta campera adidas te ayuda. Ponetela, subí la capucha y dejá atrás las distracciones. Los momentos previos al partido son tan importantes como los 90 minutos de juego, y esta campera lo sabe. Hecha parcialmente con contenido reciclado generado a partir de desechos de producción, tales como recortes de tela y desechos domésticos postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen.'    
    },
    {
        nombre: 'CONJUNTO DEPORTIVO ADICOLOR SST',
        categoria: 'ropadeportiva',
        precio: '14999',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f45570e46fa947e29768ad2800a322df_9366/Conjunto_Deportivo_Adicolor_SST_Negro_H25260_01_laydown.jpg',
        descripcion: 'Campera Adidas',
        stock: 9,
        id: '9',
        detalles: 'CONJUNTO DEPORTIVO ADICOLOR SST. UN CONJUNTO PARA NIÑOS CON EL ESPÍRITU DEL TRIFOLIO. Seguir el ritmo de tus peques es un trabajo de tiempo completo. Pero vestirlos con estilo es una tarea muy fácil. El look atemporal de este conjunto adidas será tu favorito. Es perfecto para correr y jugar en la escuela o en el patio. Este producto está hecho con Primeblue, un tejido reciclado de alto rendimiento creado con Parley Ocean Plastic.'   
    }
]

function getFetch(categoria) {
    return new Promise(function(resolve, reject) {
        setTimeout(() =>{
            if(categoria) {
                resolve(listadoDeProductos.filter((product)=> product.categoria === categoria))
            } else{
                resolve(listadoDeProductos)
            }
        }, 2000);
    })
}

/*const getFetch = new Promise((resolve, reject) => {
    setTimeout(() =>{
        /* Este IF la puse de prueba para chequear que me muestre el error en caso de condicion sea false)*/
        /*let condicion = true

        if (condicion === true) {
            if(categoria) {
                resolve(listadoDeProductos.filter((product)=> product.categoria === categoria))
            } else{
                resolve(listadoDeProductos)
            }
        } else {
            reject('Algo salio mal')
        }
    }, 2000);
})*/

export default getFetch