import React from 'react'
import { auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
  
  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
  // An error happened.
   navigate("/error");
  });

  }

  return (
    <div className='bg-gradient-to-b from-black pl-3 absolute z-10 w-full flex justify-between'>
        <img className='w-48 mx-3  '
         src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='NetflixLogo'
        />

      {user && <div className='flex  p-2 '>
       <img className='h-14 w-14  '
       
        // src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        src={user.photoURL}
        alt='userLogo'
        />
        <button className='font-bold p-2 text-white '
        onClick={handleSignOut}>
          Sign Out
        </button>
       </div>}
    </div>
  )
}

export default Header