import React,{useContext} from 'react'
import {UserContext} from '../contexts/UserContext'

const UserDetail = ({user}) => {
    const {deleteUser,editUser}=useContext(UserContext);
    
  

    return (
        <li className="p-4 m-2 rounded-md bg-indigo-400 font-bold text-gray-700">
            <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-900 text-opacity-75">{user.name}</p>
                        <p className="text-gray-700 text-opacity-75">{user.username}</p>
                    </div>
                    <div className="text-gray-700">
                        <i onClick={()=>deleteUser(user.id)} className="fas fa-trash-alt text-xl"></i>
                        <i onClick={()=>editUser(user.id,user)} className="fas fa-edit ml-4 text-xl"></i>
                    </div>
            </div>
        </li>
    )
}

export default UserDetail;
