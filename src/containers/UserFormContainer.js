import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';

const UserFormContainer = () => {
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
                    <UserForm />
                </div>
            </div>
        </div>
    )
}

export default UserFormContainer
