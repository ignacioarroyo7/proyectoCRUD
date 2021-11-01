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

cargaInicial();


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
btnNuevoProducto.addEventListener('click',abrirFormulario);



function guardarProducto(e){
    e.preventDefault();
    if(validarGuardar()){
        if(existeProducto == false){
            agregarProducto();
            existeProducto = true;
        }else{
            actualizarProducto();
            existeProducto = true;
        }
    }
}

function agregarProducto(){
    let nuevoProducto = new Producto(codigo.value,nombre.value,descripcion.value,url.value);

    listaProductos.push(nuevoProducto);

    localStorage.setItem("productos",JSON.stringify(listaProductos));

    limpiarFormulario();

    crearFilas(nuevoProducto);
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
      <button class="btn btn-warning" onclick='prepararEdicion(${producto.codigo})'><i class="fas fa-edit"></i></button>
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

function abrirFormulario(){
    
}