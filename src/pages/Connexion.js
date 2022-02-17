import {useState} from "react";
import {Btn} from "../components/Buttons.js";

const Connexion = () => {
   const [isLogged, updateLog] = useState(false);


    function getJSX() {
        if(!isLogged) return <p>Vous n'êtes pas connecté.e</p>
        else return <p>Bienvenue  ! </p>
    }

    function getMsg() {
        return <p>Coucou</p>
    }

    function login() {
        /*if(isLogged) updateLog(false)
        else updateLog(true)*/
        updateLog( !isLogged );
    }
    return (
        <>
              <h1>Login</h1>
            <button onClick={login}>
                {(isLogged)? 'Déconnexion' : 'Connexion'}
            </button>

            <Btn action={login} txt={(isLogged)? 'Déconnexion' : 'Connexion'}/>

            {
                (isLogged)?
                    <p>Bienvenue</p> :
                    <p>Vous n'êtes pas connecté.e</p>
            }

        </>
    );

}
export default Connexion;
