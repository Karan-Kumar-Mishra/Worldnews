import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
function useGoogle() {
    const navigate = useNavigate();
    const GoogleSignIn = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log("login succeeded ", codeResponse);
            navigate("/news");
        },
        onError: (error) => console.log("Login Failed:", error),
    });
    const GoogleLogout = () => {
        googleLogout();
        console.log("logout successfull")
        navigate("/");
    };
    return { GoogleSignIn, GoogleLogout };
}


export default useGoogle;