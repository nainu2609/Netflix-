import { signOut } from "firebase/auth";
import {auth } from "../utils/firebase";
import { useNavigate }from"react-router-dom";
const Header =()=>{
    const navigate=useNavigate(); 
    const handleSignOut =()=>{
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            navigate('/error');
          });
          
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src=
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt ="No picture"/>


            <div className="flex">
            <img alt= "usericon" src = "https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbLVAuGs_FKN1bYYe0Dp9Lw80ZHvI_FCA3OQhGwcRJPEbPRdCoxqCpDJvcHXwP7Q0or42Kz5CfWTjgsDX9Paf0O5NLHBA4M.png?r=f6a"/>
            <button onClick={handleSignOut}className="font-bold text-white ">Sign Out</button>
            </div>
        </div>
    )
}
export default Header;