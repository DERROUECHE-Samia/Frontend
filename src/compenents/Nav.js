import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/**
 * Composant de barre de navigation.
 * @component
 */


export default function Nav() {
   const navigate = useNavigate();

   let Links =[ 
      {name:"HOME", link:"#section1"},
      {name:"ABOUT", link:"#section4"},
      {name:"SERVICES", link:"#section2"},
      {name:"CONTACT", link:"#section5"},
   ];
   let [open, setOpen] = useState(false);
   return(
      <div className='shadow-md w-full fixed top-0 left-0' >
         <div className='md:flex items-center   justify-between bg-white py-4 md:px-10 px-7' >
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <ion-icon name="book"></ion-icon>
          </span>
          RTcleByte
          </div>

          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100 ': 'top-[-490px]' } md:opacity-100 opacity-0 `}>
            {
            Links.map((link)=>(
                 <li key ={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'> {link.name}</a>
               </li>
            ))
            }
            <Button className='bg-095da'>
             <Link to="/login">
              Connexion
             </Link>
            </Button>


          <Button className='bg-095da' >
          <Link to="/signin">
            Commencez l'expéerience 
            </Link>
          </Button>
          </ul>
          </div>
          </div>
   )
}