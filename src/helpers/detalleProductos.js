const detalleProductos = [
    {
        nombre: 'Camiseta de Boca Juniors Titular',
        categoria: 'camiseta',
        precio: '18500',
        descripcion: "Camiseta de Boca Juniors titular del año 2022",
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/I/GI4683_0.jpg',
        stock: 10,
        id: '1',
        detalles: 'CAMISETA TITULAR BOCA JUNIORS 22/23. LA NUEVA CAMISETA DE FÚTBOL DE BOCA JUNIORS HECHA CON MATERIALES RECICLADOS. Una historia de éxito. El estampado inspirado en los años 90 y en el famoso letrero "BOCA" que se encuentra sobre las puertas de Casa Amarilla, el campo de entrenamiento del club. La tecnología de absorción AEROREADY mantiene a los jugadores cómodos en los partidos. El escudo tejido le pone el toque final al look. Hecho con materiales 100 % reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.'
    },
    {
        nombre: 'Camiseta de Boca Suplente',
        categoria: 'camiseta',
        precio: '17200',
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/85f4f67ca5e84cf0a38aae4d0182eead_9366/Tercera_Camiseta_Boca_Juniors_22-23_Amarillo_HB0517_01_laydown.jpg',
        descripcion: "Camiseta de Boca Juniors Suplente",
        stock: 5,
        id: '2',
        detalles: 'CAMISETA SUPLENTE BOCA JUNIORS 22/23. LA NUEVA CAMISETA DE FÚTBOL DE BOCA JUNIORS HECHA CON MATERIALES RECICLADOS. Una historia de éxito. El estampado inspirado en los años 90 y en el famoso letrero "BOCA" que se encuentra sobre las puertas de Casa Amarilla, el campo de entrenamiento del club. La tecnología de absorción AEROREADY mantiene a los jugadores cómodos en los partidos. El escudo tejido le pone el toque final al look. Hecho con materiales 100 % reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.'
    },
    {
        nombre: 'Camiseta de River Plate Titular',
        categoria: 'camiseta',
        precio: '17400',
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU9601_0.jpg',
        descripcion: "Camiseta de River Plate del año 2022",
        stock: 5,
        id: '3',
        detalles: 'CAMISETA LOCAL RIVER PLATE 21/22. UNA CAMISETA ABSORBENTE CON LOS CLÁSICOS COLORES DEL CLUB PARA LOS HINCHAS MÁS FIELES. River Plate es una institución del deporte. La banda roja que cruza el pecho de su talentosos jugadores es un distintivo universalmente reconocido en el mundo del fútbol. Esta camiseta adidas se inspira en uno de los uniformes más recordados del River y le agrega un toque moderno. Su tejido suave con tecnología transpirable AEROREADY te ofrece una gran comodidad mientras animás a tu equipo. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.'
    },
    {
        nombre: 'Camiseta de River Plate Suplente',
        categoria: 'camiseta',
        precio: '15500',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/ad_fh7898-11-d25da1929dff39206016400841411508-640-0.jpg',
        descripcion: "Camiseta de River Plate del año 2022 Suplente",
        stock: 5,
        id: '4',
        detalles: 'CAMISETA LOCAL RIVER PLATE 21/22. UNA CAMISETA ABSORBENTE CON LOS CLÁSICOS COLORES DEL CLUB PARA LOS HINCHAS MÁS FIELES. River Plate es una institución del deporte. La banda roja que cruza el pecho de su talentosos jugadores es un distintivo universalmente reconocido en el mundo del fútbol. Esta camiseta adidas se inspira en uno de los uniformes más recordados del River y le agrega un toque moderno. Su tejido suave con tecnología transpirable AEROREADY te ofrece una gran comodidad mientras animás a tu equipo. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.'
    },
    {
        nombre: '',
        categoria: 'botines',
        precio: '49999',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38f6995daa56484db216ac6a011d94d9_9366/Botines_Predator_Freak.1_Terreno_Suave_Negro_FW7246_01_standard.jpg',
        descripcion: 'Botines Adidas',
        stock: 7,
        id: '5',
        detalles: 'BOTINES PREDATOR FREAK.1 TERRENO SUAVE. BOTINES DE FÚTBOL CON SUJECIÓN PARA CONTROLAR LA CANCHA. No podés cambiar el juego si no dejás que el juego te cambie a vos. Cada partido es una oportunidad para mejorar. Para ganar más control. Liberá toda tu fuerza natural con los Predator Freak. Para estos botines adidas cubrimos más del exterior con Demonskin para brindar un mayor control de la pelota. El exterior de adidas Primeknit tiene un cuello de dos piezas que permite un calce fácil y un ajuste seguro. Ponetelos para experimentar un control sobrehumano sobre terreno suave'
    }
]
;



const FetchDetallesProductos = (id) =>{ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(detalleProductos.find((product)=> product.id === id.toString()))
            }, 3000);
        });
    }

export default FetchDetallesProductos