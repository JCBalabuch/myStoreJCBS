const PRODUCTS = [
        {
          nombre: "Camisa de rayas",
          imagen: "https://ae01.alicdn.com/kf/HTB18kfJeBaE3KVjSZLeq6xsSFXaN.jpg_640x640Q90.jpg_.webp",
          precio: 29.99,
          categoria: "Hombre",
          valoraciones: 2.3
        },
        {
          nombre: "Vestido de flores",
          imagen: "https://www.casasolorzano.com.co/wp-content/uploads/2019/07/3638640_398382-800x1070_c.jpg",
          precio: 49.99,
          categoria: "Mujer",
          valoraciones: 4.4
        },
        {
          nombre: "Pantalón chino",
          imagen: "https://www.kiabi.es/images/pantalon-chino-slim-de-algodon-puro-l36-190m-negro-vr961_2_frb1.jpg",
          precio: 39.99,
          categoria: "Hombre",
          valoraciones: 4.5
        },
        {
          nombre: "Falda plisada",
          imagen: "https://m.media-amazon.com/images/I/71xddKKquKL.jpg",
          precio: 34.99,
          categoria: "Mujer",
          valoraciones: 4.3
        },
        {
          nombre: "Jersey de lana",
          imagen: "https://www.turopadecaza.com/wp-content/uploads/2022/06/Groby-Jersey-lana-cuello-alto-hombre-chevalier-turopadecaza-1.jpg",
          precio: 44.99,
          categoria: "Hombre",
          valoraciones: 4.8
        },
        {
          nombre: "Chaqueta de cuero",
          imagen: "https://i.pinimg.com/550x/c4/03/9e/c4039e67a67e2e7ec5e2ccefffc3441a.jpg",
          precio: 99.99,
          categoria: "Mujer",
          valoraciones: 4.3
        },
        {
          nombre: "Polo de algodón",
          imagen: "https://m.media-amazon.com/images/I/714frwBa3XL._AC_UY1000_.jpg",
          precio: 24.99,
          categoria: "Hombre",
          valoraciones: 3.8
        },
        {
          nombre: "Blusa de seda",
          imagen: "https://ae01.alicdn.com/kf/H86af06c08c9448da9557ad4c81b654b9C/Blusa-de-seda-satinada-camisa-negra-de-manga-larga-para-mujer-Tops-de-oficina-a-la.jpg",
          precio: 54.99,
          categoria: "Mujer",
          valoraciones: 4.2
        },
        {
          nombre: "Vaqueros desgastados",
          imagen: "https://ae01.alicdn.com/kf/Hd9797934cc05447cbd9c057432ca80364.jpg_640x640Q90.jpg_.webp",
          precio: 49.99,
          categoria: "Hombre",
          valoraciones: 4.7
        },
        {
          nombre: "Vestido de noche",
          imagen: "https://www.umbrellachic.cl/wp-content/uploads/2021/12/R2069_1.jpeg",
          precio: 89.99,
          categoria: "Mujer",
          valoraciones: 4.0
        },
        {
          nombre: "Camiseta de algodón",
          imagen: "https://confeccionesmary.com/4494-large_default/camiseta-manga-corta-hombre-algodon-rapife-710.jpg",
          precio: 14.99,
          categoria: "Hombre",
          valoraciones: 4.9
        },
        {
          nombre: "Blusa de encaje",
          imagen: "https://m.media-amazon.com/images/I/71gYk2j4oxL.jpg",
          precio: 39.99,
          categoria: "Mujer",
          valoraciones: 4.3
        },
        {
          nombre: "Bermudas de lino",
          imagen: "https://ae01.alicdn.com/kf/H438b88f88e814cccb62f1ed33af6c7e4T/Pantalones-cortos-de-lino-con-cintura-el-stica-para-hombre-Bermudas-informales-de-lino-pantalones-cortos.jpg",
          precio: 29.99,
          categoria: "Hombre",
          valoraciones: 3.4
        },
        {
          nombre: "Pantalón palazzo",
          imagen: "https://www.clara.es/medio/2020/09/24/pantalones-palazzo_fbd6fbb9_800x800.jpg",
          precio: 59.99,
          categoria: "Mujer",
          valoraciones: 4.1
        },
        {
          nombre: "Jersey de cachemira",
          imagen: "https://www.bexley.com/fstrz/r/s/www.bexley.com/es/es/media/catalog/product/cache/98e4036c4e1fa4ddff7ffc218a141626/0/1/010920b2-vlad_bleu_moyen_chine_listing_1.jpg?frz-v=87",
          precio: 89.99,
          categoria: "Hombre",
          valoraciones: 4.6
        },
        {
          nombre: "Vestido de cóctel",
          imagen: "https://i.pinimg.com/236x/f4/0b/c9/f40bc9c4982b69e895a9652871c015a1--looks-ariane-canovas-snapchat.jpg",
          precio: 79.99,
          categoria: "Mujer",
          valoraciones: 4.7
        },
        {
          nombre: "Chinos slim fit",
          imagen: "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G75/shotview/275/747-657s.jpg",
          precio: 44.99,
          categoria: "Hombre",
          valoraciones: 4.0
        },
        {
          nombre: "Blusa de seda estampada",
          imagen: "https://m.media-amazon.com/images/I/61XuPwdN1yL._AC_UF894,1000_QL80_.jpg",
          precio: 59.99,
          categoria: "Mujer",
          valoraciones: 4.1
        },
        {
          nombre: "Camisa de cuadros",
          imagen: "https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-joven-modelo-vestido-camisa-cuadros-roja-hombre-moda-posando_158538-4914.jpg?w=2000",
          precio: 34.99,
          categoria: "Hombre",
          valoraciones: 4.8
        },
        {
          nombre: "Vestido largo",
          imagen: "https://www.superweb.net/boutiqueana.com/fotografias/1588/61107-110220231137121.jpg",
          precio: 99.99,
          categoria: "Mujer",
          valoraciones: 4.6
        }
];

let FILTERED = [];

// Función para pintar productos

const initProductos = (productos) => {
  // 1. Seleccionar el lugar donde se van a insertar los productos
  const main$$ = document.querySelector("main");

  main$$.innerHTML = "";

  if (productos.length === 0) {
    const h2$$ = document.createElement("h2"):
    h2$$.textContent = "No se han encontrado los artículos que deseabas.";
    h2$$.className = "notfound";
    main$$.appendChild(h2$$);

    // 2. Ejecuto la función pintar productos pasándole únicamente los productos que he encontrado
    pintarProductos(productos, main$$);
  }
};

const pintarProductos = (products, main$$) => {
  for (const product of products) {
    const carta$$ = document.createElement("div");
    const imgWrp$$ = document.createElement("div");
    const imagen$$ = document.createElement("img");
    const divEstrellas$$ = document.createElement("div");
    const nombre$$ = document.createElement("h3");
    const precio$$ = document.createElement("p");

    carta$$.className = "carta";
    divEstrellas$$.className = "estrellas";
    imgWrp$$.className = "img_wrp";

    rellenarEstrellas(divEstrellas$$, product.valoraciones);

    imagen$$.src = product.imagen;
    nombre$$.textContent = product.nombre;
    precio$$.textContent = `${product.precio}€`;

    main$$.appendChild(carta$$);
    carta$$.appendChild(divEstrellas$$);
    imgWrp$$.appendChild(imagen$$);
    carta$$.appendChild(imgWrp$$);
    carta$$.appendChild(nombre$$);
    carta$$.appendChild(precio$$);
  }
};

const rellenarEstrellas = (divEstrellas$$, valoraciones) => {
  let estrellas = Math.round(valoraciones)

  for (let i = 0; i <= 5; i++) {
    const estrella$$ = document.createElement("img");
    
    if (i <= estrellas) {
      estrella$$.src = "./assets/estrella.png";
    } else {
      estrella$$.src = "./assets/estrellavacia.png"
    }
    divEstrellas$$.appendChild(estrella$$)
  }
};

//* Llamar a la función pintarProductos para que se ejecute
initProductos(PRODUCTS);

const pintarFiltros = () => {
  const aside$$ = document.querySelector("aside");

  filtroCategorias(aside$$);
  filtroNombre(aside$$);
  filtroEstrellas(aside$$);
};

const filtroEstrellas = (aside$$) => {
  const filterEstrellas$$ = document.createElement("div");
  filterEstrellas$$.className = "filterEstrellas";

  const tituloFiltro$$ = document.createElement("h3");
  tituloFiltro$$.textContent = "Filtrar por valoraciones":

  filterEstrellas$$.appendChild(tituloFiltro$$);

  const estrellas$$ = document.createElement("div");

  for (let i = 0; i <= 5; i++) {
    const estrella$$ = document.createElement("img");

    estrella$$.className = "estrellafiltradora";

    estrella$$.src = "./assets/estrellavacia.png";
    estrella$$.id = i;

    estrella$$.addEventListener("click", filtrarEstrellas);

    estrellas$$.appendChild(estrella$$);
  }
  filterEstrellas$$.appendChild(estrellas$$);
  aside$$.appendChild(filterEstrellas$$);
};