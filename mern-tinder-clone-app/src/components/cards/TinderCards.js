import { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import axios from '../../config/axios'
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([])

    useEffect(() => {

        async function fetchData() {
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)
        }
        fetchData()
    }, [])

    console.log(people)

    const swiped = (direction, nameToRemove) => {
        console.log("removed ", nameToRemove)
    }

    const outOfFrame = (name) => {
        console.log(name, "is out of frame")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={dir => swiped(dir, person.name)}
                        onCardsLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default TinderCards
