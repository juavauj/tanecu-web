let msg = "%c Hello 👋! This site was developed by tanecu. write me if you want: info@tanecu.com "; 
let styles= [ 
    'font-size: 12px', 
    'font-family: monospace', 
    'background: white', 
    'display: inline-block', 
    'color: black', 
    'padding: 8px 19px', 
    'border: 1px dashed;' 
].join(';') 
console.log(msg, styles);

const btnHamburger = document.querySelector('#btnHambur');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function () {

    if(header.classList.contains('open')){
        header.classList.remove('open');
    }
    else{
        header.classList.add('open');
    }
});