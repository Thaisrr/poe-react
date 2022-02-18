import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const UserParam = () => {
    const [user, setUser] = useState({});
    const params = useParams(); // Récupére un objet avec les paramétres
    const id = params.id;
    // const {id} = useParams(); -> version raccourcis avec le décomposition

    const getUser = async () => {
        const {data} = await axios.get('http://localhost:4000/users/' + id)
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, [])


    return (
        <>
            {(user)?
                <div>
                    <h1>Profil de {user.name}</h1>
                    <p>Email : {user.email}</p>
                </div>
                :
                <p>Nope, rien à voir ici !</p>
            }
        </>
    )
}
export default UserParam;
