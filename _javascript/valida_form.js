//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validaCelular() {
    var vCel = document.getElementById("cel");
    if(!vCel.checkValidity()){
        alert("Informe um celular válido - (99) 99999-9999");
        return false;
    } else {
        return true;
    }
}

function validaUsuarioSenha() {
    var vUsuario = document.getElementById("login").value;
    var vSenha = document.getElementById("senha").value;
    var vValoresValidos = '{"user":"Usuario","password":"Abc$123"}';
    var vObjJson = JSON.parse(vValoresValidos);

    if(!(vUsuario==vObjJson.user && vSenha==vObjJson.password)){
        alert("Usuário ou Senha informados não confere. Usuario / Abc$123");
        return false;
    } else {
        return true;
    }
}

// function validaGeral() {
//     return false;
// }

function validaGeral() {
    if(validaCelular() && validaUsuarioSenha()){
        var vBotaoAssinar = document.getElementById("butassin");
        vBotaoAssinar.disabled = false;
        return true;
    } else {
        return false;
    }
}

function contador() {
    var vData = new Date();
    var vContadorP = document.getElementById("dataContador");
    var vCont = 1;
    setInterval(function () {vContadorP.innerHTML = vData + ' ' + vCont++}, 1000);
}