import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import NETFLIX_LOGO, { PHOTO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptPage = useSelector((store) => store.gpt.showGptSearchPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    // Toggle the GPTSearch page, only show the page when clicked or else show normal browse page
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //we can use useRef instead of target value
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: PHOTO_URL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubsribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 mb-20 bg-gradient-to-b from-black  z-10  flex justify-between ">
      <img
        className="w-40 mx-3 md:mx-0 "
        src={NETFLIX_LOGO}
        alt="NetflixLogo"
      />

      {user && (
        <div className="flex  p-2 ">
          {showGptPage && <select className="text-center bg-gray-800 text-white m-2 rounded-lg shadow-lg"
          onChange={handleLanguageChange}>
            //modular coding
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} >{lang.name}</option> )}
            {/* <option value="en" >English</option>
            <option value="hindi">हिंदी</option>
            <option value="kannada">ಕನ್ನಡ</option> */}
          </select> }
          <button
            onClick={handleGptSearch}
            className="p-2 m-2 mx-10 opacity-85 bg-red-700 text-white bg-red-00 rounded-lg"
          >
           {showGptPage ? "Home" : "GPT Search"} 
          </button>

          <img
            className=" pt-2 h-11 w-10 "
            src={user.photoURL}
            alt="userLogo"
          />
          <button className="font-bold p-2 text-white " onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
