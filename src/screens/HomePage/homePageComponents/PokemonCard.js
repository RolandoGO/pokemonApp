import React from 'react'
import "../homePage.css"

export default function PokemonCard({pokemon}) {


  return (
   
          <div className="card">
            <h2>{pokemon.id}</h2>
            <h2>{pokemon.name}</h2>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Weight:{pokemon.weight}</p>
            <h2>Habilities:</h2>
            {pokemon.abilities.map(ability=><p key={ability.ability.name}>{ability.ability.name}</p>)}
            
            <img src={pokemon.sprites.front_default} alt="Pokemon  not found"></img>
          </div>
          )
}
