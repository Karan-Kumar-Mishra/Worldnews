import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ProviderC } from "./provider.tsx";
import { HeroUIProvider } from "@heroui/react";
import "@/styles/globals.css";
import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="dark text-foreground bg-gradient-to-b from-neutral-900 to-neutral-700">
        <BrowserRouter>
          <Provider store={store}>
            <ProviderC>
              <App />
            </ProviderC>
          </Provider>
        </BrowserRouter>
      </main>
    </HeroUIProvider>
  </React.StrictMode>,
);
