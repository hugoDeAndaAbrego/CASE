import React, { useEffect, useState } from 'react'

import axios from 'axios';
import PerfilList from '../components/PerfilList';

const Perfil = () => {
    const [perfils, setPerfils] = useState({});
    const ENDPOINT = 'https://to-do-devf-1c224.firebaseio.com/perfil.json';

    const getPerfil = () => {
        axios.get(ENDPOINT)
            .then((body) => setPerfils(body.data))
            .catch((error) => alert(error));
    }

    useEffect(() => {
        getPerfil();
    }, []);

    return (
        <div className="bg-ligth">
            <div className="container">
                <div className="card">
                    <h6>Lista perfil</h6>
                    <PerfilList perfils={perfils} />
                </div>
            </div>
        </div>
    )
}

export default Perfil
