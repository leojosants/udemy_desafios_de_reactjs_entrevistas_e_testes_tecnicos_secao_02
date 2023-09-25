import './App.css'
import HelloName from './components/HelloName';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <>
      <h2>1 - Criando um componente simples</h2>
      
      <HelloWorld />
      
      <h2>2 - Utilizando props</h2>
      
      <HelloName name={'Leonardo'} />
    </>
  );
}

export default App;
