import { useGoogleLogin } from "@react-oauth/google";

function useGoogle() {
    const GoogleSignIn = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log("login succeeded ", codeResponse);
        },
        onError: (error) => console.log("Login Failed:", error),
    });
    return {GoogleSignIn};
}


export default useGoogle;