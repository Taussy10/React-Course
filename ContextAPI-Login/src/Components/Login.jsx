import {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
// in this we are sending data using setUser to UI

// 1.username ko lowercase
function Login () {
  
// 2.  userName ko username likha {moral always write first one in lowercase all thing no camelcase 2nd one you can use pascal Case}
  const[username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  // we are asking data from UserContext.js but it has'nt so it will got provider and will get data but but there user is null so here we use setUser to update data from null to whatever you want 
  const {setUser}  = useContext(UserContext)   

  const handleSubmit = (e) => {
    e.preventDefault();
    // updated the state and put values into object so we can acess multiple properties
    setUser({username, password});
  };
  console.log(username);
  console.log(password);
  
  return (
    <>
      <h2>Login</h2>
      <input type="text" 
      placeholder='UserName'
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      />
      {/* just for giving gap betweent two inputs*/}
  {"  "}
      <input type="text"
       placeholder='Password'
      value={password}
      // you know naa why did we write in call back
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
export default Login