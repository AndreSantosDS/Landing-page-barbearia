const menu = document.querySelector("#nav-menu")
const menuHamburguer = document.querySelector(".menu-hamburguer")
const fecharMenu = document.querySelector(".fechar-menu")

menuHamburguer.addEventListener("click",function(){
    menu.classList.toggle("active")
});
fecharMenu.addEventListener("click",function(){
    menu.classList.remove("active")
})
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuHamburguer.contains(event.target)) {
        menu.classList.remove("active");
    }
});
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    
    if (nome.trim() === "") {
      alert("Por favor, preencha o nome.");
    }else if(email.trim() === ""){
        alert("Por favor, preencha o e-mail.");
    }else if(telefone.trim() === ""){
        alert("Por favor, preencha o telefone.");
    }else if(data.trim() === ""){
        alert("Por favor, preencha o data.");
    }else if(hora.trim() === ""){
        alert("Por favor, preencha o hora.");
    }else {
      this.submit();
    }
});

const btnVoltar = document.getElementById('btn-voltar');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnVoltar.style.display = "block";
    } else {
        btnVoltar.style.display = "none";
    }
};