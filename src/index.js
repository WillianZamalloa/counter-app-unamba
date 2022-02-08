import React from 'react';// Libreria principal
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';
//mport PrimeraApp from './PrimeraApp';

//Optenemos el elemento con el id root de la pagina
const divRoot = document.querySelector('#root');
//Renderizar la pagina
ReactDOM.render(<CounterApp />, divRoot);

