import { useState } from 'react';
import Banner from './componentes/Banner';/*Impotando a função do Banner*/
import Formulario from './componentes/Formulario';

//Essa classe é a main do projeto, nela terá todas referências dos componentes

/*
<Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
  Pegando os valores que foram inseridos e concatenando
*/ 
function App() {
  //Criando método de pegar os valores inseridos no formulario, que será uma lista
  const [colaboradores, setColaboradores] = useState([])

  //Criando um função
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])//Nessa parte estou passando todos os colaboradores antigos, e depois adicionando os novos

  }

  return (
    <div className="App">
      <Banner />     
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
