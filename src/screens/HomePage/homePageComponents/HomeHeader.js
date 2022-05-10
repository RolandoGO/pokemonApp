import React from 'react'
import HomeService from "../HomeService"
import "../homePage.css"


export default function HomeHeader({data}) {

    const {sortPokemonGroup, getPokemonGroup, handleLogOut, handleChange,handleSubmit} = HomeService()
    const {pokemonRange,setPokemonRange, setErrMsj, errMsj, setPokemonData} = data
  
    return (
        <header className='pokemonHeader'>
        
            <div>
            <button onClick={handleLogOut}>Log Out</button>
            </div>
            
            
            <form className='rangeForm'>

            <div className='inputRange'>
            <label htmlFor='start'>Start range</label>
            <input value={pokemonRange.start} name='start' id='start' type={"number"} onChange={(e)=>handleChange(e, setErrMsj,setPokemonRange,pokemonRange)}/>

            <label htmlFor='end'>End range</label>
            <input value={pokemonRange.end} name='end' id='end' type={"number"} onChange={(e)=>handleChange(e,setErrMsj,setPokemonRange,pokemonRange)}/>
            {errMsj}
            </div>
            </form>

            <div>
                <button  onClick={()=>handleSubmit(pokemonRange,setErrMsj,sortPokemonGroup,getPokemonGroup,setPokemonData)}>Search</button>
            </div>
            
      </header>
  )
}
