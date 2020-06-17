import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const PerfilForm = () => {
    const ENDPOINT = 'https://to-do-devf-1c224.firebaseio.com/perfil.json';

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
                .then((result) => history.push('/'))
                .catch((error) => ('Ocurrio un error al guardar: ' + error));
        } else {
            alert('Ingresar el nombre');
        }
    }



    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
      </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PerfilForm
