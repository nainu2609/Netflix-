import { signOut ,onAuthStateChanged} from "firebase/auth";
import {auth } from "../utils/firebase";
import { useNavigate }from"react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
const Header =()=>{
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const user =useSelector(store=>store.user);
    const handleSignOut =()=>
    {
        signOut(auth).then(() => {
          
          }).catch((error) => {
            navigate('/error');
          });
          
    }
    useEffect(()=>
    {
        const unsubsribe =onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/");
              
            }
          });
    return ()=>unsubsribe();
        },[]);
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src=
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt ="No picture"/>
{ user && (
            <div className="flex">
            <img className = "w-10"alt= "usericon" src = {user.photoURL}/>
            <button onClick={handleSignOut}className="font-bold text-white ">Sign Out</button>
            </div>)}
        </div>
    )
}
export default Header;