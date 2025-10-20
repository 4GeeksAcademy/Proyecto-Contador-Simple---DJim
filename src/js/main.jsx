import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'





// components
import Home from './components/Home';

let root = ReactDOM.createRoot(document.getElementById('root'));

let contador = 0;
setInterval(() => {
  let primerDigito = Math.floor((contador/1)%10)
  let segundoDigito = Math.floor((contador/10)%10)
  let tercerDigito = Math.floor((contador/100)%10)
  let cuartoDigito = Math.floor((contador/1000)%10)
  let quintoDigito = Math.floor((contador/10000)%10)
  let sextoDigito  = Math.floor((contador/100000)%10)


  contador ++;

  root.render(
  <React.StrictMode>
    <Home uno={primerDigito} dos={segundoDigito} tres ={tercerDigito} cuatro = {cuartoDigito} cinco = {quintoDigito} seis = {sextoDigito} />
  </React.StrictMode>,
)

  
}, 1000);






