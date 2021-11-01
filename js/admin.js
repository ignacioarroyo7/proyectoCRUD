import {
    validarCampoRequerido,validarCodigo,validarUrl,validarGuardar
} from "./validaciones.js";
import { Producto } from "./claseProducto.js";

let codigo = document.querySelector('#codigo');
let nombre = document.querySelector('#nombre');
let descripcion = document.querySelector('#descripcion');
let url = document.querySelector('#url');
let formularioProducto = document.querySelector('#formularioProducto');
let existeProducto = false;
let listaProductos = [];
let btnNuevoProducto = document.querySelector('#btnNuevoProducto');
let totalProductos = document.querySelector('#totalProductos');

cargaInicial();
actualizarContador();

codigo.addEventListener('blur',()=>{
    validarCodigo(codigo);
});

nombre.addEventListener('blur', ()=>{
    validarCampoRequerido(nombre);
});

descripcion.addEventListener('blur',()=>{
    validarCampoRequerido(descripcion);
});

url.addEventListener('blur',()=>{
    validarUrl(url);
});

formularioProducto.addEventListener('submit',guardarProducto);
btnNuevoProducto.addEventListener('click',limpiarFormulario);



function guardarProducto(e){
    e.preventDefault();
    if(validarGuardar()){
        if(existeProducto == false){
            agregarProducto();
            existeProducto = true;
            limpiarFormulario();
            actualizarContador();
            
        }else{
            actualizarProducto();
            limpiarFormulario();
            actualizarContador();
        }
    }
}

function agregarProducto(){
    let nuevoProducto = new Producto(codigo.value,nombre.value,descripcion.value,url.value);

    listaProductos.push(nuevoProducto);

    localStorage.setItem("productos",JSON.stringify(listaProductos));

    limpiarFormulario();

    crearFilas(nuevoProducto);

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
}

function limpiarFormulario(){
    formularioProducto.reset();
    codigo.className= 'form-control';
    nombre.className= 'form-control';
    descripcion.className= 'form-control';
    url.className= 'form-control';

    existeProducto=false;
}

function crearFilas(producto){
    let tabla = document.querySelector('#tablaProductos');
    tabla.innerHTML += `<tr>
    <th scope="row">${producto.codigo}</th>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.url}</td>
    <td>
      <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalFormularioProducto" onclick='obtenerDatosEdicion(${producto.codigo})'><i class="fas fa-edit"></i></button>
      <button class="btn btn-danger" onclick='eliminarProducto(${producto.codigo})'><i class="fas fa-trash-alt light"></i></button>
    </td>
  </tr>`
}

function cargaInicial(){
    listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
    listaProductos.forEach(producto => {
        crearFilas(producto);
    });
    
}

function actualizarContador(){
    listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
    totalProductos.innerHTML=`Total productos: ${listaProductos.length}`;
}

window.obtenerDatosEdicion = (codigoProducto) =>{
    let productoBuscado = listaProductos.find((producto)=>{
        return producto.codigo==codigoProducto;
    });
    codigo.value=productoBuscado.codigo;
    nombre.value=productoBuscado.nombre;
    descripcion.value=productoBuscado.descripcion;
    url.value=productoBuscado.url;
  
    existeProducto=true;
  }