import type {ISuits} from "../../types";

interface Props {
    rank: number | string;
    suit: keyof ISuits;
}


const Card: React.FC<Props> = ({rank, suit}) => {

    const  suitsObject: ISuits = {
        diams: '♦️',
        hearts: '♥️',
        clubs: '♣️',
        spades: '♠️',
    };

    const rankClass: string = String(rank).toLowerCase();

    return (
        <span className={`card rank-${rankClass} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitsObject[suit]}</span>
        </span>
    );
};

export default Card;