import constants from "../../constants"
import { useAuth } from '../../components/context/authContext'
import { useNavigate } from "react-router"
import axios from "axios"

export default function HomeService() {
  

    const navigate = useNavigate()
    const {logOut}=useAuth()

    function handleLogOut(){
        logOut()
        navigate("/login")
      }


    function sortPokemonGroup(pokemonNumRange){

        let{start, end} = pokemonNumRange
        const numsArray = []
        while(start<=end){
            numsArray.push(start.toString())
            start += 1
        }

        return numsArray    
    }

    async function getPokemonGroup(numArray){
        
        const pokemonListCalls =  await Promise.all(numArray.map( (num)=> getPokemon(num)))
        return(pokemonListCalls)
        
    }

    async function getPokemon(num){
        
        try {
            const call = await axios.get(constants.pokemonApiURL+num)
            return(call.data) 
        }
        catch{
            return(false) 
        }
        
    }
    
   
    function handleChange(e,setErrMsj,setPokemonRange,pokemonRange){

        const {name, value} = e.target
    
        if(value > 0 && value < 151){ 
          setErrMsj("")
          
    
          if(name === "end"&& !pokemonRange.start){
                setErrMsj(<p className='errMsj'>Enter start number first</p>)
          }
    
          else if(name==="start"){
                (value < 150)? setPokemonRange({...pokemonRange, [name]:value}) : setErrMsj(<p className='errMsj'>Have to be more than 1 and lower than 150 </p>)
          }
          else setPokemonRange({...pokemonRange, [name]:value})
          
          
    
        }  
        
        else{
          setErrMsj(<p className='errMsj'>Numbers have to be form 1 to 150</p>)
        }
        
      }





      async function handleSubmit(pokemonRange,setErrMsj,sortPokemonGroup,getPokemonGroup,setPokemonData){

        const startNum = Number(pokemonRange.start)
        const endNum = Number(pokemonRange.end)
       if(startNum >= endNum)setErrMsj(<p className='errMsj'>Start number has to be lower than the end number</p>)
       else {
         
         const range = sortPokemonGroup({start:startNum, end:endNum})
         await getPokemonGroup(range).then((data)=>setPokemonData(data))
     
       }
        
      }
     

        
    
  

    return {
        getPokemonGroup,
        sortPokemonGroup,
        getPokemon,
        handleLogOut,
        handleChange,
        handleSubmit
    }
}
