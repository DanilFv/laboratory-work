import {useState} from "react";
import './App.css';
import type {ICard} from "./types";
import CardDeck from "./lib/CardDeck.ts";
import Card from "./components/Card/Card.tsx";
import PokerHand from "./lib/PokerHand.ts";

const deck = new CardDeck();

const App = () => {
    const [deckCount, setDeckCount] = useState<string>('');
    const [cards, setCards] = useState<ICard[]>([]);
    const [outcome, setOutcome] = useState<string>('');

    const dealCards = (): void => {

        if(deck.cardDeck.length < 5) {
            deck.initializeDeck();
            setCards([]);
            setOutcome('');
            setDeckCount('');
            return;
        }

        const cardCount: string = String(deck.cardDeck.length);
        setDeckCount(cardCount);

        const fiveCards = deck.getCards(5);
        setCards(fiveCards);

        const hand = new PokerHand(fiveCards);

        const result = hand.getOutcome();
        setOutcome(result);
    }

    return (
        <div>
            <div className='hand'>{outcome}</div>
            <div className='hand'>{deckCount}</div>
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
