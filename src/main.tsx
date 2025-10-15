
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ProviderC } from "./provider.tsx";
import { HeroUIProvider } from "@heroui/react";
import "@/styles/globals.css";
import "@/styles/style.css";
import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT_ID}>
      <HeroUIProvider>
        <main className="dark text-foreground bg-black ">
          <BrowserRouter>
            <Provider store={store}>
              <ProviderC>
                <App />
              </ProviderC>
            </Provider>
          </BrowserRouter>
        </main>
      </HeroUIProvider>
    </GoogleOAuthProvider>
  ,
);
