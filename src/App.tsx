import {useState} from "react";
import './App.css'
import type {ICard} from "./types";
import CardDeck from "./lib/CardDeck.ts";
import Card from "./components/Card/Card.tsx";

const deck = new CardDeck();

const App = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    const dealCards = (): void => {

        if(deck.cardDeck.length === 0) {
            deck.initializeDeck();
            setCards([]);
            return;
        }

        const fiveCards = deck.getCards(5);
        setCards(fiveCards);
    }

    return (
        <div>
            <div className="playingCards faceImages">
                {cards.length > 0 && (
                    cards.map((card, index)=> (
                        <Card
                            key={index}
                            rank={card.rank}
                            suit={card.suit}
                        />
                    ))
                )}
            </div>

            <button type='button' onClick={dealCards}>Раздать карты</button>
        </div>
    )
};

export default App
