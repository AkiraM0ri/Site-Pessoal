const menuHamburguer = document.querySelector('div#menu-hamburger')
const navList = document.querySelector('#nav-list')

let clicks = 0
function abrirMenu() {
    
    if (clicks == 0) {
        navList.classList.add('active')
        clicks = 1
        return
    }
    
    if(clicks == 1){
        navList.classList.remove('active')
        clicks = 0
    }
}

menuHamburguer.addEventListener('click', abrirMenu)