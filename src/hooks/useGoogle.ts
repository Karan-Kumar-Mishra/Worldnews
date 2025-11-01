import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setToken, setProfile } from '../Redux/Reducers'
import axios from "axios";

function useGoogle() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const GoogleSignIn = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log("login succeeded ", codeResponse);
            dispatch(setToken(codeResponse.access_token));
            if (codeResponse.access_token) {
                axios
                    .get(
                        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                        {
                            headers: {
                                Authorization: `Bearer ${codeResponse.access_token}`,
                                Accept: "application/json",
                            },
                        }
                    )
                    .then((res) => {
                        console.log("info=> ", res.data)
                        dispatch(setProfile(res?.data));
                        localStorage.setItem("email", res?.data?.email);
                        localStorage.setItem("name", res?.data?.name);
                        localStorage.setItem("picture", res?.data?.picture);
                        navigate("/news");
                    })
                    .catch((err) => console.log(err));
            }
      
        },
        onError: (error) => console.log("Login Failed:", error),
    });
    const GoogleLogout = () => {
        googleLogout();
        localStorage.clear();
        navigate("/");
    };
 

    return { GoogleSignIn, GoogleLogout };
}


export default useGoogle;