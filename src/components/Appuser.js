import React, { useState } from "react";
import Adduserform from "./Adduserform";
import Usertable from "./Usertable";
import Edituserform from "./Edituserform";

const Appuser = () => 
{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const [editing, setEditing] = useState(false);
    const editRow = (user) => {
        setEditing(true);
    }


    return (
        <div className="container">
            <h1>ContactBook V7.1</h1>
            <p id="emailHelp" className="form-text">Libreta de contactos / Estrategias web Colombia S.A.S /</p>
            <a href="https://twitter.com/idelcoco" target="_blank" id="emailHelp" className="form-text">@idelcoco</a>
            <div className="flex-row">
                <div className="flex-large">
                    {
                        editing ? (
                            <div>
                                <h2>Editar usuario</h2>
                                <Edituserform setUser={setUser} />
                            </div>
                        ) : (
                            <div>
                                <h2>Usuario</h2>
                                <Adduserform setUser={setUser} />
                            </div>
                        )
                    }
                </div>
                <div className="flex-large">
                    <h2>Vista de usuarios</h2>
                    <Usertable user={user} setUser={setUser} editRow={editRow} />
                </div>
            </div>
        </div>
    )
}

export default Appuser;