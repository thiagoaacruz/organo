import Banner from './componentes/Banner';/*Impotando a função do Banner*/
import Formulario from './componentes/Formulario';

//Essa classe é a main do projeto, nela terá todas referências dos componentes

function App() {
  return (
    <div className="App">
      <Banner />     
      <Formulario/>
    </div>
  );
}

export default App;
