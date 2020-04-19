// constantes e variaveis

const email = 'victor@gmail.com';
console.log(email);
console.log('Seu email é:' +email);

// eventos por ID
document.getElementById('btn-submit').addEventListener('click', e=>{
    console.log('o botão foi clicado !');
});

document.getElementById('form-login').addEventListener('mouseenter', e=>{
    console.log('o botão foi clicado !');
});

document.querySelector('#form-login').addEventListener('mouseleave',e=>{
    console.log('Mouse out');
});

// submit

document.querySelector('#form-login').addEventListener('submit' , e=>{
    e.preventDefault();

    let email=document.querySelector('#email').value;
    let senha=document.querySelector('#senha').value;

    console.log(email);
    console.log(senha);

    let json = {
        email,
        senha
    }

    console.log(json);

    // converte json em string 

    let stringjson = JSON.stringify(json);
    console.log(stringjson);

    // string em json
    let parsejson = JSON.parse(stringjson);
    console.log(parsejson);

    if(!json.email){
        console.log("vazio");
    }else if(!json.senha){
        console.log("vazio");
    }else{
        console.log("campo ok");
    }

});