
import './App.css';
import AuthContexProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthContexProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContexProvider>
    </div>
  );
}

export default App;
