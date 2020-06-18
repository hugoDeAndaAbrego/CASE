import React, { useEffect, useState } from 'react';
import TableModulo from '../components/TableModulo';
import axios from 'axios';



const Modulo = () => {

    const [module, setModulo] = useState([]);
    const ENDPOINT = 'https://windy-celerity-276601.firebaseio.com/module.json';


    const getModulo = () => {
        axios.get(ENDPOINT)
            .then((body) => setModulo(body.data))
            .catch((error) => alert('No puedo cargar los modulos'));

    }

    useEffect(() => {
        getModulo()
    }, []);




    return (
        <div className="bg-ligth">
        <div className="container">
            <div className="card">
                <h6>Tabla de Modulos</h6>
                <TableModulo module={module} getModulo={getModulo} />
            </div>
        </div>
    </div>



    )
}
export default Modulo
