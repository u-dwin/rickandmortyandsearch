import {ChangeEvent} from "react";

type SearchCharacterProps = {
    searchText: (searchText: string) => void,
}

export default function SearchCharacter(props: SearchCharacterProps) {

    function handleOnChangeSearchText(event: ChangeEvent<HTMLInputElement>) {
        props.searchText(event.target.value);
    }

    return (
        <input onChange = {handleOnChangeSearchText}
        />
    )
}