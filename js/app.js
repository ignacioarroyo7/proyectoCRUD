let listaProductos = [];
cargaInicial();

function cargaInicial(){
    listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

    if(listaProductos.length > 0){
        listaProductos.forEach(producto => {
            crearCard(producto);
        });
    }
}

function crearCard(producto){
    let card = document.querySelector('#grillaCards');
    card.innerHTML+=`
    <div class="col-sm-12 col-md-4 col-lg-3 mb-3 mt-3">
        <div class="card text-center">
            <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-primary">Añadir al carrito</a>
            </div>
        </div>
    </div>`;
}