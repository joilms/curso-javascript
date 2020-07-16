function clicou(){
    document.getElementById("agradecimento").innerHTML = "Show de bola!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/");
    //window.location.href = "https://github.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Muito bem!</b>";
    elemento.innerHTML = "<b>Muito bem!</b>";
    //alert("Trocar texto");
}

function voltar1(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui!</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui!</b>";
}

function voltar2(elemento){
    elemento.innerHTML = "<b>Agora passe o mouse cá!</b>";
}

function voltar3(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui também!</b>";
}

function load(){
    alert("Prepare-se para passar o mouse!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}