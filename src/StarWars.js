import { useState } from 'react'
import CharInfo from './CharInfo'
import CharList from './CharList'
import './StarWars.css'

function StarWars(props) {

    const [charId, setCharId] = useState('')
    const [info, setInfo] = useState(null)

    const [savedChar, setSavedChar] = useState([])

    async function fetchInfo() {
        const path = `https://swapi.dev/api/people/${charId}/`
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)

        const charName = json.name
        const gender = json.gender
        const height = json.height
        const mass = json.mass
        const eyeColor = json.eye_color
        const homeworld = json.homeworld
        const films = json.films

        setInfo({
            charName,
            gender,
            height,
            mass,
            eyeColor,
            homeworld,
            films
        })
    }

    async function addChar(char) {
        if (char.homeworld) {
            const path = char.homeworld
            const res = await fetch(path)
            // This is all the homeworld info
            const json = await res.json()
            char.homeworldInfo = json
        }

        if (char.films) {
            char.filmInfo = []
            for (let i in char.films) {
                let filmUrl = char.films[i]
                const path = filmUrl
                const res = await fetch(path)

                const json = await res.json()
                char.filmInfo.push(json)
            }

        }

        const add = savedChar.concat(char);
        setSavedChar(add)
    }

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    fetchInfo()
                }}
            >
                <div>
                    <input
                        className='userInput'
                        placeholder="Enter Character ID"
                        value={charId}
                        onChange={e => setCharId(e.target.value)}
                    />
                    <button className='submitButton' type="submit">Submit</button>
                </div>
            </form>
            <h1 className='searchResults'>Search Results</h1>
            {info && <CharInfo {...info} />}
            {info && <button className='saveButton' onClick={() => addChar(info)}>Save</button>}
            <h1>Saved Characters</h1>
            <CharList savedChar={savedChar} />
        </div>
    )
}

export default StarWars