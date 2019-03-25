document.getElementById('btn-word').addEventListener('click', createWord);

console.log("Hello world!");
const mgh = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ö', 'ü'];
const msh = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z', 'cs', 'gy', 'ly', 'ny', 'sz', 'ty', 'zs', 'dzs'];

let w = '';
let c;


function createWord() {
  w = '';
  for (i = 0; i < 4; i++) {
    c = Math.floor(Math.random() * msh.length);
    w += msh[c];
    c = Math.floor(Math.random() * mgh.length);
    w += mgh[c];
  }
  console.log(w);
  document.querySelector('h3').innerText = w;
}