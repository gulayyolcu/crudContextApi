import React,{useState,useContext} from 'react'
import {UserContext} from '../contexts/UserContext'

const UserForm = () => {
    const {addUser,editing,currentUser,updateUser}=useContext(UserContext);
    const [name,setName]=useState('');
    const [username,setUsername]=useState('')
    const [user,setUser]=useState(currentUser);
    const handleSubmit=e=>{
        e.preventDefault();
        addUser(name,username);
        setName('')
        setUsername('')
    }
  /*   const handleChange=e=>{
       const{name,value}=e.target.value;
        setUser({...user,[name]:value}) 
         setName(currentUser.name);
        setUsername(currentUser.username); 
    } */
    const handleNameChange=e=>{
        currentUser.name=e.target.value;
        setUser([user,currentUser])
    }

    const handleUsernameChange=e=>{
        currentUser.username=e.target.value;
        setUser([user,currentUser])
    }

    const handleEdit=e=>{
        e.preventDefault();
        if(currentUser.name && currentUser.username){
            updateUser(currentUser);
        }
    }
    return (
        
            editing?(
                <form className="flex flex-col justify-center w-2/3 p-4 m-4 bg-indigo-200 rounded-md mx-auto" onSubmit={handleEdit}>
                        <input className="p-2 m-2 rounded-md" type="text" name="name" value={currentUser.name} placeholder="edit name" onChange={handleNameChange} />
                        <input className="p-2 m-2 rounded-md" type="text" name="username" value={currentUser.username} placeholder="edit username" onChange={handleUsernameChange}/>
                        <input className="p-2 m-2 rounded-md bg-red-500 font-bold text-gray-800 w-32 mx-auto" type="submit" value="Edit User"/>
                    </form>
            ):(
                <form className="flex flex-col justify-center w-2/3 p-4 m-4 bg-indigo-200 rounded-md mx-auto" onSubmit={handleSubmit}>
                    <input className="p-2 m-2 rounded-md" type="text" name="name" value={name} placeholder="add a name" onChange={(e)=>setName(e.target.value)} />
                    <input className="p-2 m-2 rounded-md" type="text" name="username" value={username} placeholder="add a username" onChange={(e)=>setUsername(e.target.value)}/>
                    <input className="p-2 m-2 rounded-md bg-indigo-500 font-bold text-gray-800 w-32 mx-auto" type="submit" value="Add User"/>
                </form>
            )
        
       
    )
}

export  default UserForm;
