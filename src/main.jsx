import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

/** 
function App() {

  const dispatch = useDispatch();

  const [islogin , setIsLogin] = useState(true);
  const [errorMsg , setErrorMsg] = useState(null);

  const toggleLoginForm = () => {
    setIsLogin(!islogin);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      
    if (user) {
      const {uid , email , displayName} = user;

      dispatch(addUser({uid: uid, email: email, displayName : displayName}))

      } else {
        dispatch(removeUser());
      }
      });
    } , []
  )

  const email = useRef(null);
  const password = useRef(null);
  const displayName= useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value , password.current.value);
     
    setErrorMsg(message);
    
    if(message)return;

    if(!islogin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value )
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + errorMessage);
      });
  
    } 
    else{  
      signInWithEmailAndPassword(auth, email.current.value, password.current.value , displayName.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + errorMessage);
      }); 
    }

  }

  return(
   
    <>
      <div className="flex mt-6 justify-center">
        <img className=" w-40"  src={amz} alt="Logo" />
      </div>
      
      <div className="flex justify-center">
        <div className=" text-black absolute border border-gray-300 shadow-md rounded-md md:w-3/12 p-8 ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col ">
            <h1 className="text-center text-3xl border-b border-b-gray-300 pb-4  ">{islogin ? "Sign In" : "Create an account "}</h1>
            
            {!islogin && <input
            className="p-2 pl-4 bg-slate-200 mt-6 rounded-md mb-3"
            type="text" placeholder="Your Name" name="name"  
            />}
            
            <input
            ref={email}
            className="p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3"
            type="text" placeholder="Email Address"
          
            />
          
            
            <input
            className="p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3"
            type="text" placeholder="Password"
            ref={password}
            />
        
            <p className="text-red-700 font-semibold">{errorMsg}</p>
            <button className=" mt-4 bg-orange-400 p-2 rounded-md font-semibold text-lg mb-2"
              onClick={handleButtonClick}>{islogin? "Sign In" : "Create an account"}</button>
            <p className=" cursor-pointer mt-3 mb-3"
              onClick={toggleLoginForm}
              >
                {islogin? "Or Create an account" : "Already registered? Sign In"} 
            </p>
              
          </form>
        </div>
      </div>
    </>
   
  )
}
*/
