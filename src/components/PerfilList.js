import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import PerfilForm from './PerfilForm';

const PerfilList = ({ perfils, getPerfil }) => {

    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/perfil/';
    const PATCH = 'https://dbcase-cc785.firebaseio.com/perfil.json';

    const deletePerfil = (id) => {
        axios.delete(`${ENDPOINT}${id}.json`)
            .then(() => getPerfil())/**Vuelvo a mi conponente padre a ejectuar mi getTask que paso como props */
            .catch((error) => alert('Error al eliminar' + error));
    }

    const updatePerfil = (status) => {
        console.log(status);

        axios.patch(PATCH, status)
            .then(() => getPerfil())
            .catch((error) => alert('Ocurrio un error al actualizar ' + error));
    }

    const [active, setActive] = useState(false);

    return (
        <div>
            <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(perfils).map((id, indice) =>
                        <tr key={perfils[id].nombre}>
                            <th scope="row">{indice + 1}</th>
                            <td>{perfils[id].nombre}</td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input" checked={perfils[id].done} readOnly/></td>
                            <td>
                                {perfils[id].done
                                    ? <button type="button" className="btn btn-success" onClick={() => updatePerfil({ [id]: { nombre: perfils[id].nombre, done: false } })}> Edit</button>
                                    : <button type="button" className="btn btn-secondary" onClick={() => updatePerfil({ [id]: { nombre: perfils[id].nombre, done: true } })} >Edit</button>}
                            </td>
                            <td><button type="button" className="btn btn-danger" onClick={() => deletePerfil(id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} >
                            <div className=" mx-auto">
                                <Link to="/perfilForm" type="button" className="btn btn-success">New</Link>
                                {/*  <button type="button" className="btn btn-success" onClick={() => setActive(!active)}>New
                                {active ? <PerfilForm /> : null}
                            </button> */}
                            </div>
                        </td>

                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default PerfilList;
