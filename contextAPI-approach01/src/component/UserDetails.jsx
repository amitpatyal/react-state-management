import React, { useContext } from 'react'
import UserContext from '../ContextAPI/UserContext';

const UserDetails = () => {
    const { setUserFirstName, setUserLastName } = useContext(UserContext);
    return (
        <div className='read-the-docs'>
            <h2>User Details</h2>
            <div>
                <input type="text" name="userFirstName" id="userFirstName" placeholder='User First Name' onChange={(e) => setUserFirstName(e.target.value)} /> <br />
                <input type="text" name="userLastName" id="userLastName" placeholder='User Last Name' onChange={(e) => setUserLastName(e.target.value)} />
            </div>
        </div >
    )
}

export default UserDetails