import { useRef, useState } from "react";
import amz from "./logo/amz.jpg"
import checkValidData from "./utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/firebase";
//import { useDispatch} from "react-redux";



const Login = () => {
   
  const[isSignInForm , setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  //const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  


  const handleButtonClick = () => {
    
    const message = checkValidData(email.current.value , password.current.value , name.current.value);
    setErrorMessage(message);
    if(message) return;
    
    if(!isSignInForm){
      // Do Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value ,
        password.current.value,
        name.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        })
        
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +" - "+ errorMessage);
       
      });
    }
    else{
      signInWithEmailAndPassword(
        auth,
        email.current.value ,
        password.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }         
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
       <div className="flex mt-6 justify-center">
        <img className=" w-40"  src={amz} alt="Logo" />
      </div>
      <div className="flex justify-center">
        <div className=" text-black absolute border border-gray-300 shadow-md rounded-md md:w-4/12 sm:w-6/12 lg:w-3/12 xl:w-3/12 w-7/12 p-8 ">
          <form  
          onSubmit={(e)=> e.preventDefault()}
          className='flex flex-col'>
            <h1 className="text-center text-3xl border-b border-b-gray-300 pb-4  ">{isSignInForm ? "Sign In" : "Create an account "}</h1>
            
            {!isSignInForm && <input 
            ref = {name}
            id="name"
            type='text' placeholder='Name' className='p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3'/>}

            <input
            ref={email}
            id="email"
            type='text' placeholder='Email Address' className='p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3'/>
            
            <input
            id="password"
            ref={password}
            type='Password' placeholder='Password' className='p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3'/>
            
            <p className="text-red-700 font-semibold w-52">{errorMessage}</p>

            <button className='mt-4 bg-orange-400 p-2 rounded-md font-semibold text-lg mb-2' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>

            <div className='my-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "Or Create an account" : "Already registered? Sign In"} </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
