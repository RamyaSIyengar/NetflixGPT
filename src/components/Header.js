import React,  { useEffect }  from 'react'
import { auth, } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {onAuthStateChanged} from "firebase/auth"
import NETFLIX_LOGO, {PHOTO_URL} from "../utils/constants"

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
     signOut(auth).then(() => {
    }).catch((error) => {
    // An error happened.
    navigate("/error");
    });

  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:PHOTO_URL}))
        navigate("/browse")
        
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubsribe when component unmounts
    return () => unsubscribe();
   }, [])

  return (
    <div className='absolute w-screen px-8 py-2 mb-20 bg-gradient-to-b from-black  z-10  flex justify-between '>
        <img className='w-40 mx-3 md:mx-0 '
         src= {NETFLIX_LOGO}
        alt='NetflixLogo'
        />

      {user && <div className='flex  p-2 '>
        <h3 className='font-bold p-2 my-2 pr-16 text-white' >Hi {user.displayName}</h3>
       <img className=' pt-2 h-11 w-10 '
       
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