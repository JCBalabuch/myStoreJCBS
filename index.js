const PRODUCTS = [
        {
          nombre: "Camisa de rayas",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRI05ysog9zc2gUhTmTIZbZGdOm3Jkl3Uxw&usqp=CAU",
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
          imagen: "https://i.pinimg.com/236x/f7/a0/bd/f7a0bd75cc1fd9cec3853432ce89d1ba.jpg",
          precio: 54.99,
          categoria: "Mujer",
          valoraciones: 4.2
        },
        {
          nombre: "Vaqueros desgastados",
          imagen: "https://d3en8d2cl9etnr.cloudfront.net/523789-large_default/black-skinny-jeans-men-ripped-distressed-jeans-casual-hole-summer-stre.jpg",
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
          imagen: "https://m.media-amazon.com/images/I/61UWOZrF+xL._AC_SX425_.jpg",
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
    const h2$$ = document.createElement("h2");
    h2$$.textContent = "No se han encontrado los artículos que deseabas.";
    h2$$.className = "notfound";
    main$$.appendChild(h2$$);

    // 2. Ejecuto la función pintar productos pasándole únicamente los productos que he encontrado
    pintarProductos(PRODUCTS, main$$);
  } else {
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
  let estrellas = Math.round(valoraciones);

  for (let i = 1; i <= 5; i++) {
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
  tituloFiltro$$.textContent = "Filtrar por valoraciones";

  filterEstrellas$$.appendChild(tituloFiltro$$);

  const estrellas$$ = document.createElement("div");

  for (let i = 1; i <= 5; i++) {
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

const filtroCategorias = (aside$$) => {
  const categorias = [];

  for (const producto of PRODUCTS) {
    if(!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
  }
  const divCategoria$$ = document.createElement("div");

  divCategoria$$.className = "categorias";

  const tituloFiltro$$ = document.createElement("h3");
  tituloFiltro$$.textContent = "Filtrar por categoría";

  divCategoria$$.appendChild(tituloFiltro$$);

  for (const categoria of categorias) {
    const categoria$$ = document.createElement("div");
    const label$$ = document.createElement("label");
    const checkbox$$ = document.createElement("input");

    checkbox$$.type = "checkbox";
    categoria$$.className = "categoria";
    label$$.textContent = categoria;
    checkbox$$.id = categoria;
    label$$.setAttribute("for", categoria);

    divCategoria$$.appendChild(categoria$$);
    categoria$$.appendChild(label$$);
    categoria$$.appendChild(checkbox$$);

    checkbox$$.addEventListener("change", (e) => filtrarCategoria(e, label$$))
  }
  aside$$.appendChild(divCategoria$$);
};

const filtrarEstrellas = (e) => {
  const allStars = document.querySelectorAll(".estrellaFiltradora");

  for (let i = 0; i < allStars.length; i++) {
    if (i <= e.target.id - 1) {
      allStars[i].src = "./assets/estrella.png";
    } else {
      allStars[i].src = "./assets/estrellavacia.png";
    }
  }

  let filteredStars = [];

  if (FILTERED.length) {
    filteredStars = FILTERED.filter((producto) => Math.round(producto.valoraciones) >= parseInt(e.target.id))
  } else {
    filteredStars = PRODUCTS.filter((producto) => Math.round(producto.valoraciones) >= parseInt(e.target.id))
  };
  initProductos(filteredStars);
};

const filtrarCategoria = (e, label$$) => {
  if (e.target.checked) {
    label$$.classList.add("seleccionado");

  // Método some de arrays para saber si hay algún elemento dentro del array que coinciad con la condición
  if (!FILTERED.some((producto) => producto.categoria === e.target.id)) {
    FILTERED = [
      ...FILTERED,
      ...PRODUCTS.filter((producto) => producto.categoria === e.target.id)
    ];
    initProductos(FILTERED);
  }
  } else {
    label$$.classList.remove("seleccionado");

    FILTERED = FILTERED.filter((producto) => producto.categoria !== e.target.id);

    initProductos(FILTERED);
  }
};

const filtroNombre = (aside$$) => {
  const divNombre$$ = document.createElement("div");
  const buscador$$ = document.createElement("div");
  const input$$ = document.createElement("input");
  const icon$$ = document.createElement("img");

  const tituloFiltro$$ = document.createElement("h3");
  tituloFiltro$$.textContent = "Filtrar por nombre";
  divNombre$$.className = "nombres";

  divNombre$$.appendChild(tituloFiltro$$);

  icon$$.src = "./assets/lupa.png";
  buscador$$.className = "buscador";

  buscador$$.appendChild(input$$);
  buscador$$.appendChild(icon$$);
  divNombre$$.appendChild(buscador$$);
  aside$$.appendChild(divNombre$$);

  icon$$.addEventListener("click", () => abrirBuscador(buscador$$));
  input$$.addEventListener("input", filtrarNombre);
};

const abrirBuscador = (buscador$$) => {
  buscador$$.classList.add("mostrar");
};

const filtrarNombre = (e) => {
  let filteredName = [];

  if (FILTERED.length) {
    filteredName = FILTERED.filter((producto) => 
    producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
  } else {
    filteredName = PRODUCTS.filter((producto) => producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
  }
  initProductos(filteredName)
};

pintarFiltros();


const menu$$ = document.querySelector(".menu");

let abierto = false;

const abrirMenu = () => {
  const aside$$ = document.querySelector("aside");

  if (abierto) {
    aside$$.style.width = "0px";
    abierto = false;
  } else {
    aside$$.style.width = "70%";
    abierto = true;
  }
}

menu$$.addEventListener("click", abrirMenu);