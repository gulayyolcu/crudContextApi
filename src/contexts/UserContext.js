import React,{useState,createContext} from 'react'
import { uuid } from 'uuidv4';

export const UserContext=createContext();

const UserContextProvider = (props) => {

    const [users,setUsers]=useState([
        {id:1,name:'Andre Tarkovsky',username:'yönetmen'},
        {id:2,name:'Arthur Schopenhauer',username:'kadın düşmanı'},
        {id:3,name:'Friedrich Nietzsche',username:'Allahsız Kitapsız'}
    ]);

    const [editing,setEditing]=useState(false);

    const initialUser={id:null,name:'',username:''};

    const [currentUser,setCurrentUser]=useState(initialUser);

    const editUser=(id,user)=>{
        setEditing(true);
        setCurrentUser(user);
    }

    const updateUser=(newUser)=>{
        setUsers(
            users.map(user=>currentUser.id===user.id?newUser:user)
        );
        setCurrentUser(initialUser);
        setEditing(false);
    }

    const addUser=(name,username)=>{
        setUsers([...users,{name,username,id:uuid()}])
    }

    const deleteUser=id=>{
        setUsers(users.filter(user=>user.id!==id));
        setEditing(false);
    }

    return (
        <UserContext.Provider value={{users,addUser,deleteUser,editUser,setEditing,editing,initialUser,currentUser,updateUser}}>
                {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;