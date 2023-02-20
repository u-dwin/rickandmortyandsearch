import React, {useEffect, useState} from 'react';
import './App.css';
import {Character} from "./model/Character";
import Characters from "./Characters.json"
import SearchCharacter from "./component/SearchCharacters";
import CharacterGallery from "./component/CharacterGallery"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Route, Routes, useParams} from "react-router-dom";
import Homepage from "./component/Homepage";
import Header from "./component/Header";
import CharacterDetails from "./component/CharacterDetails";
import {useNavigate} from "react-router-dom";

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
        <Header/>
        <button onClick={onNextClick}> Next2</button>
        <button disabled={page<2} onClick={()=> {setPage(page-1)}}>Previous</button>
        <button onClick={()=> {setPage(page+1)}}>Next</button>
        <Routes>
            <Route path={"/"} element={<Homepage/>}/>
            <Route path={"/characters/:charactersPage"} element={<CharacterGallery characters={characters}/>}/>
            <Route path={"/characters/page/"+page} element={<CharacterGallery characters={characters}/>}/>
            <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
            <Route path={"/characters/:characterId"} element={<CharacterDetails characters={characters}/>}></Route>
        </Routes>
    </div>
  )
}

export default App;

