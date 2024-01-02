import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
const Login =()=>
{
    const[isSignInForm,setisSignInForm] = useState(true);
    const [errorMessage,seterrorMessage] = useState(null);

    const toggleSignForm=()=>{
           setisSignInForm(!isSignInForm); 
    }
    const email=useRef(null);
    const password=useRef(null);
    const handleButtomClick =()=>
    {
        const message=checkValidData(email.current.value,password.current.value);
        seterrorMessage(message);

    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="no backgroud img"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign in": "Sign out"}</h1>
                {! isSignInForm && (
                    <input type ="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-800"></input>
                )}
                <input ref={email}type ="text" placeholder="Email or phone number" className="p-2 m-2 w-full bg-gray-800"></input>

                <input ref={password}type ="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-800"></input>            
                <p className="text-red-500 w-full rounded-lg py-2 m-2">{errorMessage}</p>
                <button className="p-2 m-2 bg-red-700 w-full rounded-lg" onClick={handleButtomClick}>{isSignInForm ? "Sign in": "Sign out"}</button>
            <p className="py-4 cursor-pointer"onClick={toggleSignForm}>{isSignInForm ? "New to Netflix? Sign up Now": "Already registered?Sign in Now"}</p>
            </form>
        </div>
    )
}
export default Login;