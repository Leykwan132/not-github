import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-y-scroll bg-black scrollbar-hide">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
