import React from 'react';
import {View} from 'react-native'
import Routes from './src/routes'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'



export default function App() {
  return (
 
      <Routes />

  );
}


// display:flex é padrão
// nao existe herança de estilos no react native
// 