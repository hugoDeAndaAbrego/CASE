import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';

const UserContainer = () => {
    const [users, setUsers] = useState({});
    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/usuario.json';

    const getUser = () => {
        axios.get(ENDPOINT)
            .then((body) => setUsers(body.data))
            .catch((error) => alert(error));
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="bg-ligth">
            <div className="container">
                <div className="card">
                    <h6>Lista Usuario</h6>
                    <UserList users={users} getUser={getUser} />
                </div>
            </div>
        </div>
    )
}

export default UserContainer
