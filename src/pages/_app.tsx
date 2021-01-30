import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";

const MyChat = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default MyChat;