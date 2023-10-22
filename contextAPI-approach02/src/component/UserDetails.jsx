import useUserContext from '../ContextAPI/UserContext';

const UserDetails = () => {
    const { userFirstName, setUserFirstName, userLastName, setUserLastName } = useUserContext();

    return (
        <div className='read-the-docs'>
            <h2>User Details</h2>
            <div>
                <input type="text" name="userFirstName" id="userFirstName" placeholder='User First Name' value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} /> <br />
                <input type="text" name="userLastName" id="userLastName" placeholder='User Last Name' value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
            </div>
        </div >
    )
}

export default UserDetails