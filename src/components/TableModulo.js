import React,{useState} from 'react';
import axios from 'axios';
import Modulo from '../containers/Modulo';

export const TableModulo = ({module, getModulo}) => {
    
    const ENDPOINT = 'https://windy-celerity-276601.firebaseio.com/module/';
    const PATCH = 'https://windy-celerity-276601.firebaseio.com/module.json';
    const [module, setModulo] = useState(false);


     const deleteModule = (id) => {
        axios.delete(`${ENDPOINT}${id}.json`)
             .then(() => getModulo())
             .catch((error) => alert('Ocurrio un error al eliminar  ' + error));

     }

    const updateModule = (status) =>{

         axios.patch(PATCH,status)
             .then(()=> getModulo())
             .catch((error)=> alert ('Ocurrio un error al actualizar  ' + error));

    }

    

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">Tipo de Modulo</th>
                        <th scope="col">Estado</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(module).map((id)=>
                    <tr key={module[id].id}>
                        <td>{module[id].id}</td>
                        <td>{module[id].name}</td>
                        <td>{module[id].typeMod}</td>
                        <td>{module[id].status}</td>
                        <td><button type="button" className="btn btn-secondary" onClick={()=> deleteModule(module.id)}>Borrar</button></td>
                        <td>
                            {module[id].status
                            ? <button type="button" className="btn btn-success" onClick={()=> updateModule({[id]:{id:module[id].id, name:module[id].name, typeMod:module[id].typeMod, status: false}})}>Editar</button>
                            : <button type="button" className="btn btn-success" onClick={()=> updateModule({[id]:{id:module[id].id, name:module[id].name, typeMod:module[id].typeMod, status: true}})}>Editar</button>}
                        </td>
                    </tr>
                    )};
                </tbody>
            </table>
        </div>
    )
}

export default TableModulo