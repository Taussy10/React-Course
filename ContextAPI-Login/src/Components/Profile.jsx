import { useContext } from 'react';
import UserContext from '../Context/UserContext';


const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) {
    return <div className="">Pl ease Login</div>;
  }
  return (
    <>
      <div>Welcome {user.username} your password: {user.password} </div>      
    </>
  );
};

export default Profile;
