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
            dispatch(setToken(codeResponse.access_token))
            navigate("/news");
        },
        onError: (error) => console.log("Login Failed:", error),
    });
    const GoogleLogout = () => {
        googleLogout();
        console.log("logout successfull")
        navigate("/");
    };
    const GetUserInfo = (token: string) => {
        if (token) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    console.log("info=> ", res.data)
                    dispatch(setProfile(res.data))
                })
                .catch((err) => alert(err));
        }
    };
    return { GoogleSignIn, GoogleLogout, GetUserInfo };
}


export default useGoogle;