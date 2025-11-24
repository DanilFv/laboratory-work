import Card from './Card.ts';


class PokerHand {
    public hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    public getOutcome(): string {

        const firstSuit = this.hand[0].suit;
        const flush: boolean = this.hand.every(cardSuit => cardSuit.suit === firstSuit);

        if (flush) return 'Флэш';

        const counts: {[key: string]: number} = {};

        for (const card of this.hand) {
            const currentRank: string = card.rank;

            if (counts[currentRank]) {
                counts[currentRank] = counts[currentRank] + 1;
            } else {
                counts[currentRank] = 1;
            }
        }

        let pairCount: number = 0;
        let Three: boolean = false;

        for (const count of Object.values(counts)) {
            if (count === 3){
                Three = true;
            } else if  (count === 2){
                pairCount++;
            }
        }

        if (Three) return 'Тройка';

        if (pairCount === 2) return 'Две пары';

        if (pairCount === 1) return 'Одна пара';

        return 'Старшая карта';

    }
}

export default PokerHand;