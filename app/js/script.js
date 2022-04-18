console.log('Funciona js')

const btnHamburger = document.querySelector('#btnHambur');

btnHamburger.addEventListener('click', function () {
    console.log('open hamburger');
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.add('open');
    }
    else{
        btnHamburger.classList.remove('open');
    }
});