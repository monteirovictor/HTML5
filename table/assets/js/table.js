
function tabuada(){



let tabuada  = document.querySelector('#tabuada tbody');
let valora = parseInt(document.querySelector('#valora').value);



tabuada.innerHTML = '';


for (let valorb = 0; valorb <=10 ;valorb++){

    let resultado = valora*valorb;

    let template= 
    `
    <td>${valora}</td>
    <td>x</td>
    <td>${valorb}</td>
    <td>&nbsp;</td>
    <td>${resultado}</td>
    <td>
    `;

    let tr = document.createElement('tr');
    tr.innerHTML = template;

    tabuada.append(tr);

}}

tabuada();
