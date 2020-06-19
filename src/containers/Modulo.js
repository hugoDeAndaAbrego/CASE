import React, { useEffect, useState } from 'react';
import TableModulo from '../components/TableModulo';
import axios from 'axios';
import {Link} from 'react-router-dom';



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
                <h1 className="text-center">Tabla de Modulos</h1>
                <TableModulo modules={module} getModulo={getModulo} />
            </div>
            <div className=''>
                <Link to="/create-module" type="button" class="btn btn-primary">Crear Modulo</Link>
            </div>
        </div>
    </div>
    )
}
export default Modulo
