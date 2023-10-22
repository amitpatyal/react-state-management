import { useState } from 'react';
import './App.css'
import useUserContext, { UserContextProvider } from './ContextAPI/UserContext'
import UserDetails from './component/UserDetails'
import UserProfile from './component/UserProfile'

function App() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  const getUserDetails = () => {
    return (
      <div> {userFirstName} {userLastName} User Profile. </div>
    );
  };

  return (
    <UserContextProvider value={{ userFirstName, setUserFirstName, userLastName, setUserLastName, getUserDetails }}>
      <div className="card">
        <h1>ContextAPI Approach 03</h1>
        {getUserDetails()}
        <div>
          <UserDetails />
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
