import { AppProps } from 'next/app';

import '../shared/styles/global.scss';

const MyChat = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default MyChat;