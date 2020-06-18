import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const UserForm = () => {
    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/usuario.json';

    const [form, setForm] = useState({
        sistema: '',
        usuario: '',
        clave: '',
        estado: false
    });

    const history = useHistory();

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const createUser = () => {
        if (form.usuario !== ''&& form.clave) {
            axios.post(ENDPOINT, form)
                .then((result) => history.push('/user'))
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
                        <span className="input-group-text" id="basic-addon1">Sistema:</span>
                    </div>
                    <input type="text" id="sistema" onChange={handleForm} className="form-control" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Usuario:</span>
                    </div>
                    <input type="text" id="usuario" onChange={handleForm} className="form-control" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Clave k:</span>
                    </div>
                    <input type="text" id="clave" onChange={handleForm} className="form-control" aria-describedby="basic-addon1" />
                </div>
                
            </div>
            <div className="mx-auto mb-2">
                <button type="submit" onClick={() => createUser()} className="btn btn-primary mr-2">Save</button>
                <Link to="/user" type="button" className="btn btn-success">Cancel</Link>
            </div>

        </div>
    )
}

export default UserForm
