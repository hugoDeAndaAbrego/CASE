import React, { useState } from 'react'
import Menu from './Menu'
import Top from './Top'
import Main from './Main'
import Perfil from '../../containers/Perfil'

const Master = () => {

    const [main, setMain] = useState(false)
    const [profile, setProfile] = useState(true)
    const [user, setUser] = useState(false);
    const [module, setModule] = useState(false);
    const [system, setSystem] = useState(false);

    return (
        <div>
            <Top />

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <Menu 
                            setMain={setMain} 
                            setProfile={setProfile} />
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">                        
                        { main ? <Main /> : null }
                        { profile ? <Perfil /> : null }
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Master
