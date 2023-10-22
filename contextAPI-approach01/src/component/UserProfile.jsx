import React, { useContext } from 'react'
import UserContext from '../ContextAPI/UserContext'

const UserProfile = () => {
    const { userFirstName, userLastName } = useContext(UserContext);
    return (
        <div className='read-the-docs'>
            <h2>User Profile</h2>
            <div>
                <p>First Name:- {userFirstName}  </p>
                <p>Last Name:- {userLastName}  </p>
            </div>

        </div>
    )
}

export default UserProfile