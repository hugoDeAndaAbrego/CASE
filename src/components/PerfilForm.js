import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const PerfilForm = () => {
    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/perfil.json';

    const [form, setForm] = useState({
        nombre: '',
        done: false
    });

    const history = useHistory();

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const creatPerfil = () => {
        if (form.nombre !== '') {
            axios.post(ENDPOINT, form)
                .then((result) => history.push('/perfil'))
                .catch((error) => ('Ocurrio un error al guardar: ' + error));
        } else {
            alert('Ingresar el nombre');
        }
    }

    return (
        <div className="container bg-ligth">
            <div className="form-group">

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Nombre:</span>
                    </div>
                    <input type="text" onChange={handleForm} className="form-control" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="mx-auto mb-2">
                <button type="submit" onClick={() => creatPerfil()} className="btn btn-primary mr-2">Save</button>
                <Link to="/perfil" type="button" className="btn btn-success">Cancel</Link>
            </div>

        </div>
    )
}

export default PerfilForm
