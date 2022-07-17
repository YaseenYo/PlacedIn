import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import storeInstance from "./store";

export const StoreContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <StoreContext.Provider value={storeInstance}>
            <App />
        </StoreContext.Provider >
    </React.StrictMode>
  );
  