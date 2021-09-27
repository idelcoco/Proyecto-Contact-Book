import React,{useState} from "react";
import {v4 as uuid} from "uuid";

const Adduserform=({setUser})=>
{
    const[name,setName]=useState('');
    const[lastname,setLastname]=useState('');
    const[smartphone,setSmartphone]=useState('');
    const[address,setAddress]=useState('');


    const saveUser=(e)=>{
        e.preventDefault();

        if(!name.trim()||!lastname.trim()||!address.trim()||smartphone<=0){
            return alert('Error todos los campos son requeridos');
        }

        const user={id:uuid(),name,lastname,smartphone,address};
        const userdls=JSON.parse(localStorage.getItem("user"));
        
        
        let newUser;
        if(userdls){
            newUser=[...userdls,user];
        }else{
            newUser=[user];
        }

        localStorage.setItem("user",JSON.stringify(newUser));
        //console.log(user);

        setUser(newUser);

        //limpiar 
        setName('');setLastname('');setSmartphone('');setAddress('')
    }

    return(
    <form onSubmit={(e)=>saveUser(e)} >
        <input type="text" name="name" placeholder="Nombre" 
            onChange={(e)=>setName(e.target.value)} value={name} />
        <br/>
        <input type="text" name="lastname" placeholder="Apellido" 
            onChange={(e)=>setLastname(e.target.value)} value={lastname} />
        <br/>
        <input type="number" name="smartphone" placeholder="Teléfono" 
            onChange={(e)=>setSmartphone(e.target.value)} value={smartphone} />
        <br/>
        <input type="text" name="address" placeholder="Dirección" 
            onChange={(e)=>setAddress(e.target.value)} value={address} />
        <button type="submit">Insertar</button>
    </form>
    )
}

export default Adduserform;