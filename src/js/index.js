const camposObrigatorios = document.querySelectorAll("input[type='text']");
const alertaDeCamposObrigatorios = document.querySelectorAll(".campo-obrigatorio");

function verificacaoDeCampos(){
    camposObrigatorios.forEach( (elemento,index)=> {
        if(elemento.value == ""){
            elemento.style.border = "solid 1px #F52E2E";
            alertaDeCamposObrigatorios[index].style.display = "block";
        }else{
            elemento.style.border = "solid 1px #00C22B";
            alertaDeCamposObrigatorios[index].style.display = "none";
        }
    });
}