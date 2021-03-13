import { animals } from './animals';
import ReactDOM from 'react-dom'
import React from 'react'

const title = "";
const showBackground = true;
const images = [];
for(const animal in animals) {
  images.push(
    <img 
    key={animal}
    className="animal"
    alt={animal}
    src={animals[animal].image}
    ariaLabel={animal}
    role="button"
    onClick={displayFact}
    />
  )
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalFact = animals[selectedAnimal]
  const index = Math.floor(Math.random() * animalFact.facts.length)

  const funFact = animalFact.facts[index];
  document.getElementById('fact').innerHTML= funFact
}

const AnimalFacts = () => {
    const background = (
        <img 
          className='background'
          alt='ocean'
          src='/images/ocean.jpg'/>
      )
      
  return ( <div>
    <h1>{title === "" ? 'Click an animal for a fun fact' : title}</h1>
    {showBackground && background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
);
  }

export default AnimalFacts
ReactDOM.render(AnimalFacts, document.getElementById('root'))