import React,{useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import UserDetail from './UserDetail'

const UserList = () => {
    const {users}=useContext(UserContext);
    return users.length ? (
        <div className="flex flex-col justify-center w-2/3 p-4 m-4 bg-indigo-200 rounded-md mx-auto">
            <ul>
                    {
                        users.map(user=>{
                            return(
                                <UserDetail user={user} key={user.id}/>
                            )
                        })
                    }
            </ul>
        </div>
    ):(
        <div className="flex flex-col justify-center w-2/3 p-4 m-4 bg-indigo-200 rounded-md mx-auto">
            <p>No user found...</p>
        </div>
    )
}

export default UserList;
