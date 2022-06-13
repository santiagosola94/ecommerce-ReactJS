const detalleProductos = [
    {
        nombre: 'Camiseta de Boca Juniors Titular',
        precio: '18500',
        descripcion: "Camiseta de Boca Juniors titular del año 2022",
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/I/GI4683_0.jpg',
        stock: 10,
        id: 1,
        detalles: 'TERCERA CAMISETA BOCA JUNIORS 22/23. LA NUEVA CAMISETA DE FÚTBOL DE BOCA JUNIORS HECHA CON MATERIALES RECICLADOS. Una historia de éxito. El estampado inspirado en los años 90 y en el famoso letrero "BOCA" que se encuentra sobre las puertas de Casa Amarilla, el campo de entrenamiento del club. La tecnología de absorción AEROREADY mantiene a los jugadores cómodos en los partidos. El escudo tejido le pone el toque final al look. Hecho con materiales 100 % reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.'
    },
    {
        nombre: 'Camiseta de River Plate Titular',
        precio: '17400',
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU9601_0.jpg',
        descripcion: "Camiseta de River Plate del año 2022",
        stock: 5,
        id: 2,
        detalles: 'CAMISETA LOCAL RIVER PLATE 21/22. UNA CAMISETA ABSORBENTE CON LOS CLÁSICOS COLORES DEL CLUB PARA LOS HINCHAS MÁS FIELES. River Plate es una institución del deporte. La banda roja que cruza el pecho de su talentosos jugadores es un distintivo universalmente reconocido en el mundo del fútbol. Esta camiseta adidas se inspira en uno de los uniformes más recordados del River y le agrega un toque moderno. Su tejido suave con tecnología transpirable AEROREADY te ofrece una gran comodidad mientras animás a tu equipo. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.'
    }
]
;



const FetchDetallesProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(detalleProductos)
            }, 3000)
        })


export default FetchDetallesProductos