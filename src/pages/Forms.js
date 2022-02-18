import {useEffect, useState} from "react";
import axios from "axios";

const Forms = () => {
    const [users, setUsers] = useState([]);
    const api_url = 'http://localhost:4000/users';
    const getUsers = () => {
        axios.get(api_url)
            .then(res => setUsers(res.data))
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
            </main>
        </>
    )
}
export default Forms;
