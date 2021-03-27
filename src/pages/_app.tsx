import CreateGlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CreateGlobalStyle />
    </>
  )
}

export default MyApp
