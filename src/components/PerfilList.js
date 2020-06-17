import React from 'react';
import PerfilForm from './PerfilForm';

const PerfilList = ({ perfils }) => {
    return (
        <div>
            <table class="table table-hover">
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
                            <td>{perfils[id].done}</td>
                            <td>U</td>
                            <td>D</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target={<PerfilForm />}>New
                            
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default PerfilList
