import useSupabase from "./useSupabase"

export default function useGithub() {
  const { supabase } = useSupabase();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log("signOut error =>", error);
  }
  const Getuser = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("GetUser error =>", userError);
      alert(userError)
    } else {
      console.log("User info =>", user);
      localStorage.setItem("email", user?.email || "");
    }
  }

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:5173/news",
      },
    });

    if (error) {
      console.error("SignIn error =>", error);
      return;
    }

    console.log("OAuth response =>", data);
  }


  return { signInWithGithub, signOut, Getuser };
}
