export function validarCodigo(input){
    if(input.value.trim().length !='' && input.value.trim().length >= 4){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className= 'form-control is-invalid';
        return false;
    }

}

export function validarCampoRequerido(input){
    if(input.value.trim().length !=''){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className= 'form-control is-invalid';
        return false;
    }
}

export function validarUrl(input){
    let patronUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(input.value.trim() != '' && patronUrl.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarGuardar(){
    let alerta = document.querySelector('#alertaGuardar');
    
    if(validarCodigo(codigo)&&validarCampoRequerido(nombre)&&validarCampoRequerido(descripcion)&&validarUrl(url)){
        alerta.className = 'alert alert-danger mt-4 d-none';
        return true;
    }else{
        alerta.className = 'alert alert-danger mt-4';
    }
}
