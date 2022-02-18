import {useEffect, useState} from "react";
import axios from "axios";
import logo from "../components/Logo.js";

const Forms = () => {
    const [users, setUsers] = useState([]);
    const api_url = 'http://localhost:4000/users';
    const getUsers = () => {
        axios.get(api_url)
            .then(res => setUsers(res.data))
    }

    const createUser = (user) => {
        axios.post(api_url, user)
            .then(res => console.log(res))
            .catch(err => alert('Nope !'))
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1>Formulaires</h1>
            <main>
                <h2>Users</h2>
                <div className="grid">
                    {
                        users.map(u => <div key={u.id} className="card">{u.name}</div> )
                    }
                </div>
                <fieldset>
                    <legend>Nouvel.le utilisateur.trice</legend>
                    <form>
                        <p>
                            <label htmlFor="name">Nom</label>
                            <input id="name"/>
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input id="email"/>
                        </p>
                        <p>
                            <button type="submit">Créer</button>
                        </p>
                    </form>
                </fieldset>
            </main>
        </>
    )
}
export default Forms;
