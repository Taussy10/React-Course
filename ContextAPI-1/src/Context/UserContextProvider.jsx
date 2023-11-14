import { useState } from "react";
import UserContext from "./UserContext"

// Children is just like Outlet of Router which stores Comp which are gonna still(not going to refresh)
// theme provider is like Outlet which contains every values and provide necessary details
const UserContextProvider = (props) => {
  const[user, setUser] = useState('')
  return (
    <>
     <UserContext.Provider value={{user, setUser}}>
      {props.children}
     </UserContext.Provider>
    
     </>
  )
}

export default UserContextProvider; 