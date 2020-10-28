import { SwipeableDrawer } from '@material-ui/core'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([{
        name: 'Jeff Bezos',
        url: 'https://i.insider.com/5dee61fffd9db2526215e402?width=1800&format=jpeg&auto=webp'
    },
    {
        name: 'Isha Talwar',
        url: 'https://wikifamous.com/wp-content/uploads/2018/01/Isha-Talwar-1.jpg'
    },
    {
        name: 'Sumit Jadiya',
        url: 'https://scontent.fbom26-1.fna.fbcdn.net/v/t1.0-9/94883303_2885308824849935_7029223869831446528_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=HQDFAnq1OZ8AX8UjyWL&_nc_ht=scontent.fbom26-1.fna&oh=46b49ee079be86d46a31b693ceedcbc8&oe=5FBE5553'
    },
    {
        name: 'Disha Patni',
        url: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/15/w1200X800/Disha_Patani.jpg'
    },
    {
        name: 'Elon Musk',
        url: 'https://image.cnbcfm.com/api/v1/image/105773439-1551717349171rtx6p9uc.jpg?v=1551717410'
    },

    ])

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
                            style={{ backgroundImage: "url(" + person.url + ")" }}
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
