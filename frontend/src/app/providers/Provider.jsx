import AuthContextProvider from '../context/AuthContext';
import '../globals.css';

const Provider = ({ Component, pageProps })=> {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default Provider;
