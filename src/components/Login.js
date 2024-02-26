import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';


const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    // checkValidData(email,password)
      // console.log(email.current.value)
      // console.log(password.current.value)

      const message =  checkValidData(email.current.value,password.current.value )
      setErrorMessage(message)
      if(message) return ;// it will not go ahead if there is an err

      //Sign in/ Sign up

      if(!isSignIn){
        //Sign Up Logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
          //update API from firebase
          // Profile updated!
          updateProfile(user, {
            displayName: fullName.current.value, 
            photoURL: PHOTO_URL
          }).then(() => {
            
            // will upate store once again, updated info comes auth not from user which is not updated yet that is in this page
            // const {uid, email, displayName, photoURL} = user;
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              )
           
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+ "" +errorMessage)
        });
      }
      else {
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
       
        })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode+ "" +errorMessage)
  });

      }
  }

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div >
      <Header />

      <div className='absolute'>
        <img className='transform: scale-130 bg-gradient-to-t from-black bg-blend-lighten md:bg-blend-darken ' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg img' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute bg-black bg-opacity-80 p-14 my-36 mx-auto right-0 left-0 " >
        <h1 className='font-semibold text-4xl text-white p-2 m-2 '>
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn &&
          <input
            ref={fullName}
            type='text'
            placeholder='Full Name'
            className='p-4  m-2 w-full bg-gray-800 rounded-lg  text-white '
          />}
        <input
          ref={email}
          type='text'
          placeholder='Email or Phone Number'
          className='p-4 my-6 m-2 w-full bg-gray-800  rounded-lg   text-white'
        />
        <input
          ref={password}
          type='text'
          placeholder='Password'
           className='p-4  mb-6 m-2 w-full bg-gray-800 rounded-lg text-white ' 
            />

        <p className='text-red-400 font-semibold p-1 m-1'>{errorMessage}</p>

        <button 
        className='p-4 m-2 w-full bg-red-600 font-semibold text-white rounded-lg'
          onClick={handleButtonClick}
         > 
         {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <input type='checkbox' className='p-4 m-2' />
        <label className='text-gray-500 p-2'>Remember me</label>
        <h2 
        className='text-gray-400 font-bold p-2 pt-8 cursor-pointer hover:underline' 
        onClick={toggleSignInForm}>
        {isSignIn ? "New to Netflix? Sign Up now" : "Have an account? Sign In"}
        </h2>
        <p className='text-gray-400 p-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  )
}

export default Login