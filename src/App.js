import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon1, setPokemon1] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 4,
    color: 'orange',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
    id: 1
  })

  const [pokemon3, setPokemon3] = useState({
    name: "Mew",
    type: "Psych",
    evolved: false,
    weight: 10,
    color: 'pink',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b1/151Mew.png/250px-151Mew.png',
    id: 99
  })

  const [pokemon4, setPokemon4] = useState({
    name: "Abra",
    type: "Psych",
    evolved: false,
    weight: 19,
    color: 'goldenrod',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/6/62/063Abra.png/250px-063Abra.png',
    id: 67
  })

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard 
      pokemon={pokemon1}
      setPokemon={setPokemon1}/>
      <PokemonCard
      pokemon={pokemon2}
      setPokemon={setPokemon2} />
      <PokemonCard
      pokemon={pokemon3}
      setPokemon={setPokemon3} />
      <PokemonCard 
      pokemon={pokemon4}
      setPokemon={setPokemon4}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
