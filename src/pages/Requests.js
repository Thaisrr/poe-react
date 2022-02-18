import axios from "axios";
import {useEffect, useState} from "react";

const Requests = () => {
    const joke_api = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";
    const [joke, setJoke] = useState("");
    const [character, setCharacter] = useState({})
    const swapi_people = "https://swapi.dev/api/people/";
    const [id, setId] = useState(1);

    console.log("Coucou de request"); // S'execute 2 fois

    const getJoke = async () => {
       /* axios.get(joke_api)
            .then(res => setJoke(res.data.joke))
        */
        const {data} = await axios.get(joke_api);
        setJoke(data.joke);
    }

    useEffect(() => {
        console.log("Coucou de useEffect")
        getJoke();
    }, []) // [] : aucune valeur à surveiller, ne s'execute qu'une seule fois, au rendu

    const getCharacter = () => {
        /*
        const {data} = await axios.get(swapi_people + id);
        setCharacter(data);
        */
        axios.get(swapi_people + id) //https://swapi.dev/api/people/{id}
            .then(res => setCharacter(res.data))
    }

    useEffect(() => {
        getCharacter()
    }, [id]);


    return (
        <>
            <h1>Les requêtes</h1>
            <main>
                <h2>Présentation</h2>
                <p>Pour commencer, il faut installer axios dans le projet: </p>
                <p><code>npm i axios</code></p>
                <div className="card">{joke}</div>
                <p>Pour faire récupérer 1 fois des données dans une API, au moment du
                chargement du composant, on passe notre requête dans useEffect, et en
                second paramétre de useEffect, on passe un tableau vide [].
                </p>
                <p>Ainsi, on précise à useEffect qu'il n'a aucune valeur à surveiller,
                il ne s'exécutera qu'une seule fois, au chargement.
                </p>

                <h2>Avec filtre dynamique : </h2>

                <p>
                    <button disabled={id <= 1} onClick={() => setId(id - 1)}>Précédent</button>
                    <button onClick={() => setId(id + 1)}>Suivant</button>
                </p>

                <div className="card">
                    <h3>{character.name}</h3>
                    <p>Naissance : {character.birth_year}</p>
                    <p>Taille : {character.height}cm</p>
                    <p>Poids : {character.mass}kg</p>
                </div>
            </main>
        </>
    )
}

export default Requests;
