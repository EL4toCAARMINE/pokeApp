import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CardComponent from '../components/CardComponent';

const pokemonCards = [
    {
        url: "https://images.pokemontcg.io/base1/4.png",
        id: 1
    },
    {
        url: "https://images.pokemontcg.io/base1/15.png",
        id: 2
    },
    {
        url: "https://images.pokemontcg.io/base1/2.png",
        id: 3
    },
    {
        url: "https://images.pokemontcg.io/base1/3.png",
        id: 4
    },
    {
        url: "https://images.pokemontcg.io/base1/5.png",
        id: 5
    },
    {
        url: "https://images.pokemontcg.io/base1/6.png",
        id: 6
    },
    {
        url: "https://images.pokemontcg.io/base1/7.png",
        id: 7
    },
    {
        url: "https://images.pokemontcg.io/base1/8.png",
        id: 8
    },
    {
        url: "https://images.pokemontcg.io/base1/9.png",
        id: 9
    },
    {
        url: "https://images.pokemontcg.io/base1/10.png",
        id: 10
    },
    {
        url: "https://images.pokemontcg.io/base1/11.png",
        id: 11
    },
    {
        url: "https://images.pokemontcg.io/base1/12.png",
        id: 12
    },
    {
        url: "https://images.pokemontcg.io/base1/13.png",
        id: 13
    },
    {
        url: "https://images.pokemontcg.io/base1/14.png",
        id: 14
    },
    {
        url: "https://images.pokemontcg.io/base1/16.png",
        id: 15
    },
    {
        url: "https://images.pokemontcg.io/base1/17.png",
        id: 16
    },
    {
        url: "https://images.pokemontcg.io/base1/18.png",
        id: 17
    },
    {
        url: "https://images.pokemontcg.io/base1/19.png",
        id: 18
    },
    {
        url: "https://images.pokemontcg.io/base1/20.png",
        id: 19
    },
    {
        url: "https://images.pokemontcg.io/base1/21.png",
        id: 20
    }
];

export default function CardsScreen() {
    const { title } = useParams();

    const navigation = useNavigate();

    const [cards, setCards] = useState([]);
    const [idAlert, setIdAlert] = useState(0);

    useEffect(() => {
        const setingCards = () =>  {
            setCards(pokemonCards)
        }

        setingCards();
    }, [])

    useEffect(() => {
      if (idAlert !== 0) {
        alert("La carta seleccionada tiene el id: " + idAlert)
      }
    }, [idAlert])   

    const backToHome = () => {
        navigation("/");
    }

    return (
        <div className='containerCardScreen'>
            <header>
                <h2 className='title'>{title}</h2>
            </header>

            <main>
                {cards.map((card, index)=>{
                    return <CardComponent key={index} url={card.url} id={card.id} setMyAlert={setIdAlert} />
                })}
            </main>

            <footer>
                <div className="backButton" onClick={backToHome}>Volver a inicio</div>
            </footer>
        </div>
    )
}