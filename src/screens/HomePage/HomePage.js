import React, { useState } from 'react'
import PokemonDisplay from './homePageComponents/PokemonDisplay'
import HomeHeader from './homePageComponents/HomeHeader'
import "./homePage.css"


export default function HomePage() {

  
  const [pokemonRange, setPokemonRange] = useState({start:1,end:5})
  const [pokemonData, setPokemonData] = useState([])
  const [errMsj, setErrMsj] = useState("")
  
  
  
  
  return (
    <div className='pokemonContainer'>
     
    <HomeHeader data ={{pokemonRange,setPokemonRange,setPokemonData,errMsj,setErrMsj}}/>
      

      <PokemonDisplay pokemonData={pokemonData}/>
      
    </div>
   
  )
}
