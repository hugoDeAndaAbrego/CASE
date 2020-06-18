import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PerfilList from '../components/PerfilList';

const PerfilContainer = () => {
    const [perfils, setPerfils] = useState({});
    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/perfil.json';

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
                    <PerfilList perfils={perfils} getPerfil={getPerfil} />
                </div>
            </div>
        </div>
    )
}

export default PerfilContainer
