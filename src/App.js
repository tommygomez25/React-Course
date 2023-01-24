import 'bulma/css/bulma.css';
import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';
import AlexaImage from './images/alexa.png'; // since alexa.png is less than 9.7 kb, gets inlined (it is converted to base 64)
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png'; // since siri.png is more than 9.7 kb, gets treated as separate file

function getRandomAnimal() {
  const animals = ['bird','cat','cow','dog','gator','horse'];
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

  const [animals,setAnimals] = useState([]);

  const handleClick = () => {   
  // isto modifica uma piece of state -> animals.push(getRandomAnimal())
    setAnimals([...animals,getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal,index) => {
    return <AnimalShow type = {animal} key = {index} />
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  )
}

export default App;