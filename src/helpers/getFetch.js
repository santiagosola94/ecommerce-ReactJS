const listadoDeProductos = [
    {
        nombre: 'Camiseta de Boca Juniors Titular',
        precio: '18500',
        descripcion: "Camiseta de Boca Juniors titular del año 2022",
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/I/GI4683_0.jpg',
        stock: 10,
        id: 1
    },
    {
        nombre: 'Camiseta de Boca Suplente',
        precio: '17200',
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/85f4f67ca5e84cf0a38aae4d0182eead_9366/Tercera_Camiseta_Boca_Juniors_22-23_Amarillo_HB0517_01_laydown.jpg',
        descripcion: "Camiseta de Boca Juniors Suplente",
        stock: 5,
        id: 2
    },
    {
        nombre: 'Camiseta de River Plate Titular',
        precio: '17400',
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU9601_0.jpg',
        descripcion: "Camiseta de River Plate del año 2022",
        stock: 5,
        id: 3
    },
    {
        nombre: 'Camiseta de River Plate Suplente',
        precio: '15500',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/ad_fh7898-11-d25da1929dff39206016400841411508-640-0.jpg',
        descripcion: "Camiseta de River Plate del año 2022 Suplente",
        stock: 5,
        id: 4
    }
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() =>{
        /* Este IF la puse de prueba para chequear que me muestre el error en caso de condicion sea false)*/
        let condicion = true

        if (condicion == true) {
            resolve(listadoDeProductos)
        } else {
            reject('Algo salio mal')
        }
    }, 2000);
})


export default getFetch