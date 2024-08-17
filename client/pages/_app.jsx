
import "../styles/globals.css";
import { Inter } from "next/font/google";

import { LoginProvider } from "@/context";
const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
     <LoginProvider>
   
      <Component {...pageProps} />
    </LoginProvider>
      
    </div>
  );
}
