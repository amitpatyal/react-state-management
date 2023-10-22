import './App.css'
import { UserContextProvider } from './ContextAPI/UserContext'
import UserDetails from './component/UserDetails'
import UserProfile from './component/UserProfile'

function App() {

  return (
    <UserContextProvider>
      <div className="card">
        <h1>ContextAPI Approach 02</h1>
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
