import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard"
import "./CharacterGallery.css"
import {useState} from "react";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps){

    const characterCard = props.characters.map((character) => {
        return (
            <div>
            <CharacterCard character={character} key={character.id + " " + character.name}/>
            </div>
        )
    })

    return <div className="characterGallery">
        {characterCard}
    </div>
}