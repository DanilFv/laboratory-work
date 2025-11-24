import Card from './Card.ts';

class CardDeck {
    public cardDeck: Card[];

    constructor() {
        this.cardDeck = [];
        this.initializeDeck();
    }

    public initializeDeck(): void {
        this.cardDeck = [];

        const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
        const ranksArray: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        suits.forEach((suit) => {
           ranksArray.forEach((rank) => {
               const card = new Card(rank, suit);
               this.cardDeck.push(card);
           })
        });
    }

    public getCard(): Card {
        if (this.cardDeck.length === 0) {
            throw new Error('Колода пуста!');
        }

        const randomIndex = Math.floor(Math.random() * this.cardDeck.length);

        const removedCards: Card[] = this.cardDeck.splice(randomIndex, 1);
        return removedCards[0];
    }

    public getCards(howMany: number): Card[] {
        const pulledCards: Card[] = [];

        const cardsToPull: number = Math.min(howMany, this.cardDeck.length);

        for (let i = 0; i < cardsToPull; i++) {
            pulledCards.push(this.getCard());
        }

        return pulledCards;
    }
}

export default CardDeck;