import React,{useState} from 'react';
import axios from 'axios';
import Modulo from '../containers/Modulo';

export const TableModulo = ({modules, getModulo}) => {
    
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
                    {Object.keys(modules).map((id, index)=>
                    <tr key={id}>
                        <td>{index+1}</td>
                        <td>{modules[id].name}</td>
                        <td>{modules[id].typeMod}</td>
                        <td><input type="checkbox" aria-label="Checkbox" checked={modules[id].status} readOnly/></td>
                        <td><button type="button" className="btn btn-secondary" onClick={()=> deleteModule(id)}>Borrar</button></td>
                        <td>
                            {modules[id].status
                            ? <button type="button" className="btn btn-success" onClick={()=> updateModule({[id]:{id:modules[id].id, name:modules[id].name, typeMod:modules[id].typeMod, status: false}})}>Editar</button>
                            : <button type="button" className="btn btn-success" onClick={()=> updateModule({[id]:{id:modules[id].id, name:modules[id].name, typeMod:modules[id].typeMod, status: true}})}>Editar</button>}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
      
        </div>
        
    )
}

export default TableModulo