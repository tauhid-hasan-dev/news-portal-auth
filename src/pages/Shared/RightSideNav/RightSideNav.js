import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Carousel from '../Carousel/Carousel';

const RightSideNav = () => {
    const {providerLogin,  setLoading} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setLoading(true)
        })
        .catch(error => console.error(error))
    } 

    return (
        <>
           <div className='flex flex-col gap-3 mb-5'>
                <button onClick={()=> handleGoogleSignIn()} className="btn btn-outline btn-primary flex gap-2"><FaGoogle /> Login with Google</button>
                <button className="btn btn-outline flex gap-2"><FaGithub/>Login with Github</button>
           </div>
           <p className='text-2xl font-semibold mb-3'>Find us on</p>
           <div className="btn-group btn-group-vertical w-full flex gap-2 mb-5">
                <button className="btn btn-outline flex gap-2 justify-start"><FaFacebook />Facebook</button>
                <button className="btn btn-outline  flex gap-2 justify-start"><FaYoutube />Youtube</button>
                <button className="btn btn-outline  flex gap-2 justify-start"><FaTwitter />Twitter</button>
                <button className="btn btn-outline  flex gap-2 justify-start"><FaInstagram />Instagram</button>
                <button className="btn btn-outline flex gap-2 justify-start"><FaWhatsapp />Whatsapp</button>
            </div>
            <div>
                <Carousel></Carousel>
            </div>
        </>
    );
};

export default RightSideNav;