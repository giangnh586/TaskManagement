// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/store/auth-context';
import MainRoute from './routes';

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
