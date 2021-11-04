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