
import './App.css'
import type {ISuits} from "./types";
import Card from "./components/Card/Card.tsx";


const ranksArray: (number | string)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  const  suitsObject: ISuits = {
        diams: '♦️',
        hearts: '♥️',
        clubs: '♣️',
        spades: '♠️',
    };

const App = () => {
    
    return (
        <div className="playingCards faceImages">

            {Object.keys(suitsObject).map((suitKey) => (
                ranksArray.map((rank) => (
                    <Card
                        key={`${suitKey}-${rank}`}
                        rank={rank}
                        suit={suitKey as keyof  ISuits}
                    />
                ))
            ))}
        </div>
    )
};





export default App
