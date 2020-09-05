import React,{useContext} from 'react'
import {UserContext} from '../contexts/UserContext'

const Navbar = () => {
    const {users}=useContext(UserContext);
    return (
        <div className="flex flex-col justify-center w-2/3 p-4 m-4 bg-indigo-200 rounded-md mx-auto">
            <h1 className="text-4xl text-gray-700 font-bold mx-auto uppercase">todo list with context api</h1>
            <p className="text-2xl text-gray-700 font-bold mx-auto">You have {users.length} user</p>
            
        </div>
    )
}

export default Navbar;
