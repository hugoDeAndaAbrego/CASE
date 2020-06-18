import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

// const MenuForm = () => {
//     const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/perfil.json';

//     const [form, setForm] = useState({
//         nombre: '',
//         done: false
//     });


//     const handleForm = (e) => {
//         setForm({
//             ...form,
//             [e.target.id]: e.target.value
//         });
//     };




// const CreatePerfil = () => {
//         if (form.nombre !== '') {
//             axios.post(ENDPOINT, form)
//                 .then((result) => history.push('/'))
//                 .catch((error) => ('Ocurrio un error al guardar: ' + error));
//         } else {
//             alert('Ingresar el nombre');
//         }
//     }
// }
// ---------------------------------------------------------------------------------------------


const MenuForm = () => {


    const [nombre, setNombre] = useState('');
    const [state, setEstado] = useState('');
    const [modulo, setModulo] = useState('');
    const ENPOINT = 'https://dbcase-cc785.firebaseio.com/menu.json';
    const history = useHistory();

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleEstado = (e) => {
        setEstado(e.target.value);
    }
    const handleModulo = (e) => {
        setModulo(e.target.value);
    }

    const CreatePerfil = () => {
        const body = {
            nombre: nombre,
            state: state,
            modulo: modulo
        };

        if (nombre != '' && state != '' && modulo != '') {
            axios.post(ENPOINT, body)
                .then((res) => {
                    const id = res.data.name;
                    const nuevEnd = 'https://dbcase-cc785.firebaseio.com/menu/' + id + '.json';
                    axios.patch(ENPOINT, {
                        [res.data.name]: {
                            url: nuevEnd,
                            nombre: nombre,
                            state: state,
                            modulo: modulo
                        }
                    }).then(() => console.log('Usuario Creado'))
                    history.push('/');
                })
                .catch((error) => alert('error' + error))
        } else {
            alert('Llena todos los campos')
        }

    }

    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input onChange={handleNombre} type="text" className="form-control" id="nombre" placeholder="Nombre" />
            </div>
            <div className="form-group">
                <label htmlFor="state">Estado</label>
                <input onChange={handleEstado} type="text" className="form-control" id="state"
                    placeholder="Estado" />
            </div>
            <div className="form-group">
                <label htmlFor="modulo">Módulo</label>
                <input onChange={handleModulo} type="text" className="form-control" id="modulo"
                    placeholder="Módulo" />
            </div>
            <button className="btn btn-primary" onClick={() => CreatePerfil()}>Submit</button>
            <a type="button" className="btn btn-success" href="/">Regresar a lista</a>
        </div>
    );
}

export default MenuForm;
