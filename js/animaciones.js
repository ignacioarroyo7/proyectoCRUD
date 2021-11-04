let contenedorLoginRegister = document.querySelector('.contenedor-login-register');
let formLogin = document.querySelector('.form-login');
let formRegister = document.querySelector('.form-register');
let cajaTraseraLogin = document.querySelector('.caja-trasera-login');
let cajaTraseraRegister = document.querySelector('.caja-trasera-register');
let btnRegistrar=document.querySelector('#btn-registrar');
let btnIniciarSesion=document.querySelector('#btn-iniciar-sesion');
window.addEventListener('resize', anchoPagina);

btnRegistrar.addEventListener('click',mostrarRegistroUsuario);
btnIniciarSesion.addEventListener('click',mostrarIniciarSesion);


function anchoPagina(){
    if(window.innerWidth > 850){
        cajaTraseraLogin.style.display='block';
        cajaTraseraRegister.style.display='block';
    }else{
        cajaTraseraRegister.style.display='block';
        cajaTraseraRegister.style.opacity='1';
        cajaTraseraLogin.style.display='none';
        formLogin.style.display='block';
        contenedorLoginRegister.style.left="0px";
        formRegister.style.display='none';
        
    }
}
anchoPagina();


function mostrarRegistroUsuario(){
    if(window.innerWidth >850){
        formRegister.style.display= "block";
        formLogin.style.display= "none";
        contenedorLoginRegister.style.left="455px";
        cajaTraseraLogin.style.opacity="1";
        cajaTraseraRegister.style.opacity="0";
    }else{
        formRegister.style.display= "block";
        contenedorLoginRegister.style.left="0px";
        formLogin.style.display= "none";
        cajaTraseraRegister.style.display="none";
        cajaTraseraLogin.style.display="block";
        cajaTraseraLogin.style.opacity="1";
    }
}
function mostrarIniciarSesion(){
    if(window.innerWidth >850){
        formRegister.style.display= "none";
        formLogin.style.display= "block";
        contenedorLoginRegister.style.left="10px";
        cajaTraseraLogin.style.opacity="0";
        cajaTraseraRegister.style.opacity="1";  
    }else{
        formLogin.style.display= "block";
        contenedorLoginRegister.style.left="0px";
        formRegister.style.display= "none";
        cajaTraseraRegister.style.display="block";
        cajaTraseraLogin.style.display="none";
    }
}