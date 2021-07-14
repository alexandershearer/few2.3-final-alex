function CharInfo(props) {
    const { charName, height, mass, eyeColor, gender } = props
    return (
        <div>
            <h2>{charName}</h2>
            <h4>Gender: {gender}</h4>
            <h4>Height: {height}</h4>
            <h4>Mass: {mass}</h4>
            <h4>Eye Color: {eyeColor}</h4>
        </div>
    )
}

export default CharInfo