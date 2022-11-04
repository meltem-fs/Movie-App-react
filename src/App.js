
import './App.css';
import AuthContexProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AuthContexProvider>
        <AppRouter />
      </AuthContexProvider>
    </div>
  );
}

export default App;
