import '../styles/globals.css';
import { LoginProvider } from '../context';

export default function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
}