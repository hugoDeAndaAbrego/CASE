import React from 'react'
import ModuleForm from '../components/ModuleForm';

const ModulContainer = () => {
    return (
        <div>
            <div className='container'>
                <div className='card'>
                    <h1>Crear Modulo</h1>
                    <ModuleForm />
                </div>
            </div>
        </div>
    )
}

export default ModulContainer
