import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/Component/Layout/header';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{backgroundColor: 'black'}}>
        {/*<Header />*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
