
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import img from "../images/top5.jpeg"

export default function form() {
return ( 



<div className= 'container mx-auto'>
  <div className=' flex w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>

<div className = 'w-1/2 py-16 px-12 '>
<h1 className='text-5xl  font-semibold'> Bienvenu!! </h1>
    <p className='font-medium  text-lg text-gray-950 mt-4'> Entrez vos informations!</p>


    <div className='mt-9 '>
        <div>
            <label className='text-lg font-medium'>
            Email  <FaEnvelope  className='ml-2' />
            </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-4 bg-transparent'
            
            placeholder=  'Entrez votre email '
            type = 'email'
            />
        </div>



        <div>
            <label className='text-lg font-medium'>
           Password  <RiLockPasswordFill />
           </label>
            <input 
            className='w-full border-2  border-gray-400 rounded-xl p-4 mt-1 bg-transparent'
            placeholder=' Entrez votre mot de passe '
            type='password'
            />
        </div>

        <button className='font-medium underline mt-5 text-base text-violet-400'>Mot de passe oublié?</button>


<div className='mt-5 flex flex-col gap-y-4'>
<button className= ' active:scale-95 active:duration-75 transition-all hover:scale-{1.01} ease-in-out py-4 rounded-xl  bg-violet-500 text-white  text-lg  font-bold '> Connexion </button>
</div>

<p> Vous n'avez pas de compte ? <button className='font-medium underline mt-5 text-base text-violet-400'> Inscrire!</button> 
</p>


    </div  >
    </div >





<div className='w-1/2 p-5 rounded-2xl' >
  <img src = {img} alt='' />
</div>



  </div>  
</div>


)

}