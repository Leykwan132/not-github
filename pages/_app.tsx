import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <div className="h-screen overflow-y-scroll bg-black scrollbar-hide">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
