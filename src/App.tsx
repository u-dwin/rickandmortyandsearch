import React, {useEffect, useState} from 'react';
import './App.css';
import {Character} from "./model/Character";
import Characters from "./Characters.json"
import SearchCharacter from "./component/SearchCharacters";
import CharacterGallery from "./component/CharacterGallery"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function App() {

    const navigate = useNavigate()
    function onNextClick() {
        navigate("/characters/page/" + 1)
    setPage(page+1)
    }

    const [characters,setCharacters] = useState<Character[]>([])
    const [searchText, setSearchText] = useState<string>("")
    const [page, setPage] = useState<number>(1)

        const params = useParams()



        function handleSearchText(searchText: string){
    setSearchText(searchText)
  }

function addPost() {
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

  function getAllCharacters(){
      axios.get("https://rickandmortyapi.com/api/character",{params: {page: page}})
          .then((response) => {
              setCharacters(response.data.results)
          })
          .catch(error => {
                    console.error(error)
      }
      )
  }


  useEffect(() =>{
      getAllCharacters();
  }, [page])


  const filteredCharacters = characters.filter((character) =>
  character
      .name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  ||
      character.status
          .toLowerCase()
          .includes(searchText.toLowerCase()))


  return(
      <div>
          <div>
              <button onClick={getAllCharacters}>Get Characters</button>
          </div>
        Search: <SearchCharacter searchText={handleSearchText}/>
          {
              filteredCharacters.length > 0 ?
                  <CharacterGallery characters={filteredCharacters}/> :
                  <div>
                      <p>No characters found :(</p>
                  </div>
          }
      </div>
  )
}

export default App;

