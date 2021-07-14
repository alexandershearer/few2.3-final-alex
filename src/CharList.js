import './CharList.css'

function CharList(props) {
    const { savedChar } = props

    return (
        <div className="cardList">
            {savedChar.map((obj, index) =>
                <div key={index} className="card">
                    {console.log(obj)}
                    <h2>{obj.charName}</h2>
                    <h4>Gender: {obj.gender}</h4>
                    <h4>Mass: {obj.mass}</h4>
                    <h4>Height: {obj.height}</h4>
                    <h4>Eye Color: {obj.eyeColor}</h4>
                    <h2>Homeworld</h2>
                    <h3>{obj.homeworldInfo.name}</h3>
                    <h4>Climate: {obj.homeworldInfo.climate}</h4>
                    <h4>Planet Diameter: {obj.homeworldInfo.diameter}</h4>
                    <h4>Population: {obj.homeworldInfo.population}</h4>
                    <h2>Films</h2>
                    {obj.filmInfo.map((film, index) =>
                        <h4 key={index}>{film.title}</h4>
                    )}
                </div>

            )}
        </div>
    )

}

export default CharList