const botao = document.querySelector(".bt-plataforma");

const elementoPlataformas = document.querySelector(".bt-plataforma .plataformas");

botao.addEventListener("click", () =>{
    elementoPlataformas.classList.toggle("ativo");
});