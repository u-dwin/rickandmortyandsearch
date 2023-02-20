import {Character} from "../model/Character";
import {useParams} from "react-router-dom";

type CharacterDetailsProps = {
    characters: Character[]
}

export default function CharacterDetails(props: CharacterDetailsProps){
    const params = useParams()
    const id: number | undefined = Number(params.characterId)

    const character:Character | undefined = props.characters.find((character)=>character.id===id);

    console.log(params)
    return (
        <div>
            <h2>{character?.name}</h2>
            <img className="image" src={character&&character.image}/>
            <p>{character&&character.status}</p>
            <p>{character&&character.origin.name}</p>
            {<p>{character&&character.gender}</p>}
            {<p>{character&&character.species}</p>}
        </div>
    );
}