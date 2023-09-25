import './App.css'
import Profile from './components/Profile';
import HelloName from './components/HelloName';
import HelloWorld from './components/HelloWorld';
import Family from './components/Family';
import ProfileClass from './components/ProfileClass';
import Counter from './components/Counter';

function App() {
  const members = [
    {
      name: 'José', last_name: 'Santos', age: 28, job: 'Técnica em Enfermagem',
    },
    {
      name: 'Mara', last_name: 'Vieira', age: 23, job: 'Técnica em Necrópsia',
    },
    {
      name: 'Geraldo', last_name: 'Aguiar', age: 25, job: 'Técnica em Nutrição',
    },
  ];
  
  return (
    <>
      <h2>1 - Criando um componente simples</h2>
      <HelloWorld />
      
      <h2>2 - Utilizando props</h2>
      <HelloName name={'Leonardo'} />

      <h2>3 - Múltiplas props</h2>
      <Profile name={'Leonardo'} last_name={'Santos'} age={39} job={'Estudante'} />
      
      <h2>4 - Composição de componentes</h2>
      <Family members={members} />

      <h2>5 - Componente de classe</h2>
      <ProfileClass name={'Joana'} age={24} job={'Motorista'} />

      <h2>6- Componente com estado</h2>
      <Counter />
    </>
  );
}

export default App;
