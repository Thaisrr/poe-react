import {useEffect, useState} from "react";

const Effect = () => {
    const [counter, setCounter] = useState(0);
    const [isLogged, setLog] = useState(false);
    let toto = "toto";

    const increment = () => {
        setCounter(counter + 1);
        toto = "Not toto";
        console.log('in increment : ', toto);
    }

    // Agit à chaque modification
    useEffect(() => {
        // Utile si vous voulez agir de général
        console.log("(First) Counter a été incrémenté, new value : ", counter);
    });

    // On peut passer un deuxième paramétre à la fonction useEffect :
    // Un tableau contenant les données à surveiller
    // useEffect ne se lancera que lorsque ce sont ces valeurs qui sont modifiées
    useEffect(() => {
        console.warn("(second) Counter a été incrémenté : ", counter);
    }, [counter]);

    // Toutes le valeurs utilisées par useEffect doivent être référencées dans useEffect


    // Pour toute souscription à des flux, connections Observables, des websockets,
    // des timers... : il faut "nettoyer" : désouscrire, couper la connection
    useEffect(() => {
        let seconds = 0;
        console.log("Component a été rendu depuis : ");
        let intervale = setInterval(() => {
            seconds++;
            console.log(`${seconds} seconds`)
        }, 1000)
        return () => {
            // couper tous les flux
            clearInterval(intervale);
        }
    });








    return (
        <>
            <h1>Effect</h1>
            <main>
                <article>
                    <h2>Présentation : useEffect</h2>
                    <p>Compteur : {counter}</p>
                    <p>
                        <button onClick={increment}>++</button>
                        <button onClick={() => setLog(!isLogged)}>
                            {(isLogged)? 'Logout' : 'Login'}
                        </button>
                    </p>
                    <p>useEffect permet d'agir lorsque le DOM est mis à jour / rendu.</p>
                    <p>Il agit à la création du composant, au 1er rendu, et à chacunes de modifications.</p>
                    <p>On se sert de useEffect pour : </p>
                    <ul>
                        <li>Faire des requêtes à la création du composant</li>
                        <li>Agir à la modification d'une valeur précise</li>
                        <li>Agir à chaque modification</li>
                        <li>Pour couper les connexions à des flux, des websockets, des observables, ...</li>
                    </ul>

                </article>

            </main>
        </>
    )
}
export default Effect;
