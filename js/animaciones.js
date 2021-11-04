let contenedorLoginRegister = document.querySelector('.contenedor-login-register');
let formLogin = document.querySelector('.form-login');
let formRegister = document.querySelector('.form-register');
let cajaTraseraLogin = document.querySelector('.caja-trasera-login');
let cajaTraseraRegister = document.querySelector('.caja-trasera-register');
let btnRegistrar=document.querySelector('#btn-registrar');
let btnIniciarSesion=document.querySelector('#btn-iniciar-sesion');

window.addEventListener('resize', anchoPagina);

btnRegistrar.addEventListener('click', mostrarRegistroUsuario);
btnIniciarSesion.addEventListener('click',mostrarIniciarSesion);

//estas de abajo son del index, para el boton que sube arriba y la barra de scroll que se completa mientras baja
//se ejecuta una funcion cuando todo el contenido del dom se haya cargado
addEventListener('DOMContentLoaded',()=>{
    let btn_irArriba=document.querySelector('#ir_arriba_boton');
    let barra_indicadora=document.querySelector('.indicador_scroll');

    //esta funcion nos devuelve la distancia en px que hay desde el punto actual hasta arriba
    let obtenerDistancia = () => document.documentElement.scrollTop || document.body.scrollTop;

    let irArriba = ()=>{
        if(obtenerDistancia() > 0) { //evaluamos si obtenerDistancia>0,
            requestAnimationFrame(irArriba);
            scrollTo(0,obtenerDistancia()-(obtenerDistancia()/1));      //nos lleva a una coordenada (x,y);
        }
    }
    let indicarScroll=()=>{
        if(obtenerDistancia()>50){
            btn_irArriba.className= 'mostrar';
        }else{
            btn_irArriba.className='ocultar';
        }
        let alto=document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let avance_scroll = (obtenerDistancia()/alto)*100;
        barra_indicadora.style.width=`${avance_scroll}`;
    };

    btn_irArriba.addEventListener('click', irArriba);
    window.addEventListener('scroll',indicarScroll);
});



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