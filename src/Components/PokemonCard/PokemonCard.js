import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = (pokemonName) => {
      if(pokemonName === "Pichu"){
      props.setPokemon({
        name: "Raichu",
        type: "Electric",
        evolved: true,
        weight: 30,
        color: 'yellow',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/375px-026Raichu.png',
        id: 26
        })} else if (pokemonName === "Charmander") {
      props.setPokemon({
        ...props.pokemon2,
        name: "Charizard",
        color: "orange",
        evolved: true,
        weight: 80,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png',
        id: 50
        })}else if (pokemonName === "Mew") {
        props.setPokemon ({
          ...props.pokemon3,
          name: "Mewtwo",
          evolved: true,
          weight: 60,
          color: "violet",
          image: "https://archives.bulbagarden.net/media/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png"
        })} else if(pokemonName === "Abra") {
          props.setPokemon ({
            ...props.pokemon4,
            name: "Kadabra",
            evolved: true,
            color: "goldenrod",
            weight: 55,
            image: "https://archives.bulbagarden.net/media/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png"
          })
        }
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <>
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p> 
        <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>Evoluir!</EvolveButton>
    </Card>
    </>
  )
}

export default PokemonCard