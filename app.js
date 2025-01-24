// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let names = [];

function agregarAmigo() {
    let inputName = document.querySelector('.input-name');
    if (inputName.value == ""){
        alert("Ingrese un nombre Valido")
    } else{
        let ul = document.getElementById("listaAmigos");
        let li = document.createElement('li');
        li.innerHTML = inputName.value;
        ul.appendChild(li);
        names.push(inputName.value);
        inputName.value = "";  
    }
}

function sortearAmigo() {
    let all_li = document.querySelectorAll('li');
    all_li.forEach(li =>{
        li.remove();
    });
    let namesLength = names.length;
    let AmigoRandom = Math.floor(Math.random()*namesLength)+1;
    console.log("nmesLength",namesLength);
    console.log("AmigoRandom_index",AmigoRandom);
    

    let ul = document.getElementById("listaAmigos");
    let li = document.createElement('li');
    li.innerHTML = `El amigo secreto sorteado es: ${names[AmigoRandom-1]}`;
    li.classList.add("result-list")
    ul.appendChild(li);
    
}