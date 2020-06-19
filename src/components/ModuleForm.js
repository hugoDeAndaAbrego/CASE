import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const ModulContainer = () => {

    const ENDPOINT = 'https://windy-celerity-276601.firebaseio.com/module.json';
    const [name, setName] = useState('');
    const [typemod, setTipo] = useState('');
    const history = useHistory();

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleType = (event) => {
        setTipo(event.target.value);
    }


    const createModule = () => {
        const body = {
            name: name,
            typeMod: typemod,
            status: false,
        }
        axios.post(ENDPOINT, body)
            .then(() => history.push('/'))
            .catch((error) => alert('Ocurrio un error  ' + error));
    }




    return (
        <div>
            <div>
                <div className="form-group">
                    <label htmlFor="title">Nombre del Usuario</label>
                    <input onChange={handleName} type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Tipo de Modulo</label>
                    <input onChange={handleType} type="text" className="form-control" id="typemod" />
                </div>

                <button className="btn btn-primary" onClick={() => createModule()} >Crear Modulo</button>
            </div>
        </div>
    )
}

export default ModulContainer
