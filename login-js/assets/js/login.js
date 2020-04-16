// constantes e variaveis

const email = 'victor@gmail.com';
console.log(email);
console.log('Seu email é:' +email);

// eventos por ID
document.getElementById('btnsubmit').addEventListener('click', e=>{
    console.log('o botão foi clicado !');
});

document.getElementById('form').addEventListener('mouseenter', e=>{
    console.log('o botão foi clicado !');
});

document.querySelector('#form').addEventListener('mouseleave',e=>{
    console.log('Mouse out');
});