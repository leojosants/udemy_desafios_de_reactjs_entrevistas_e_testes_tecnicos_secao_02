import './App.css'
import Profile from './components/Profile';
import HelloName from './components/HelloName';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <>
      <h2>1 - Criando um componente simples</h2>
      <HelloWorld />
      
      <h2>2 - Utilizando props</h2>
      <HelloName name={'Leonardo'} />

      <h2>3 - Múltiplas props</h2>
      <Profile name={'Leonardo'} last_name={'Santos'} age={39} job={'Estudante'}/>
    </>
  );
}

export default App;
