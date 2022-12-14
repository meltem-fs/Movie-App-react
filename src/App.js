import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
