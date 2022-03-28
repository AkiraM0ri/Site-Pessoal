// Animação quando scrollar
const target = document.querySelectorAll('[data-anime]');
const animeClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset * 2;

    target.forEach((element)=>{
        if((windowTop) > element.offsetTop) {
            element.classList.add(animeClass)
        } else {
            element.classList.remove(animeClass)
        }
    })
};

animeScroll();

if(target.length){
    window.addEventListener('scroll', ()=>{
        animeScroll();
    })
}

// animação de digitação
function typeWritter(elemento) {
    textoArr = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArr.forEach((letra, i)=>{
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 75 * i);
    })
}

const titulo = document.querySelector("#meu_nome")
const frontend = document.querySelector("#stacks")

typeWritter(titulo)
typeWritter(frontend)