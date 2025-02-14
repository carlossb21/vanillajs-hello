import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let aleatorio = (vector) => {
    let numero = Math.floor(Math.random() * vector.length);
    return vector[numero];
  }


  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let txtExcusa = document.getElementById('excuse');
  txtExcusa.innerHTML = aleatorio(who) + ' ' + aleatorio(action)+ ' ' + aleatorio(what) + ' '+ aleatorio(when);

  
};
