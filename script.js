let opct = document.querySelector('#two');
let picture = document.querySelector('img');
let value = document.querySelector('.value');
value.textContent = opct.value;
opct.oninput = function (){
    value.textContent = this.value;
    for (let index = 0; index <= value.textContent; index++) {
        picture.style.border = ` solid ${index}px black`;
    }
}

let opct1 = document.querySelector('#one');
let valuee = document.querySelector('.valuee');
valuee.textContent = opct.value;
opct1.oninput = function (){
    valuee.textContent = this.value;
    for (let index = 0; index <= valuee.textContent; index++ ){
        picture.style.opacity = index;
    }
}