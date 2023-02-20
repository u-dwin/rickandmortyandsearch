import {Character} from "../model/Character";
import "./CharacterCard.css"
import {useNavigate} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps){
    const navigate = useNavigate()
    function onDetailsClick(){
        navigate("/characters/" + props.character.id)
    }

    return (
        <div className="characterCard">
            <h2>{props.character.name}</h2>
            <img className="image" src={props.character.image}/>
            <p>{props.character.status}</p>
            <p>{props.character.origin.name}</p>
            <button onClick={onDetailsClick}> Click me for details</button>
        </div>
    );
}