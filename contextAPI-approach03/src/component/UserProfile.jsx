import useUserContext, { UserContextProvider } from "../ContextAPI/UserContext";

const UserProfile = () => {
    const { userFirstName, userLastName, getUserDetails } = useUserContext();

    return (
        <div className='read-the-docs'>
            <h2>{getUserDetails()} </h2>
            <div>
                <p>First Name:- {userFirstName}  </p>
                <p>Last Name:- {userLastName}  </p>
            </div>

        </div>
    )
}

export default UserProfile