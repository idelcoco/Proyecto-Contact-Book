import React from "react";

const Usertable = ({ user, setUser, editRow }) => 
{
    const deleteUser=(id)=>{
        const oldUser=[...user];
        const newUser=oldUser.filter((item)=>item.id!==id);

        localStorage.setItem('user',JSON.stringify(newUser));

        //console.log(newUser);
        setUser(newUser);
    }

    const updateUser=(id)=>{
        return(<h1>hola</h1>)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {user?.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.smartphone}</td>
                        <td>{item.address}</td>
                        <td>
                            <button className="button muted-button" onClick={()=>{editRow(user)}} >Editar</button>
                            <button className="button muted-button" onClick={()=>deleteUser(item.id)} >Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Usertable;