import React, { useState} from 'react';
//import Header from './Header'
import  './global.css'
import Routes from './routes'
                   
export default function App() {   
/*  const [counter, setCounter] = useState(0) //useState retorna Array= [valor, funçãoDeAtualização]

  function add(){
    setCounter(counter + 1)
    console.log(counter)
  }
*/
  return (
    <Routes />
  );
}





// Definições REACT
// JSX: HTML dentro do JS, ou seja, JS + XML
// Componente: é uma funçao que retorna HTML
// Propriedades: são os atributos do HTML, mas para os componentes do react -> Header(props)
// Estado: variaveis não irão mudar em todos os lugares simultaneamente, o uso so useState ajuda nisto
// Imutabilidade: dentro do react, não podemos manipular o valor do estado de forma direta