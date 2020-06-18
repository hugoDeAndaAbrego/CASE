import React from 'react'

const Menu = (props) => {
    return (

        <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button className="btn btn-link" onClick={() => { 
                            props.setMain(true)
                            props.setProfile(false)
                        }
                    }>
                        Dashboard
                    </button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-link" onClick={() => { 
                            props.setMain(false)
                            props.setProfile(true)
                        }
                    }>
                        Perfil
                    </button>
                </li>                    
            </ul>
        </div>

    )
}

export default Menu
