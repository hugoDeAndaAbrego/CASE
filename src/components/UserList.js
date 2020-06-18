import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import PerfilForm from './PerfilForm';

const UserList = ({ users, getUser }) => {

    const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/usuario/';
    const PATCH = 'https://dbcase-cc785.firebaseio.com/usuario.json';

    const deleteUser = (id) => {
        axios.delete(`${ENDPOINT}${id}.json`)
            .then(() => getUser())/**Vuelvo a mi conponente padre a ejectuar mi getTask que paso como props */
            .catch((error) => alert('Error al eliminar' + error));
    }

    const updateUser = (status) => {
        console.log(status);

        axios.patch(PATCH, status)
            .then(() => getUser())
            .catch((error) => alert('Ocurrio un error al actualizar ' + error));
    }

    const [active, setActive] = useState(false);

    return (
        <div>
            <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sistema</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Clave</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(users).map((id, indice) =>
                        <tr key={users[id].usuario}>
                            <th scope="row">{indice + 1}</th>
                            <td>{users[id].sistema}</td>
                            <td>{users[id].usuario}</td>
                            <td>{users[id].clave}</td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input" checked={users[id].estado} readOnly/></td>
                            <td>
                                {users[id].estado
                                    ? <button type="button" className="btn btn-success" onClick={() => updateUser({ [id]: { sistema: users[id].sistema,  usuario: users[id].usuario,  clave: users[id].clave, estado: false } })}> Edit</button>
                                    : <button type="button" className="btn btn-secondary" onClick={() => updateUser({ [id]: { sistema: users[id].sistema,  usuario: users[id].usuario,  clave: users[id].clave, estado: true } })} >Edit</button>}
                            </td>
                            <td><button type="button" className="btn btn-danger" onClick={() => deleteUser(id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={7} >
                            <div className=" mx-auto">
                                <Link to="/userForm" type="button" className="btn btn-success">New</Link>
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

export default UserList;
