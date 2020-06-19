import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const MenuList = ({ cuentas }) => {
    const history = useHistory();
    const BorrarPerfil = (url) => {
            axios.delete(url)
            .then(() => window.location.reload(false))
            .catch(() => console.log('error'))
    }
    return (
        <div>
            <table class="table table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">Modulo</th>
                        <th scope="col">Url</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(cuentas).map((id, indice) =>
                        <tr key={cuentas[id].nombre}>
                            <th scope="row">{indice + 1}</th>
                            <td>{cuentas[id].nombre}</td>
                            <td>{cuentas[id].state}</td>
                            <td>{cuentas[id].modulo}</td>
                            <td>{cuentas[id].url}</td>
                            <td><button type="button" className="btn btn-info">Editar</button></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => BorrarPerfil(cuentas[id].url)}>Borrar</button></td>
                        </tr>
                    )}

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">
                            <a type="button" className="btn btn-success" href="/nuevoMenu">Nuevo Usuario</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )
}

export default MenuList;
