import React, { useEffect, useState } from 'react';
import PerfilForm from '../components/PerfilForm';

const PerfilFormContainer = () => {
    /*  const [perfils, setPerfils] = useState({});
     const ENDPOINT = 'https://dbcase-cc785.firebaseio.com/perfil.json';
 
     const getPerfil = () => {
         axios.get(ENDPOINT)
             .then((body) => setPerfils(body.data))
             .catch((error) => alert(error));
     }
 
     useEffect(() => {
         getPerfil();
     }, []);
  */
    return (
        <div className="bg-ligth">
            <div className="container">
                <div className="card ">
                    <h3 className="">Insertar perfil</h3>
                    <PerfilForm />
                </div>
            </div>
        </div>
    )
}

export default PerfilFormContainer
