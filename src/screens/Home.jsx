import React from 'react';
import Logo from '../assets/LogoPokemon.webp';
import { useNavigate } from 'react-router';

export default function Home() {
    const navigation = useNavigate();

    return (
        <div className='containerHome'>
            <header>
                <img className='logoP' src={Logo} alt="Logo Pokemon" />
            </header>
            
            <main>
                <div className='goToList' onClick={()=> navigation(`/cardsScreen/${"Mis cartas"}`)}></div>
                <h1>App de cartas pokemon</h1>
            </main>
        </div>
    )
}