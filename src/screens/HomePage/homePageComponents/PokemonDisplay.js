import React, { memo} from 'react'
import "../homePage.css"
import PokemonCard from './PokemonCard'

const  PokemonDisplay = ({pokemonData})=> {

  console.log("render pokemon display")

    if(pokemonData.length > 0){
      
      return (
        <main className='pokemonDisplay'>

        {pokemonData.map((pokemon)=>{
          
            if(pokemon){
              return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            }
            else return (
              <div className='card'><p>Not found</p></div>
            )
          
        })}

        </main>)
    }

    else{

      return <h1>Search groups of pokemons whit the above form</h1>

    }


  
}

export default memo(PokemonDisplay)
