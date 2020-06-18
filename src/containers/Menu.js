import React, { useEffect, useState } from 'react'

import axios from 'axios';
import MenuList from '../components/MenuList';

const Menu = () => {
    const [cuentas, setCuentas] = useState({});
    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/menu.json';

    const getPerfil = () => {
        axios.get(ENDPOINT)
            .then((body) => setCuentas(body.data))
            .catch((error) => alert(error));
    }

    useEffect(() => {
        getPerfil();
    }, []);

    return (
        <div className="bg-ligth">
            <div className="container">
                <div className="card">
                    <h6>Menú</h6>
                    <MenuList cuentas={cuentas} />
                </div>
            </div>
        </div>
    )
}

export default Menu;
